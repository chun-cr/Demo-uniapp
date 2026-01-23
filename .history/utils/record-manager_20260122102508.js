// 录音管理器，支持多实例
class RecordManager {
    static recorderManager = null
    static instances = new Map()
    static isInitialized = false

    constructor(id = 'default') {
        this.id = id
        this.tempFilePath = ''
        this.isRecording = false
        this.recordTime = 0
        this.timer = null
        this.onTimeUpdate = null
        this.onVolumeUpdate = null  // 音量更新回调
        this.stopResolve = null
        this.instanceId = Date.now() + Math.random()
        this.stopTimeout = null
        this.frameRecordedHandler = null  // 音频帧监听器

        // 注册实例
        RecordManager.instances.set(this.instanceId, this)

        console.log(`创建录音管理器实例: ${this.id}, 实例ID: ${this.instanceId}`)
    }
    /*
    uni.getRecorderManager() 是全局唯一的：
    uni-app 中，无论调用多少次 uni.getRecorderManager()，返回的都是同一个录音管理器实例（类似单例模式），无法为每个 RecordManager 实例创建独立的录音管理器。

    由于录音管理器是全局的，其 onStop/onError 事件会在 “任何实例停止录音” 或 “任何实例发生错误” 时触发。
    此时需要通过 RecordManager.instances 遍历所有实例，将事件分发给对应的实例（每个实例通过 isRecording 判断是否需要处理该事件）
    */

    // 静态初始化录音管理器
    static initStaticRecorder() {
        if (!RecordManager.isInitialized) {
            console.log('初始化静态录音管理器')
            RecordManager.recorderManager = uni.getRecorderManager()

            // 监听录音结束（静态事件，通知所有实例）
            RecordManager.recorderManager.onStop((res) => {
                console.log('静态录音结束事件', res)

                // 通知所有活跃实例
                RecordManager.instances.forEach(instance => {
                    instance.handleStopEvent(res)
                })
            })

            // 监听录音错误（静态事件，通知所有实例）
            RecordManager.recorderManager.onError((err) => {
                console.error('静态录音错误事件:', err)

                // 通知所有活跃实例
                RecordManager.instances.forEach(instance => {
                    instance.handleErrorEvent(err)
                })
            })

            RecordManager.isInitialized = true
        }
    }

    // 初始化实例
    init() {
        // 确保静态录音管理器已初始化
        RecordManager.initStaticRecorder()
        this.recorderManager = RecordManager.recorderManager
        console.log(`初始化录音管理器实例: ${this.id}`)
    }

    // 处理录音结束事件
    handleStopEvent(res) {
        console.log(`${this.id} 处理录音结束事件，当前isRecording: ${this.isRecording}`)

        // 只有当前实例处于录音状态时才处理
        if (this.isRecording) {
            this.isRecording = false
            this.stopTimer()
            this.tempFilePath = res.tempFilePath

            // 清除超时计时器
            if (this.stopTimeout) {
                clearTimeout(this.stopTimeout)
                this.stopTimeout = null
            }

            if (this.stopResolve) {
                console.log(`${this.id} 调用stopResolve`)
                this.stopResolve()
                this.stopResolve = null
            }
        }
    }

    // 处理录音错误事件
    handleErrorEvent(err) {
        console.log(`${this.id} 处理录音错误事件，当前isRecording: ${this.isRecording}`)

        // 只有当前实例处于录音状态时才处理
        if (this.isRecording) {
            this.isRecording = false
            this.stopTimer()

            // 清除超时计时器
            if (this.stopTimeout) {
                clearTimeout(this.stopTimeout)
                this.stopTimeout = null
            }

            if (this.stopResolve) {
                console.log(`${this.id} 调用stopResolve（错误）`)
                this.stopResolve()
                this.stopResolve = null
            }

            uni.showToast({
                title: '录音失败: ' + (err.errMsg || err.message),
                icon: 'none'
            })
        }
    }

    // 设置时间更新回调
    setTimeUpdateCallback(callback) {
        this.onTimeUpdate = callback
    }

