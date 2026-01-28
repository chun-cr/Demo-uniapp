// 录音管理器，支持多实例
class RecordManager {
    static recorderManager = null
    static instances = new Map()
    static isInitialized = false

    constructor(id = 'default') {
        this.id = id
        this.tempFilePath = ''
        this.isRecording = false
        this.isStopping = false // 新增：正在停止中的状态
        this.recordTime = 0
        this.timer = null
        this.onTimeUpdate = null  //用于获取录音时长和格式化时间
        this.onVolumeUpdate = null
        this.stopResolve = null
        this.instanceId = Date.now() + Math.random()
        this.stopTimeout = null
        
        // 音量计算相关属性 (集成 VolumeCalculator 逻辑)
        this.silenceThreshold = 60
        this.history = []
        this.maxHistorySize = 50
        this.lastVolume = 0

        // 注册实例
        RecordManager.instances.set(this.instanceId, this)
        console.log(`创建录音管理器实例: ${this.id}, 实例ID: ${this.instanceId}`)
    }

    // 静态初始化录音管理器
    static initStaticRecorder() {
        if (!RecordManager.isInitialized) {
            console.log('初始化静态录音管理器')
            RecordManager.recorderManager = uni.getRecorderManager()
            
            // 监听录音结束
            RecordManager.recorderManager.onStop((res) => {
                console.log('全局录音停止事件触发', res)
                RecordManager.instances.forEach(instance => {
                    instance.handleStopEvent(res)
                })
            })
            
            // 监听录音错误
            RecordManager.recorderManager.onError((err) => {
                console.error('全局录音错误事件:', err)
                RecordManager.instances.forEach(instance => {
                    instance.handleErrorEvent(err)
                })
            })
            
            // 监听音频帧数据
            RecordManager.recorderManager.onFrameRecorded((res) => {
                RecordManager.instances.forEach(instance => {
                    // 只有真正录音中且未在停止中的实例才处理音量
                    if (instance.isRecording && !instance.isStopping) {
                        instance.handleFrameRecordedEvent(res)
                    }
                })
            })
            
            RecordManager.isInitialized = true
        }
    }

    init() {
        RecordManager.initStaticRecorder()
        this.recorderManager = RecordManager.recorderManager
    }

    // 处理录音结束事件
    handleStopEvent(res) {
        // 只要是当前实例触发的停止（无论 isRecording 还是 isStopping）
        if (this.isRecording || this.isStopping) {
            console.log(`${this.id} 捕获到停止文件:`, res.tempFilePath)
            this.isRecording = false
            this.isStopping = false
            this.stopTimer()
            this.tempFilePath = res.tempFilePath

            if (this.stopTimeout) {
                clearTimeout(this.stopTimeout)
                this.stopTimeout = null
            }

            if (this.stopResolve) {
                this.stopResolve()
                this.stopResolve = null
            }
        }
    }

    handleErrorEvent(err) {
        if (this.isRecording || this.isStopping) {
            this.isRecording = false
            this.isStopping = false
            this.stopTimer()
            if (this.stopResolve) {
                this.stopResolve()
                this.stopResolve = null
            }
            uni.showToast({ title: '录音错误', icon: 'none' })
        }
    }

    // 集成的高级音量计算
    calculateVolume(frameData) {
        if (!frameData || frameData.length === 0) return 0;
        
        const dataArray = frameData instanceof ArrayBuffer ? new Uint8Array(frameData) : frameData;
        
        let sum = 0;
        let sumSquared = 0;
        const len = dataArray.length;
        
        for (let i = 0; i < len; i++) {
            const sample = dataArray[i] - 128;
            sum += sample;
            sumSquared += sample * sample;
        }
        
        const mean = sum / len;
        // DC Offset 校正
        const rms = Math.sqrt(Math.max(sumSquared / len - mean * mean, 0));
        
        // 动态阈值更新
        this.history.push(rms);
        if (this.history.length > this.maxHistorySize) this.history.shift();
        
        if (this.history.length >= 20) {
            const sorted = [...this.history].sort((a, b) => a - b);
            const baseline = sorted[Math.floor(sorted.length * 0.1)];
            this.silenceThreshold = baseline * 1.5;
        }
        
        let volume = 0;
        if (rms > this.silenceThreshold) {
            // 对数分贝映射
            const db = 20 * Math.log10((rms - this.silenceThreshold) / 50 + 1e-6);
            volume = Math.round(Math.min(Math.max(db + 50, 0), 100));
        }
        
        // 一阶低通滤波平滑
        const smoothed = this.lastVolume * 0.6 + volume * 0.4;
        this.lastVolume = smoothed;
        return Math.round(smoothed);
    }

    handleFrameRecordedEvent(res) {
        const audioData = res.frameBuffer || res.data || res.buffer;
        if (audioData) {
            const volume = this.calculateVolume(audioData);
            if (this.onVolumeUpdate) this.onVolumeUpdate(volume);
        }
    }

    startRecord() {
        return new Promise((resolve, reject) => {
            if (!this.recorderManager) this.init();
            uni.getSetting({
                success: (res) => {
                    if (!res.authSetting['scope.record']) {
                        uni.authorize({
                            scope: 'scope.record',
                            success: () => { this._doStartRecord(); resolve(); },
                            fail: () => reject('权限被拒绝')
                        })
                    } else {
                        this._doStartRecord();
                        resolve();
                    }
                }
            })
        })
    }

    _doStartRecord() {
        const recordOptions = {
            duration: 600000,
            sampleRate: 16000,
            numberOfChannels: 1,
            encodeBitRate: 96000,
            format: 'mp3',
            frameSize: 4 // 增加到 4KB，减少回调频率提升稳定性
        }
        this.tempFilePath = '';
        this.lastVolume = 0;
        this.history = [];
        this.isRecording = true;
        this.isStopping = false;
        this.recorderManager.start(recordOptions);
        this.startTimer();
    }

    stopRecord() {
        return new Promise((resolve) => {
            if (this.recorderManager && this.isRecording) {
                console.log(`${this.id} 停止请求，进入等待状态...`);
                this.isStopping = true; // 标记正在停止
                this.isRecording = false; // 立即停止 UI 上的音量计算
                this.stopResolve = resolve;
                
                // 停止音量回调
                if (this.onVolumeUpdate) this.onVolumeUpdate(0);

                this.recorderManager.stop();

                this.stopTimeout = setTimeout(() => {
                    console.warn(`${this.id} 停止超时，强制释放`);
                    this.handleStopEvent({ tempFilePath: this.tempFilePath });
                }, 4000); 
            } else {
                resolve();
            }
        })
    }

    startTimer() {
        this.stopTimer();
        this.recordTime = 0;
        this.timer = setInterval(() => {
            this.recordTime++;
            if (this.onTimeUpdate) this.onTimeUpdate(this.recordTime, this.getFormattedTime());
        }, 1000);
    }

    stopTimer() {
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        if (this.stopTimeout) { clearTimeout(this.stopTimeout); this.stopTimeout = null; }
    }

    getRecordFile() { return this.tempFilePath; }
    getFormattedTime() {
        const m = Math.floor(this.recordTime / 60);
        const s = this.recordTime % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    setTimeUpdateCallback(callback) { this.onTimeUpdate = callback; }
    setVolumeUpdateCallback(callback) { this.onVolumeUpdate = callback; }

    destroy() {
        if (this.isRecording) this.stopRecord();
        this.stopTimer();
        RecordManager.instances.delete(this.instanceId);
    }
}

const recordManagerInstance = new RecordManager()
export default recordManagerInstance
export { RecordManager }
