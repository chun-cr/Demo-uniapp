<template>
  <view class="canvas-record-page">
    <!-- 状态显示 -->
    <view class="status-section">
      <text class="status-text">{{ statusText }}</text>
      <text class="time-text" v-if="isRecording || hasRecord">{{ formattedTime }}</text>
    </view>

    <!-- Canvas波形图 -->
    <view class="canvas-container">
      <canvas 
        canvas-id="waveformCanvas" 
        id="waveformCanvas"
        class="waveform-canvas"
        :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
      ></canvas>
    </view>

    <!-- 控制按钮 -->
    <view class="control-section">
      <!-- 开始录音 -->
      <button
        class="control-btn start-btn"
        v-if="!isRecording && !hasRecord"
        @tap="handleStartRecord"
        :loading="isStarting"
      >
        开始录音
      </button>

      <!-- 停止录音 -->
      <button
        class="control-btn stop-btn"
        v-if="isRecording"
        @tap="handleStopRecord"
      >
        停止录音
      </button>

      <!-- 重新录音 -->
      <button
        class="control-btn redo-btn"
        v-if="!isRecording && hasRecord"
        @tap="handleRedoRecord"
      >
        重新录音
      </button>

      <!-- 播放录音 -->
      <button
        class="control-btn play-btn"
        v-if="hasRecord && !isRecording"
        @tap="handlePlay"
      >
        {{ isPlaying ? '暂停播放' : '播放录音' }}
      </button>
    </view>

    <!-- 调试信息 -->
    <view class="debug-info" v-if="isDev">
      <text>文件路径: {{ filePath || '无' }}</text>
      <text>录音时长: {{ recordTime }}秒</text>
    </view>
  </view>
</template>

<script>
import { RecordManager } from '../../utils/record-manager.js'
import CanvasWaveformManager from './canvas-record.js'

