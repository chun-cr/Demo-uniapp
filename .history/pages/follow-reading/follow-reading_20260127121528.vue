<template>
  <view class="follow-reading-page">
    <!-- 顶部标题栏 -->
    <view class="top-bar">
      <text class="title">闻诊</text>
    </view>

    <!-- 跟读列表 -->
    <view class="reading-list">
      <!-- 跟读项1 -->
      <view class="reading-item">
        <view class="reading-header">
          <view class="plus-icon">+</view>
          <text class="reading-text">跟读:{{ getReadingText(0) }}</text>
          <view class="play-icon-wrapper" @tap="playAudio(0)">
            <text class="play-icon">🔊</text>
          </view>
        </view>
        
        <!-- Canvas波形图 -->
        <view class="canvas-container">
          <canvas 
            canvas-id="waveformCanvas0" 
            id="waveformCanvas0"
            class="waveform-canvas"
            :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
          ></canvas>
        </view>
        
        <!-- 按钮区域 -->
        <view class="button-row">
          <!-- 录音按钮 -->
          <view 
            class="record-icon" 
            :class="{ 'recording': isRecording[0] }" 
            @tap="toggleRecord(0)"
          >
            <text class="mic-icon">🎤</text>
          </view>
          
          <!-- 重新录制按钮 -->
          <view 
            class="redo-btn" 
            v-if="recordFiles[0] && !isRecording[0]"
            @tap="redoRecording(0)"
          >
            <text class="redo-icon">🔄</text>
            <text class="redo-text">重录</text>
          </view>
        </view>
        
        <!-- 时间和音量显示 -->
        <view class="recording-info" v-if="isRecording[0]">
          <text class="recording-time">{{ recordTimes[0] }}秒</text>
          <text class="recording-volume">音量: {{ currentVolumes[0] }}%</text>
        </view>
        
        <!-- 录音完成状态 -->
        <view class="record-status" v-if="recordFiles[0] && !isRecording[0]">
          <text class="status-text">✅ 录音完成 ({{ recordTimes[0] }}秒)</text>
        </view>
      </view>

      <!-- 跟读项2 -->
      <view class="reading-item">
        <view class="reading-header">
          <view class="plus-icon">+</view>
          <text class="reading-text">跟读:{{ getReadingText(1) }}</text>
          <view class="play-icon-wrapper" @tap="playAudio(1)">
            <text class="play-icon">🔊</text>
          </view>
        </view>
        
        <!-- Canvas波形图 -->
        <view class="canvas-container">
          <canvas 
            canvas-id="waveformCanvas1" 
            id="waveformCanvas1"
            class="waveform-canvas"
            :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
          ></canvas>
        </view>
        
        <!-- 按钮区域 -->
        <view class="button-row">
          <!-- 录音按钮 -->
          <view 
            class="record-icon" 
            :class="{ 'recording': isRecording[1] }" 
            @tap="toggleRecord(1)"
          >
            <text class="mic-icon">🎤</text>
          </view>
          
          <!-- 重新录制按钮 -->
          <view 
            class="redo-btn" 
            v-if="recordFiles[1] && !isRecording[1]"
            @tap="redoRecording(1)"
          >
            <text class="redo-icon">🔄</text>
            <text class="redo-text">重录</text>
          </view>
        </view>
        
        <!-- 时间和音量显示 -->
        <view class="recording-info" v-if="isRecording[1]">
          <text class="recording-time">{{ recordTimes[1] }}秒</text>
          <text class="recording-volume">音量: {{ currentVolumes[1] }}%</text>
        </view>
        
        <!-- 录音完成状态 -->
        <view class="record-status" v-if="recordFiles[1] && !isRecording[1]">
          <text class="status-text">✅ 录音完成 ({{ recordTimes[1] }}秒)</text>
        </view>
      </view>
    </view>

    <!-- 咳嗽声采集 -->
    <view class="cough-section">
      <view class="cough-header">
        <view class="green-bar"></view>
        <text class="cough-title">咳嗽声采集 ({{ recordFiles[2] ? '完成咳嗽录制' : '未完成' }})</text>
        <view class="cough-play-icon" @tap="playAudio(2)">
          <text class="play-icon">🔊</text>
        </view>
      </view>
      
      <view class="cough-content">
        <text class="cough-instruction">请咳嗽至少三声</text>
        <!-- Canvas波形图 -->
        <view class="canvas-container">
          <canvas 
            canvas-id="waveformCanvas2" 
            id="waveformCanvas2"
            class="waveform-canvas"
            :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
          ></canvas>
        </view>
        
        <!-- 按钮区域 -->
        <view class="button-row">
          <!-- 录音按钮 -->
          <view 
            class="record-icon" 
            :class="{ 'recording': isRecording[2] }" 
            @tap="toggleRecord(2)"
          >
            <text class="mic-icon">🎤</text>
          </view>
          
          <!-- 重新录制按钮 -->
          <view 
            class="redo-btn" 
            v-if="recordFiles[2] && !isRecording[2]"
            @tap="redoRecording(2)"
          >
            <text class="redo-icon">🔄</text>
            <text class="redo-text">重录</text>
          </view>
        </view>
        
        <!-- 录音时间和音量显示 -->
        <view class="recording-info" v-if="isRecording[2]">
          <text class="recording-time">{{ recordTimes[2] }}秒</text>
          <text class="recording-volume">音量: {{ currentVolumes[2] }}%</text>
        </view>
        
        <!-- 录音完成状态 -->
        <view class="record-status" v-if="recordFiles[2] && !isRecording[2]">
          <text class="status-text">✅ 录音完成 ({{ recordTimes[2] }}秒)</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
