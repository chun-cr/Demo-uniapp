<template>
  <view class="record-page">
    <!-- 状态显示 -->
    <view class="status-card">
      <text class="status-text">{{ statusText }}</text>

      <view class="time-display" v-if="isRecording || hasRecord">
        {{ formattedTime }}
      </view>
    </view>

    <!-- 控制按钮 -->
    <view class="control-buttons">
      <!-- 开始录音 -->
      <button
          class="record-btn start-btn"
          v-if="!isRecording && !hasRecord"
          @tap="handleStartRecord"
          :loading="isStarting"
      >
        开始录音
      </button>

      <!-- 停止录音 -->
      <button
          class="record-btn stop-btn"
          v-if="isRecording"
          @tap="handleStopRecord"
      >
        停止录音
      </button>

      <!-- 重新录音 -->
      <button
          class="record-btn redo-btn"
          v-if="!isRecording && hasRecord"
          @tap="handleRedoRecord"
      >
        重新录音
      </button>
    </view>

    <!-- 功能区域 -->
    <view class="function-section" v-if="hasRecord && !isRecording">
      <!-- 播放控制 -->
      <view class="play-control">
        <button class="play-btn" @tap="handlePlay">
          {{ isPlaying ? '暂停播放' : '播放录音' }}
        </button>
      </view>
    </view>

    <!-- 上传 -->
    <view class="upload-section" v-if="hasRecord && !isRecording">
      <button
          class="upload-btn"
          @tap="handleUpload"
          :loading="isUploading"
          :disabled="isUploading"
      >
        {{ isUploading ? '上传中...' : '上传录音' }}
      </button>

      <text class="upload-tip" v-if="uploadResult">
        {{ uploadResult }}
      </text>
    </view>

    <!-- 调试信息（开发时可见） -->
    <view class="debug-info" v-if="isDev">
      <text>文件路径: {{ filePath || '无' }}</text>
      <text>录音时长: {{ recordTime }}秒</text>
      <text>录音状态: {{ isRecording ? '录音中' : '未录音' }}</text>
    </view>
  </view>
</template>

<script>
// 导入录音管理器
import recordManager from '@/utils/record-manager.js'

export default {
  data() {
    return {
      isRecording: false,      // 是否正在录音
      hasRecord: false,        // 是否有录音文件
      isPlaying: false,        // 是否正在播放
      isUploading: false,      // 是否正在上传
      isStarting: false,       // 开始录音中
      recordTime: 0,           // 录音时长
      filePath: '',            // 文件路径
      uploadResult: '',        // 上传结果
      isDev: true,             // 开发模式
      innerAudioContext: null  // 音频播放上下文
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
    console.log('页面加载')
    // 初始化录音管理器
    recordManager.init()
    recordManager.setTimeUpdateCallback((seconds, formatted) => {
      // 只在录音中才更新页面显示，确保状态同步
      if (this.isRecording || recordManager.isRecording) {
        this.recordTime = seconds
        // 强制更新视图
        this.$forceUpdate()
      }
    })

    // 初始化音频播放上下文
    this.initInnerAudioContext()

  },

  onUnload() {
    // 清理资源
    recordManager.destroy()
    // 销毁音频上下文
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy()
    }
  },

  methods: {
    // 初始化音频播放上下文
    initInnerAudioContext() {
      console.log('初始化音频播放上下文')
      this.innerAudioContext = uni.createInnerAudioContext()
      
      // 配置音频
      this.innerAudioContext.autoplay = false
      this.innerAudioContext.loop = false
      this.innerAudioContext.volume = 1.0
      
      // 监听各种事件
      this.innerAudioContext.onCanplay(() => {
        console.log('音频可以播放了')
      })
      
      this.innerAudioContext.onPlay(() => {
        console.log('音频开始播放')
      })
      
      this.innerAudioContext.onPause(() => {
        console.log('音频暂停')
      })
      
      this.innerAudioContext.onStop(() => {
        console.log('音频停止')
      })
      
      // 监听播放结束
      this.innerAudioContext.onEnded(() => {
        console.log('播放完成')
        this.isPlaying = false
      })
      
      // 监听播放错误
      this.innerAudioContext.onError((err) => {
        console.error('播放失败:', err)
        uni.showToast({
          title: '播放失败: ' + (err.errMsg || err.message),
          icon: 'none'
        })
        this.isPlaying = false
      })
      
      this.innerAudioContext.onWaiting(() => {
        console.log('音频加载中...')
      })
      
      this.innerAudioContext.onSeeking(() => {
        console.log('音频跳转中...')
      })
      
      this.innerAudioContext.onSeeked(() => {
        console.log('音频跳转完成')
      })
    },
    // 开始录音
    async handleStartRecord() {
      console.log('点击开始录音')
      this.isStarting = true

      try {
        await recordManager.startRecord()
        this.isRecording = true
        this.hasRecord = false
        this.uploadResult = ''
        // 立即同步计时显示，确保从0开始
        this.recordTime = recordManager.recordTime

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
      await recordManager.stopRecord()
      this.isRecording = false
      this.hasRecord = true
      this.filePath = recordManager.getRecordFile()

      uni.showToast({
        title: '录音完成',
        icon: 'success'
      })

      console.log('录音文件路径:', this.filePath)
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
            this.uploadResult = ''
            this.filePath = ''
            recordManager.tempFilePath = ''
            recordManager.recordTime = 0
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
        console.log('播放失败：filePath为空')
        return
      }

      console.log('当前filePath:', this.filePath)
      console.log('当前isPlaying:', this.isPlaying)
      console.log('innerAudioContext:', this.innerAudioContext)

      if (this.isPlaying) {
        // 暂停播放
        console.log('暂停播放')
        this.innerAudioContext.pause()
        this.isPlaying = false
      } else {
        // 开始播放
        console.log('开始播放，设置src:', this.filePath)
        this.innerAudioContext.src = this.filePath
        
        // 直接调用play()，微信小程序中不需要load()方法
        console.log('调用play()')
        this.innerAudioContext.play()
        
        this.isPlaying = true
        console.log('设置isPlaying为true')
      }
    },

    // 上传录音（模拟上传）
    async handleUpload() {
      if (!this.filePath) {
        uni.showToast({
          title: '请先录音',
          icon: 'none'
        })
        return
      }

      this.isUploading = true
      this.uploadResult = ''

      try{
        uni.showToast({
          title: '开始上传录音',
          mask: true
        })
        const SERVER_URL = 'http://192.168.8.100:3000'
        //使用uni.uploadFile API
        const uploadTask = uni.uploadFile({
          url: `${SERVER_URL}/api/upload`,
          filePath: this.filePath,
          name: 'audio',
          formData: {
            userId: 'test_user_001',
            timestamp: Date.now(),
            duration: this.recordTime
          },
          success: (uploadRes) => {
            const result = JSON.parse(uploadRes.data)
            if (result.success){
              uni.showToast({
                title: '上传成功',
                icon: 'success'
              })
              this.uploadResult =
                  `✅ 上传成功！
                  文件名: ${result.data.filename}
                  大小: ${this.formatFileSize(result.data.size)}
                  时间: ${new Date().toLocaleTimeString()}`
              console.log('上传成功',result.data)
            } else {
              throw  new Error(result.message || '上传失败')
            }
          },
          fail: (err) => {
            console.error('上传失败',err)
            throw new Error(`上传请求失败: ${err.errMsg || err.message}`)
          },
          complete: () => {
            uni.hideLoading()
            this.isUploading = false
          }
        })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度:', res.progress + '%')
          // 可以在这里显示进度条
        })
      } catch ( error){
        console.error('上传出错:', error)
        uni.showToast({
          title: `上传失败: ${error.message}`,
          icon: 'none',
          duration: 3000
        })
        this.uploadResult = `上传失败: ${error.message}`
        this.isUploading = false
      }
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }
  }
}
</script>