export default {
  data() {
    return {
      isRecording: false,      // 是否正在录音
      hasRecord: false,        // 是否有录音文件
      isPlaying: false,        // 是否正在播放
      isStarting: false,       // 开始录音中
      recordTime: 0,           // 录音时长
      filePath: '',            // 文件路径
      isDev: true,             // 开发模式
      recordManager: null,     // 录音管理器
      innerAudioContext: null, // 音频播放上下文
      
      // Canvas相关
      canvasWidth: 0,          // Canvas宽度
      canvasHeight: 200,       // Canvas高度
      canvasContext: null,     // Canvas上下文
      waveformManager: null,   // 波形管理器
      
      // 音量相关
      currentVolume: 0,        // 当前音量
      
      
    }
  },

  computed: {
    // 状态文本
    statusText() {
      if (this.isRecording) return '🎤 录音中...'
      if (this.hasRecord) return '✅ 录音完成'
      return '📱 准备录音'
    },

    // 格式化时间
    formattedTime() {
      const minutes = Math.floor(this.recordTime / 60)
      const seconds = this.recordTime % 60
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  },

  onLoad() {
      console.log('Canvas录音页面加载')
      
      // 初始化录音管理器
      this.recordManager = new RecordManager('canvas_record')
      this.recordManager.init()
      
      // 设置时间更新回调
      this.recordManager.setTimeUpdateCallback((seconds, formatted) => {
        if (this.isRecording || this.recordManager.isRecording) {
          this.recordTime = seconds
        }
      })

      // 设置音量更新回调
      this.recordManager.setVolumeUpdateCallback((volume) => {
        this.currentVolume = volume
        if (this.waveformManager) {
          this.waveformManager.updateVolume(volume)
        }
      })

      // 初始化Canvas
      this.initCanvas()
      
      // 初始化音频播放上下文
      this.initInnerAudioContext()
    },

  onUnload() {
    // 清理资源
    if (this.recordManager) {
      this.recordManager.destroy()
    }
    
    // 销毁音频上下文
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy()
    }
  },

  methods: {
    // 初始化Canvas
    initCanvas() {
      // 使用nextTick确保DOM已渲染
      this.$nextTick(() => {
        // 获取系统信息，计算Canvas宽度
        const systemInfo = uni.getSystemInfoSync()
        this.canvasWidth = systemInfo.windowWidth - 60 // 减去左右边距
        
        // 获取Canvas上下文
        this.canvasContext = uni.createCanvasContext('waveformCanvas', this)
        
        // 初始化波形管理器
        this.waveformManager = new CanvasWaveformManager(
          this.canvasContext, 
          this.canvasWidth, 
          this.canvasHeight
        )
        
        // 绘制初始背景
        this.waveformManager.drawBackground()
      })
    },



    // 初始化音频播放上下文
    initInnerAudioContext() {
      this.innerAudioContext = uni.createInnerAudioContext()
      this.innerAudioContext.autoplay = false
      this.innerAudioContext.loop = false
      this.innerAudioContext.volume = 1.0
      
      this.innerAudioContext.onPlay(() => {
        console.log('音频开始播放')
        this.isPlaying = true
      })
      
      this.innerAudioContext.onPause(() => {
        console.log('音频暂停')
        this.isPlaying = false
      })
      
      this.innerAudioContext.onStop(() => {
        console.log('音频停止')
        this.isPlaying = false
      })
      
      this.innerAudioContext.onEnded(() => {
        console.log('播放完成')
        this.isPlaying = false
      })
      
      this.innerAudioContext.onError((err) => {
        console.error('播放失败:', err)
        uni.showToast({
          title: '播放失败',
          icon: 'none'
        })
        this.isPlaying = false
      })
    },

    // 开始录音
    async handleStartRecord() {
      console.log('点击开始录音')
      this.isStarting = true

      try {
        // 重置状态
        this.recordTime = 0
        this.currentVolume = 0
        this.hasRecord = false
        this.filePath = ''
        
        // 重置波形图
        if (this.waveformManager) {
          this.waveformManager.reset()
        }

        await this.recordManager.startRecord()
        this.isRecording = true

        uni.showToast({
          title: '开始录音',
          icon: 'none',
          duration: 1500
        })
      } catch (error) {
        console.error('开始录音失败:', error)
        uni.showToast({
          title: '开始录音失败',
          icon: 'none'
        })
      } finally {
        this.isStarting = false
      }
    },

    // 停止录音
    async handleStopRecord() {
      console.log('点击停止录音')
      
      try {
        await this.recordManager.stopRecord()
        this.isRecording = false
        
        this.hasRecord = true
        this.filePath = this.recordManager.getRecordFile()

        uni.showToast({
          title: '录音完成',
          icon: 'success'
        })

        console.log('录音文件路径:', this.filePath)
      } catch (error) {
        console.error('停止录音失败:', error)
        uni.showToast({
          title: '停止录音失败',
          icon: 'none'
        })
      }
    },

    // 重新录音
    handleRedoRecord() {
      uni.showModal({
        title: '提示',
        content: '确定要重新录音吗？',
        success: (res) => {
          if (res.confirm) {
            this.isRecording = false
            this.hasRecord = false
            this.isPlaying = false
            this.recordTime = 0
            this.filePath = ''
            this.currentVolume = 0
            
            // 重置录音管理器
            this.recordManager.tempFilePath = ''
            this.recordManager.recordTime = 0
            
            // 重新绘制背景
            if (this.waveformManager) {
              this.waveformManager.reset()
            }
          }
        }
      })
    },

    // 播放录音
    handlePlay() {
      console.log('点击播放录音')
      
      if (!this.filePath) {
        uni.showToast({
          title: '请先录音',
          icon: 'none'
        })
        return
      }

      if (this.isPlaying) {
        // 暂停播放
        this.innerAudioContext.pause()
        this.isPlaying = false
      } else {
        // 开始播放
        this.innerAudioContext.src = this.filePath
        this.innerAudioContext.play()
        this.isPlaying = true
      }
    }
  }
}
</script>

<style scoped>
.canvas-record-page {
  padding: 30rpx;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 状态区域 */
.status-section {
  text-align: center;
  margin-bottom: 40rpx;
}

.status-text {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 10rpx;
}

.time-text {
  font-size: 48rpx;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1989fa;
  font-weight: 700;
  display: block;
}

/* Canvas容器 */
.canvas-container {
  width: 100%;
  margin: 30rpx 0;
  background: #f5f5f5;
  border-radius: 16rpx;
  padding: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.waveform-canvas {
  background: #f5f5f5;
  border-radius: 8rpx;
}

/* 控制按钮区域 */
.control-section {
  width: 100%;
  max-width: 600rpx;
  margin-top: 40rpx;
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.control-btn {
  width: 100%;
  height: 96rpx;
  border-radius: 48rpx;
  font-size: 32rpx;
  font-weight: 600;
  border: none;
  transition: all 0.2s ease;
}

.control-btn:active {
  transform: scale(0.98);
  opacity: 0.9;
}

.start-btn {
  background: #07c160;
  color: white;
}

.stop-btn {
  background: #ee0a24;
  color: white;
}

.redo-btn {
  background: #ff976a;
  color: white;
}

.play-btn {
  background: #1989fa;
  color: white;
}

/* 调试信息 */
.debug-info {
  width: 100%;
  max-width: 600rpx;
  margin-top: 40rpx;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8rpx;
  padding: 20rpx;
  border: 1rpx solid rgba(0, 0, 0, 0.1);
}

.debug-info text {
  display: block;
  color: #666;
  font-size: 24rpx;
  line-height: 1.6;
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
}
</style>