// import recordManager from '@/utils/record-manager.js'
import { RecordManager } from "../../utils/record-manager";
import CanvasWaveformManager from "../canvas-record/canvas-record.js";

export default {
  data() {
    return {
      isRecording: [false, false, false], // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordFiles: ['', '', ''],       // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordTimes: [0, 0, 0],          // 0: 跟读1, 1: 跟读2, 2: 咳嗽
      recordManagers: [],              // 存储每个录音项的独立管理器
      
      // Canvas相关
      canvasWidth: 0,                  // Canvas宽度
      canvasHeight: 100,               // Canvas高度
      canvasContexts: [],              // Canvas上下文数组
      waveformManagers: [],            // 波形管理器数组
      currentVolumes: [0, 0, 0]        // 当前音量数组
    }
  },

  onLoad() {
    console.log('跟读页面加载')

    // 为每个录音项创建独立的录音管理器
    this.recordManagers = [
      new RecordManager('item_0'),  // 第一个跟读项
      new RecordManager('item_1'),   // 第二个跟读项
      new RecordManager('item_cough') // 咳嗽录音项
    ]

    // 初始化所有管理器
    this.recordManagers.forEach(manager => {
      manager.init()
    })
    
    // 初始化Canvas
    this.initAllCanvas()
  },

  onUnload() {
    // 清理资源
    this.recordManagers.forEach(manager => {
      manager.destroy()
    })
  },

  methods: {
    // 初始化所有Canvas
    initAllCanvas() {
      this.$nextTick(() => {
        // 获取系统信息，计算Canvas宽度
        const systemInfo = uni.getSystemInfoSync()
        this.canvasWidth = systemInfo.windowWidth - 90 // 减去左右边距
        
        // 为每个录音项初始化Canvas
        for (let i = 0; i < 3; i++) {
          const canvasId = `waveformCanvas${i}`
          const ctx = uni.createCanvasContext(canvasId, this)
          this.canvasContexts[i] = ctx
          
          // 创建波形管理器
          const waveformManager = new CanvasWaveformManager(
            ctx,
            this.canvasWidth,
            this.canvasHeight
          )
          this.waveformManagers[i] = waveformManager
          
          // 绘制初始背景
          waveformManager.drawBackground()
        }
        
        console.log('所有Canvas初始化完成')
      })
    },
    // 播放音频
    playAudio(index) {
      console.log('播放音频', index)

      // 获取对应录音文件的路径
      const filePath = this.recordFiles[index]
      if (!filePath) {
        uni.showToast({
          title: '请先录音',
          icon: 'none'
        })
        return
      }

      // 创建音频上下文
      const audioContext = uni.createInnerAudioContext()
      audioContext.src = filePath
      audioContext.autoplay = true

      audioContext.onPlay(() => {
        console.log('开始播放音频', index)
        uni.showToast({
          title: '播放中',
          icon: 'none',
          duration: 1000
        })
      })

      audioContext.onEnded(() => {
        console.log('播放结束', index)
        audioContext.destroy()
      })

      audioContext.onError((err) => {
        console.error('播放失败:', err)
        uni.showToast({
          title: '播放失败',
          icon: 'none'
        })
        audioContext.destroy()
      })
    },

    // 切换录音状态
    toggleRecord(index) {
      console.log('切换录音状态', index, this.isRecording[index])

      // 检查是否有其他项正在录音
      for (let i = 0; i < this.isRecording.length; i++) {
        if (i !== index && this.isRecording[i]) {
          uni.showToast({
            title: '请先完成上一个录音',
            icon: 'none',
            duration: 2000
          })
          return
        }
      }

      if (this.isRecording[index]) {
        // 停止录音
        this.stopRecord(index)
      } else {
        // 开始录音
        this.startRecord(index)
      }
    },

    // 开始录音
    async startRecord(index) {
      console.log('开始录音', index)

      // 显示加载状态
      uni.showLoading({
        title: '准备录音...',
        mask: true
      })

      try {
        // 重置录音状态
        this.recordTimes[index] = 0
        this.recordFiles[index] = ''
        this.currentVolumes[index] = 0
        
        // 重置波形图
        if (this.waveformManagers[index]) {
          this.waveformManagers[index].reset()
        }
        
        // 获取对应录音管理器
        const manager = this.recordManagers[index]

        // 启动录音
        await manager.startRecord()

        // 更新页面状态
        this.isRecording[index] = true

        // 设置时间更新回调
        manager.setTimeUpdateCallback((seconds, formatted) => {
          console.log(`录音${index}时间更新:`, seconds)
          this.recordTimes[index] = seconds
        })
        
        // 设置音量更新回调
        manager.setVolumeUpdateCallback((volume) => {
          this.currentVolumes[index] = volume
          // 更新波形图
          if (this.waveformManagers[index]) {
            this.waveformManagers[index].updateVolume(volume)
          }
        })

        uni.hideLoading()
        uni.showToast({
          title: '开始录音',
          icon: 'none',
          duration: 1000
        })

        console.log(`录音${index}启动成功`)

      } catch (error) {
        console.error('开始录音失败:', error)
        uni.hideLoading()

        // 显示具体错误信息
        let errorMsg = '开始录音失败'
        if (typeof error === 'string' && error.includes('权限被拒绝')) {
          errorMsg = '需要麦克风权限，请在设置中开启'
        } else if (typeof error === 'string' && error.includes('检查权限失败')) {
          errorMsg = '权限检查失败，请重试'
        } else {
          errorMsg = error.message || '未知错误'
        }

        uni.showToast({
          title: errorMsg,
          icon: 'none',
          duration: 3000
        })

        // 恢复状态
        this.isRecording[index] = false
      }
    },

    // 停止录音
    async stopRecord(index) {
      console.log('停止录音', index)

      if (!this.isRecording[index]) {
        console.warn(`录音${index}并未在录制中`)
        return
      }

      // 立即更新UI状态
      this.isRecording[index] = false
      this.currentVolumes[index] = 0

      // 显示停止中状态
      uni.showLoading({
        title: '停止录音中...',
        mask: true
      })

      try {
        // 获取对应录音管理器
        const manager = this.recordManagers[index]

        // 停止录音
        await manager.stopRecord()

        // 获取录音文件路径
        this.recordFiles[index] = manager.getRecordFile()

        // 清除回调
        manager.setTimeUpdateCallback(null)
        manager.setVolumeUpdateCallback(null)

        uni.hideLoading()
        uni.showToast({
          title: '录音完成',
          icon: 'success',
          duration: 1500
        })

        console.log(`录音${index}完成，文件路径:`, this.recordFiles[index])

        // 检查录音文件是否有效
        if (!this.recordFiles[index]) {
          console.warn(`录音${index}文件路径为空`)
          uni.showToast({
            title: '录音文件保存失败，请重试',
            icon: 'none',
            duration: 2000
          })
        }

      } catch (error) {
        console.error('停止录音失败:', error)
        uni.hideLoading()

        uni.showToast({
          title: '停止录音失败',
          icon: 'none',
          duration: 2000
        })

        // 强制恢复状态
        this.isRecording[index] = false

        // 尝试清理
        const manager = this.recordManagers[index]
        if (manager) {
          manager.stopTimer()
          manager.setTimeUpdateCallback(null)
          manager.setVolumeUpdateCallback(null)
        }
      }
    },



    // 刷新
    handleRefresh() {
      console.log('刷新')
      uni.showToast({
        title: '刷新',
        icon: 'none',
        duration: 1000
      })
    },

    // 静音
    handleMute() {
      console.log('静音')
      uni.showToast({
        title: '静音',
        icon: 'none',
        duration: 1000
      })
    },

    // 跳过
    handleSkip() {
      console.log('跳过')

      uni.showModal({
        title: '提示',
        content: '确定要跳过所有录音吗？',
        success: (res) => {
          if (res.confirm) {
            console.log('用户确认跳过')

            // 停止所有正在进行的录音
            this.stopAllRecording()

            // 跳转到下一页或其他操作
            uni.showToast({
              title: '已跳过',
              icon: 'success'
            })

            // 模拟导航
            setTimeout(() => {
              uni.navigateTo({
                url: '/pages/next/page'
              })
            }, 1000)
          }
        }
      })
    },

    // 确定
    async handleConfirm() {
      console.log('确定')

      // 检查是否有录音未完成
      const incompleteRecordings = this.isRecording.filter(status => status)
      if (incompleteRecordings.length > 0) {
        uni.showToast({
          title: '请先完成录音',
          icon: 'none'
        })
        return
      }

      // 检查是否有录音文件
      const hasRecordings = this.recordFiles.some(file => file)
      if (!hasRecordings) {
        uni.showToast({
          title: '请先完成至少一个录音',
          icon: 'none'
        })
        return
      }

      // 显示提交中状态
      uni.showLoading({
        title: '提交录音中...',
        mask: true
      })

      try {
        // 准备上传数据
        const uploadData = {
          recordings: this.recordFiles.map((file, idx) => ({
            index: idx,
            filePath: file,
            duration: this.recordTimes[idx],
            text: this.getReadingText(idx) // 获取对应的跟读文本
          })),
          timestamp: Date.now()
        }

        console.log('提交的录音数据:', uploadData)

        // 模拟上传过程
        await this.uploadRecordings(uploadData)

        uni.hideLoading()
        uni.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })

        // 跳转到结果页面
        setTimeout(() => {
          uni.navigateTo({
            url: '/pages/result/result'
          })
        }, 1500)

      } catch (error) {
        console.error('提交失败:', error)
        uni.hideLoading()

        uni.showToast({
          title: '提交失败，请重试',
          icon: 'none'
        })
      }
    },

    // 上传录音文件（模拟）
    uploadRecordings(data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 模拟网络请求
          const success = Math.random() > 0.2 // 80%成功率

          if (success) {
            console.log('录音上传成功:', data)

            // 这里应该调用API
            // uni.uploadFile({
            //     url: 'API_URL',
            //     filePath: data.filePath,
            //     name: 'audio',
            //     formData: data,
            //     success: resolve,
            //     fail: reject
            // })

            resolve()
          } else {
            reject(new Error('网络错误，上传失败'))
          }
        }, 1500)
      })
    },

    // 停止所有录音
    stopAllRecording() {
      console.log('停止所有录音')

      // 遍历所有录音管理器
      this.recordManagers.forEach((manager, index) => {
        if (this.isRecording[index]) {
          // 停止录音
          manager.stopRecord()
          manager.stopTimer()
          manager.setTimeUpdateCallback(null)
          manager.setVolumeUpdateCallback(null)

          // 更新状态
          this.isRecording[index] = false
          this.currentVolumes[index] = 0
        }
      })
    },

    // 获取跟读文本
    getReadingText(index) {
      const texts = [
        '一二三四五六七八九十',
        '赵钱孙李，周吴郑王',
        '请咳嗽至少三声'
      ]
      return texts[index] || ''
    },

    // 重新录制指定项
    redoRecording(index) {
      console.log('重新录制', index)

      uni.showModal({
        title: '提示',
        content: '确定要重新录制这一项吗？',
        success: (res) => {
          if (res.confirm) {
            // 重置状态
            this.isRecording[index] = false
            this.recordFiles[index] = ''
            this.recordTimes[index] = 0

            // 如果需要立即开始新的录音
            // this.startRecord(index)

            uni.showToast({
              title: '已重置，可以重新录音',
              icon: 'success'
            })
          }
        }
      })
    },

    // 播放所有录音
    playAllRecordings() {
      console.log('播放所有录音')

      const hasRecordings = this.recordFiles.some(file => file)
      if (!hasRecordings) {
        uni.showToast({
          title: '请先完成录音',
          icon: 'none'
        })
        return
      }

      // 按顺序播放所有录音
      this.playRecordingSequence(0)
    },

    // 顺序播放录音
    playRecordingSequence(index) {
      if (index >= this.recordFiles.length) {
        console.log('所有录音播放完成')
        return
      }

      const filePath = this.recordFiles[index]
      if (!filePath) {
        // 如果该项没有录音，跳过
        this.playRecordingSequence(index + 1)
        return
      }

      console.log(`播放第${index + 1}个录音`)

      const audioContext = uni.createInnerAudioContext()
      audioContext.src = filePath
      audioContext.autoplay = true

      audioContext.onEnded(() => {
        console.log(`第${index + 1}个录音播放结束`)
        audioContext.destroy()

        // 播放下一个
        this.playRecordingSequence(index + 1)
      })

      audioContext.onError((err) => {
        console.error(`播放第${index + 1}个录音失败:`, err)
        audioContext.destroy()

        // 继续播放下一个
        this.playRecordingSequence(index + 1)
      })
    }
  }
}
</script>