<style scoped>
.record-page {
  padding: 30rpx;
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 状态卡片 */
.status-card {
  background: white;
  border-radius: 16rpx;
  padding: 40rpx;
  margin: 40rpx 0;
  width: 100%;
  max-width: 600rpx;
  text-align: center;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
}

.status-text {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  display: block;
  margin-bottom: 20rpx;
}

.time-display {
  font-size: 64rpx;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1989fa;
  font-weight: 700;
  margin: 20rpx 0;
}

/* 控制按钮 */
.control-buttons {
  width: 100%;
  max-width: 600rpx;
  margin: 30rpx 0;
}

.record-btn {
  width: 100%;
  height: 96rpx;
  border-radius: 48rpx;
  font-size: 32rpx;
  font-weight: 600;
  margin: 20rpx 0;
  border: none;
  transition: all 0.2s ease;
}

.record-btn:active {
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

/* 功能区域 */
.function-section {
  width: 100%;
  max-width: 600rpx;
  margin: 20rpx 0;
  display: flex;
  gap: 20rpx;
}

/* 播放控制 */
.play-control {
  flex: 1;
}

.play-btn {
  width: 100%;
  height: 88rpx;
  background: #1989fa;
  color: white;
  border-radius: 44rpx;
  font-size: 30rpx;
  font-weight: 500;
  border: none;
  transition: all 0.2s ease;
}

.play-btn:active {
  opacity: 0.9;
}

/* 上传区域 */
.upload-section {
  width: 100%;
  max-width: 600rpx;
  margin-top: 30rpx;
}

.upload-btn {
  width: 100%;
  height: 88rpx;
  background: #646566;
  color: white;
  border-radius: 44rpx;
  font-size: 30rpx;
  font-weight: 500;
  border: none;
  transition: all 0.2s ease;
}

.upload-btn:active {
  opacity: 0.9;
}

.upload-btn[disabled] {
  opacity: 0.6;
}

.upload-tip {
  display: block;
  margin-top: 20rpx;
  background: white;
  padding: 20rpx;
  border-radius: 8rpx;
  font-size: 26rpx;
  color: #666;
  line-height: 1.5;
  word-break: break-all;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
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
}
</style>