    // 设置音量更新回调
    setVolumeUpdateCallback(callback) {
        this.onVolumeUpdate = callback
    }


    // 开始录音
    startRecord() {
        return new Promise((resolve, reject) => {
            if (!this.recorderManager) {
                this.init()
            }

            // 检查权限
            uni.getSetting({
                success: (res) => {
                    if (!res.authSetting['scope.record']) {
                        // 申请录音权限
                        uni.authorize({
                            scope: 'scope.record',
                            success: () => {
                                this._doStartRecord()
                                resolve()
                            },
                            fail: () => {
                                uni.showModal({
                                    title: '提示',
                                    content: '需要录音权限，请允许使用麦克风',
                                    success: (modalRes) => {
                                        if (modalRes.confirm) {
                                            uni.openSetting()
                                        }
                                    }
                                })
                                reject('权限被拒绝')
                            }
                        })
                    } else {
                        // 已有权限
                        this._doStartRecord()
                        resolve()
                    }
                },
                fail: (err) => {
                    reject('检查权限失败: ' + (err.errMsg || err.message))
                }
            })
        })
    }

    // 执行开始录音
    _doStartRecord() {
        // 配置录音参数，启用音频帧监听
        const recordOptions = {
            // 启用音频帧数据回调（每帧大小，单位KB）
            // 设置frameRecordSize可以触发onFrameRecorded事件
            frameRecordSize: 1  // 1KB，约每50ms触发一次
        }

        // 尝试使用配置参数启动录音
        try {
            this.recorderManager.start(recordOptions)
        } catch (error) {
            // 如果参数不支持，使用默认方式
            console.warn(`${this.id} 使用配置参数启动失败，使用默认方式:`, error)
            this.recorderManager.start()
        }

        this.isRecording = true
        this.startTimer()
        
        // 监听音频帧数据（实时音量）
        this.setupFrameRecordedListener()
    }

    // 设置音频帧监听
    setupFrameRecordedListener() {
        // 清除之前的监听器
        if (this.frameRecordedHandler) {
            // 注意：uni-app可能不支持移除监听器，所以我们需要在回调中判断实例状态
        }

        // 监听音频帧数据
        try {
            this.frameRecordedHandler = (res) => {
                // 只有当前实例在录音时才处理
                if (!this.isRecording) {
                    return
                }

                // 计算音量
                const volume = this.calculateVolume(res)
                
                // 调用音量更新回调
                if (this.onVolumeUpdate && volume !== null) {
                    this.onVolumeUpdate(volume)
                }
            }

            // 检查是否支持onFrameRecorded
            if (this.recorderManager && typeof this.recorderManager.onFrameRecorded === 'function') {
                this.recorderManager.onFrameRecorded(this.frameRecordedHandler)
                console.log(`${this.id} 已启用音频帧监听`)
            } else {
                console.log(`${this.id} 当前平台不支持onFrameRecorded，将使用模拟数据`)
                // 如果不支持，启动模拟音量更新
                this.startSimulatedVolumeUpdate()
            }
        } catch (error) {
            console.warn(`${this.id} 设置音频帧监听失败:`, error)
            // 如果失败，启动模拟音量更新
            this.startSimulatedVolumeUpdate()
        }
    }

    // 计算音量
    calculateVolume(frameData) {
        try {
            // 不同平台返回的数据格式可能不同
            // 微信小程序: { frameBuffer: ArrayBuffer }
            // 其他平台可能不同
            
            if (frameData.frameBuffer) {
                // 处理ArrayBuffer数据
                const buffer = frameData.frameBuffer
                const view = new Int16Array(buffer)
                
                // 计算RMS（均方根）值作为音量
                let sum = 0
                for (let i = 0; i < view.length; i++) {
                    sum += view[i] * view[i]
                }
                const rms = Math.sqrt(sum / view.length)
                
                // 归一化到0-100范围
                const volume = Math.min(100, (rms / 32768) * 100)
                return volume
            } else if (frameData.volumes) {
                // 某些平台可能直接返回音量数组
                const volumes = frameData.volumes
                if (Array.isArray(volumes) && volumes.length > 0) {
                    const avgVolume = volumes.reduce((a, b) => a + b, 0) / volumes.length
                    return Math.min(100, avgVolume * 100)
                }
            }
            
            return null
        } catch (error) {
            console.warn(`${this.id} 计算音量失败:`, error)
            return null
        }
    }