<style scoped>
/* 页面容器 */
.follow-reading-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa;
  position: relative;
}

/* 顶部标题栏 */
.top-bar {
  height: 120rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 36rpx;
  font-weight: 600;
  color: #333333;
}

/* 跟读列表 */
.reading-list {
  flex: 1;
  padding: 40rpx 30rpx;
  overflow-y: auto;
}

/* 跟读项 */
.reading-item {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
  position: relative; /* 添加相对定位，使绝对定位的子元素相对于此元素定位 */
}

/* 跟读头部 */
.reading-header {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
  position: relative;
}

.plus-icon {
  width: 40rpx;
  height: 40rpx;
  background: #07c160;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  font-weight: bold;
  margin-right: 12rpx;
  flex-shrink: 0;
}

.reading-label {
  font-size: 28rpx;
  color: #666666;
  margin-right: 10rpx;
}

.reading-text {
  font-size: 28rpx;
  color: #333333;
  flex: 1;
  line-height: 1.5;
}

/* 播放按钮 */
.play-icon-wrapper {
  width: 50rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.play-icon {
  font-size: 36rpx;
}

/* Canvas波形图容器 */
.canvas-container {
  width: 100%;
  margin: 20rpx 0;
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 10rpx;
  box-shadow: inset 0 1rpx 4rpx rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.waveform-canvas {
  background: #f5f5f5;
  border-radius: 8rpx;
}

/* 按钮区域 */
.button-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40rpx;
  margin-top: 20rpx;
}

/* 录音图标 */
.record-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.record-icon.recording {
  background: #ff4444;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.mic-icon {
  font-size: 40rpx;
}

/* 重新录制按钮 */
.redo-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rpx 20rpx;
  background: #ff976a;
  border-radius: 12rpx;
  transition: all 0.2s ease;
}

