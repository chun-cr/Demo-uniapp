<template>
  <view class="test-page">
    <view class="test-header">
      <text class="test-title">测试页面</text>
    </view>
    
    <view class="test-content">
      <view class="test-section">
        <text class="section-title">录音功能测试</text>
        <view class="test-info">
          <text>这是一个用于测试录音功能的页面</text>
        </view>
        
        <!-- 录音状态显示 -->
        <view class="test-status">
          <text>录音状态: {{ isRecording ? '录音中' : '未录音' }}</text>
          <text v-if="recordFile">录音文件: {{ recordFile }}</text>
        </view>
        
        <!-- 测试按钮 -->
        <view class="test-buttons">
              <button @tap="startRecord" class="test-btn">开始录音</button>
              <button @tap="endRecord" class="test-btn">停止录音</button>
              <button @tap="playVoice" class="test-btn">播放录音</button>
        </view>
      </view>
      
      <view class="test-section">
        <text class="section-title">测试信息</text>
        <!-- 在录音状态显示部分添加音量显示 -->
        <view class="test-status">
          <text>录音状态: {{ isRecording ? '录音中' : '未录音' }}</text>
          <text v-if="recordFile">录音文件: {{ recordFile }}</text>
          <text>当前音量: {{ currentVolume }}%</text>
          <text>最大音量: {{ maxVolume }}%</text>
        </view>
        <!-- 在音量数据显示下方添加音量条 -->
        <view class="volume-bar-container">
          <view class="volume-bar-bg">
            <view class="volume-bar-fill" :style="{ width: currentVolume + '%' }"></view>
          </view>
        </view>

        <view class="test-info">
          <text>页面路径: /pages/record/test-page</text>
          <text>创建时间: {{ currentTime }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

export default {
  data() {
    return {
      text: 'uni-app',
      voicePath: '',
      currentVolume: 0,
      maxVolume: 0,
      volumeInterval: null
    }
  },
  onLoad() {
    let self = this;
    recorderManager.onStop(function (res) {
      console.log('recorder stop' + JSON.stringify(res));
      self.voicePath = res.tempFilePath;
    });
    /*recorderManager.onFrameRecorded((res) => {
      console.log("res",res)
      const audioData = res.frameBuffer;
      if(audioData instanceof ArrayBuffer){
        let frameBuffer = new Unit8Array(audioData);
      }
    })*/
    recorderManager.onFrameRecorded((res) => {
      console.log("完整res对象:", res);
      console.log("音量值(0-1):", res.volume);

      // 转换为百分比
      const volume = Math.round(res.volume * 100);
      this.currentVolume = volume;

      if (volume > this.maxVolume) {
        this.maxVolume = volume;
      }
    })
  },
  methods: {
    startRecord() {
      console.log('开始录音');
      this.currentVolume = 0;
      this.maxVolume = 0;

      recorderManager.start({
        format: 'mp3',
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
      });
    },
    endRecord() {
      console.log('录音结束');
      recorderManager.stop();
    },
    playVoice() {
      console.log('播放录音');

      if (this.voicePath) {
        innerAudioContext.src = this.voicePath;
        innerAudioContext.play();
      }
    }
  }
}

</script>

<style scoped>
.test-page {
  padding: 40rpx;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.test-header {
  text-align: center;
  margin-bottom: 40rpx;
}

.test-title {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
}

.test-content {
  background-color: white;
  border-radius: 20rpx;
  padding: 40rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
}

.test-section {
  margin-bottom: 40rpx;
}

.section-title {
  display: block;
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  padding-bottom: 10rpx;
  border-bottom: 2rpx solid #eee;
}
.volume-bar-container {
  margin-top: 20rpx;
}

.volume-bar-bg {
  height: 20rpx;
  background-color: #ddd;
  border-radius: 10rpx;
  overflow: hidden;
}

.volume-bar-fill {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.1s ease;
}


.test-info {
  background-color: #f9f9f9;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}

.test-info text {
  display: block;
  font-size: 28rpx;
  color: #666;
  line-height: 1.6;
}

.test-status {
  background-color: #e8f5e8;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
  border-left: 8rpx solid #4CAF50;
}

.test-status text {
  display: block;
  font-size: 28rpx;
  color: #388e3c;
  line-height: 1.6;
}

.test-buttons {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.test-btn {
  height: 88rpx;
  line-height: 88rpx;
  font-size: 32rpx;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 44rpx;
}

.test-btn:active {
  opacity: 0.8;
}
</style>