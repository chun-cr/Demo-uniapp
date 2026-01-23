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
      voicePath: ''
    }
  },
  onLoad() {
    let self = this;
    recorderManager.onStop(function (res) {
      console.log('recorder stop' + JSON.stringify(res));
      self.voicePath = res.tempFilePath;
    });
  },
  methods: {
    startRecord() {
      console.log('开始录音');

      recorderManager.start();
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