<script>
export default {
  data(){
    return{
      name: '',
      version: '',
      isNew: false,
    };
  },
  onLoad(options){
    console.log('接受的参数：' ,options);
    this.name = options.name || '无';
    this.version = options.version || '无';
    this.isNew = options.isNew === 'true';
  },
  methods:{
    //返回上一页
    navigateBack(){
      uni.navigateBack({
        delta:1  //返回的页面数 1 = 上一页 ， 2 = 上两页
      });
    },
    //返回上两页
    navigateBackTwo(){
      uni.navigateBack({
        delta:2
      })
    }
  }
}
</script>

<template>
  <view class="target-container">
    <view class="title">目标页面</view>
<!--    显示接受的参数-->
    <view class="params-box">
      <view class="params-title">接受的参数：</view>
      <view class="params-item">名称：{{name}}</view>
      <view class="params-item">版本：{{version}}</view>
      <view class="params-item">是否新版本：{{isNew ? '是' : '否'}}</view>
    </view>
    <button @click="navigateBack" class="btn">7.返回上一页 </button>
    <button @click="navigateBackTwo" class="btn">8.返回上两页</button>
  </view>

</template>

<style scoped>
.target-container{
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  gap: 30rpx;
}
.title{
  font-size: 32rpx;
  font-weight: bold;
  text-align: center;
}
.params-box{
  padding: 20rpx;
  background-color: #f5f5f5;
  border-radius: 16rpx;
}
.params-title{
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 16rpx;
}
.params-item{
  font-size: 24rpx;
  margin-bottom: 8rpx;
  color: #333;
}
.btn{
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 28rpx;
  background-color: #007aff;
  color: white;
  border-radius: 40rpx;
}

</style>