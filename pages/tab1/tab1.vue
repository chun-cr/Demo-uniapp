<template>
  <view class="tab-container">
    <view class="tab-title">tab 页面1 </view>
    <button @click="goToIndex" class="btn"> 返回首页 </button>
  </view>

</template>
<script>
export default {
  methods: {
    goToIndex() {
      uni.navigateTo({
        url: '/pages/index/index'
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
  background-color: #ff9500;
  color: white;
  border-radius: 40rpx;
}
</style>