.redo-btn:active {
  transform: scale(0.95);
  opacity: 0.9;
}

.redo-icon {
  font-size: 32rpx;
}

.redo-text {
  font-size: 22rpx;
  color: #fff;
  margin-top: 4rpx;
}

/* 录音完成状态 */
.record-status {
  text-align: center;
  margin-top: 10rpx;
}

.status-text {
  font-size: 24rpx;
  color: #07c160;
}

/* 录音信息 */
.recording-info {
  text-align: center;
  margin-top: 10rpx;
  display: flex;
  justify-content: center;
  gap: 20rpx;
}

.recording-time {
  font-size: 24rpx;
  color: #ee0a24;
  font-weight: bold;
}

.recording-volume {
  font-size: 24rpx;
  color: #07c160;
  font-weight: bold;
}

/* 咳嗽声采集区域 */
.cough-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin: 0 30rpx 40rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);
  position: relative;
}

.cough-header {
  display: flex;
  align-items: center;
  margin-bottom: 15rpx;
  position: relative;
}

.green-bar {
  width: 6rpx;
  height: 40rpx;
  background: #07c160;
  border-radius: 3rpx;
  margin-right: 12rpx;
  flex-shrink: 0;
}

.cough-title {
  font-size: 28rpx;
  font-weight: 500;
  color: #333333;
}


.cough-instruction {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 20rpx;
  display: block;
}
.cough-play-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>