    // 启动模拟音量更新（当平台不支持onFrameRecorded时）
    startSimulatedVolumeUpdate() {
        // 清除之前的模拟定时器
        if (this.simulatedVolumeTimer) {
            clearInterval(this.simulatedVolumeTimer)
        }

        // 模拟音量变化（基于随机值，但会有一些平滑变化）
        let baseVolume = 30
        this.simulatedVolumeTimer = setInterval(() => {
            if (!this.isRecording) {
                clearInterval(this.simulatedVolumeTimer)
                this.simulatedVolumeTimer = null
                return
            }

            // 模拟音量变化（20-80之间，有随机波动）
            baseVolume += (Math.random() - 0.5) * 10
            baseVolume = Math.max(20, Math.min(80, baseVolume))
            
            if (this.onVolumeUpdate) {
                this.onVolumeUpdate(baseVolume)
            }
        }, 100) // 每100ms更新一次
    }

    // 停止模拟音量更新
    stopSimulatedVolumeUpdate() {
        if (this.simulatedVolumeTimer) {
            clearInterval(this.simulatedVolumeTimer)
            this.simulatedVolumeTimer = null
        }
    }

    // 停止录音
    stopRecord() {
        return new Promise((resolve) => {
            console.log(`${this.id} 开始停止录音，当前isRecording: ${this.isRecording}`)

            if (this.recorderManager && this.isRecording) {
                // 保存resolve函数
                this.stopResolve = resolve

                // 调用录音管理器的stop方法
                this.recorderManager.stop()

                // 添加超时处理，防止onStop回调不触发导致Promise永远pending
                this.stopTimeout = setTimeout(() => {
                    console.warn(`${this.id} 录音停止超时，强制resolve`)

                    // 更新状态
                    this.isRecording = false
                    this.stopTimer()

                    // 调用resolve
                    if (this.stopResolve) {
                        this.stopResolve()
                        this.stopResolve = null
                    }

                    // 清除超时计时器
                    this.stopTimeout = null
                }, 3000) // 3秒超时

                console.log(`${this.id} 已调用recorderManager.stop()`)
            } else {
                console.log(`${this.id} 未处于录音状态，直接resolve`)
                resolve()
            }
        })
    }

    // 开始计时
    startTimer() {
        // 先清除之前可能存在的计时器，防止多个计时器同时运行
        this.stopTimer()

        this.recordTime = 0
        this.timer = setInterval(() => {
            this.recordTime++  // 只是更新了类的属性
            if (this.onTimeUpdate){
                this.onTimeUpdate(this.recordTime,this.getFormattedTime())
            }
        }, 1000)
    }

    // 停止计时
    stopTimer() {
        console.log(`${this.id} 停止计时`)

        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }

        // 同时清除可能存在的停止超时计时器
        if (this.stopTimeout) {
            clearTimeout(this.stopTimeout)
            this.stopTimeout = null
        }

        // 停止模拟音量更新
        this.stopSimulatedVolumeUpdate()
    }

    // 获取录音文件路径
    getRecordFile() {
        return this.tempFilePath
    }

    // 格式化时间
    getFormattedTime() {
        const minutes = Math.floor(this.recordTime / 60)
        const seconds = this.recordTime % 60
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    // 清理
    destroy() {
        console.log(`${this.id} 开始清理`)

        // 停止录音
        if (this.isRecording) {
            this.stopRecord()
        }

        // 停止计时和超时计时器
        this.stopTimer()

        // 从实例列表中移除
        RecordManager.instances.delete(this.instanceId)

        console.log(`${this.id} 清理完成`)
    }
}

// 导出单例
const recordManagerInstance = new RecordManager()
export default recordManagerInstance

//导出类
export { RecordManager }