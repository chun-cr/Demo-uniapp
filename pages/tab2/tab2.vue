<!-- pages/tab2/tab2.vue -->
<template>
  <view class="tab-container">
    <view class="tab-title">Tab 页面 2</view>
    <button @click="goToTab1" class="btn">跳转到 Tab1（switchTab）</button>
  </view>
</template>

<script>
export default {
  methods: {
    goToTab1() {
      // Tab 页面之间跳转，用 switchTab
      uni.switchTab({
        url: '/pages/tab1/tab1'
      });
    }
  }
};
</script>

<style scoped>
.tab-container {
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30rpx;
  margin-top: 100rpx;
}

.tab-title {
  font-size: 36rpx;
  font-weight: bold;
}

.btn {
  width: 80%;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  background-color: #ff3b30;
  color: white;
  border-radius: 40rpx;
}
</style>