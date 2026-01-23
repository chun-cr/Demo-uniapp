<template>
	<view class="container">

    <view class = "title">Demo</view>

    <button @click="navigateToTarget" class="btn"> 1.普通跳转</button>

    <button @click="navigateWithParams" class="btn"> 2.带参数跳转</button>

    <button @click="redirectToTarget" class="btn"> 3.关闭当前页面跳转</button>

    <button @click="switchToTab1" class="btn"> 4.跳转Tab1页面</button>
    <button @click="switchToTab2" class="btn"> 5.跳转Tab2页面</button>

    <button @click="reLaunchToTab1" class="btn"> 6.重启APP跳转Tab1</button>

    <button @click="goToList" class="btn">7. 前往列表渲染 Demo</button>
    <button @click="goToCamera" class="btn">8. 面部检测 Demo</button>
    <button @click="goToRecord" class="btn">9. 录音</button>
    <button @click="goToRecordTest" class="btn">10. 录音测试</button>
    <button @click="goToRecordCanvas" class="btn">11. canvas展示录音</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
      navigateToTarget(){
        uni.navigateTo({
          url:'/pages/target/target'
        });
      },
      navigateWithParams(){
        const params = {
          name: 'uniapp',
          version: '3.0',
          isNew: true,
        };
        const url = `/pages/target/target?name=${params.name}&version=${params.version}&isNew=${params.isNew}`;
        uni.navigateTo({url});
      },
      redirectToTarget(){
        uni.redirectTo({
          url:'/pages/target/target'
        });
      },
      switchToTab1(){
        uni.switchTab({
          url:'/pages/tab1/tab1'
        });
      },
      switchToTab2(){
        uni.switchTab({
          url:'/pages/tab2/tab2'
        });
      },
      reLaunchToTab1(){
        uni.reLaunch({
          url:'/pages/tab1/tab1'
        })
      },
      goToList() {
        uni.navigateTo({
          url: '/pages/list/list'
        });
      },
      goToCamera() {
        uni.navigateTo({
          url: '/pages/face-detection/index'
        });
      },
      goToRecord() {
        uni.navigateTo({
          url: '/pages/record/record-page'
        });
      },
      goToRecordTest() {
        uni.navigateTo({
          url: '/pages/record/test-page'
        });
      },
      goToRecordRead() {
        uni.navigateTo({
          url: '/pages/follow-reading/follow-reading'
        });
      },
      goToRecordCanvas() {
        uni.navigateTo({
          url: '/pages/follow-reading/follow-reading'
        });
      },
		}
	}
</script>

<style scoped>
	.container {
		padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
		font-size: 14px;
		line-height: 24px;
	}
  .title {
    font-size: 30rpx;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30rpx;
  }
  /*.btn {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 30rpx;
    background-color:  #3cc51f;
    color: white;
    border-radius: 40rpx;
  }*/
</style>
