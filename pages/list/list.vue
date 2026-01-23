<template>
	<view class="list-container">

<!--    基础列表渲染，v-for遍历数组-->
    <view class="list-section">
      <view class="section-title">1. 基础列表（商品列表）</view>
      <view class="list-item" v-for="item in goodsList" :key="item.id" @click="goToDetail(item.id)">
        <view  class="item-img" :style="{backgroundColor: item.color}"> </view>
        <view class="item-info">
          <view class="item-name">{{ item.name }}</view>
          <view class="item-price">￥{{ item.price.toFixed(2) }}</view>
          <view class="item-desc">{{ item.desc }}</view>
        </view>
      </view>
    </view>

<!--    带索引的列表-->
    <view class="list-section">
      <view class="sectioin-title">2.带索引的列表（v-for+index）</view>
      <view class="index-item" v-for="(item,index) in fruitList" :key="index">
        <view class="index-tag">{{ index + 1 }}</view>
        <view class="index-content"> {{ item }}</view>
      </view>
    </view>

<!--    条件渲染列表，v-if、v-else相结合-->
    <view class="list-section">
      <view class="section-title">3.条件渲染列表（仅显示库存>0的商品）</view>
      <view class="list-item" v-for="item in goodsList" :key="item.id" v-if="item.stock > 0">
        <view class="item-img" :style="{backgroundColor: item.color}"> </view>
        <view class="item-info">
          <view class="item-name">{{ item.name }}</view>
          <view class="item-price">￥{{ item.price.toFixed(2) }}</view>
          <view class="item-stock">库存： {{ item.stock }}件</view>
        </view>
      </view>
<!--      无满足条件的商品显示-->
      <view class="empty-tip" v-else>暂无库存商品</view>
    </view>

<!--    遍历对象，v-for遍历键值对-->
    <view class="list-section">
      <view class ="section-title">4.遍历对象（用户信息）</view>
      <view class="object-item" v-for="(value,key,index) in userInfo" :key="key">
        <view class="object-key">{{ index + 1 }}.{{ key }}:</view>
        <view class="object-value">{{ value }}</view>
      </view>
    </view>

<!--    上拉加载提示-->
    <view class="load-more" v-if="isLoading">加载中...</view>
    <view class="load-more" v-if="isNoMore">已加载全部</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
        goodsList:[
          { id: 1, name: "Uniapp 实战教程", price: 99.0, desc: "零基础入门到精通", color: "#3cc51f", stock: 20 },
          { id: 2, name: "Vue3 核心指南", price: 129.0, desc: "Composition API 详解", color: "#007aff", stock: 0 },
          { id: 3, name: "微信小程序开发", price: 89.0, desc: "从入门到上线", color: "#ff9500", stock: 15 },
          { id: 4, name: "React 实战项目", price: 159.0, desc: "电商平台完整开发", color: "#ff3b30", stock: 8 }
        ],
        fruitList:["苹果", "香蕉", "橙子", "葡萄", "芒果"],
        userInfo: {
          name: "张三",
          age: 25,
          gender: "男",
          profession: "前端开发工程师"
        },
        // 上拉加载相关
        page: 1,
        pageSize: 4,
        isLoading: false,
        isNoMore: false
				
			}
		},
		methods: {
      //列表项点击，跳转到详情页
      goToDetail(id) {
        uni.navigateTo({
          url:`/pages/detail/detail?id=${id}`
        })
      },

      //上拉加载
      async loadMoreData(){
        if (this.isLoading || this.isNoMore) return;
        this.isLoading = true;

        //模拟接口请求延迟
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 模拟新数据
        const newData = [
          {
            id: this.goodsList.length + 1,
            name: `新增商品${this.goodsList.length + 1}`,
            price: 69.0 + Math.floor(Math.random() * 100),
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            stock: Math.floor(Math.random() * 30)
          }
        ];

        //拼接数据
        this.goodsList = [...this.goodsList, ...newData];
        this.page++

        //判断是否还有更多数据
        if(this.page > 3){
          this.isNoMore = true;
        }

        this.isLoading = false;
      },

      //下拉刷新，重置数据
      refreshData(){
        this.page = 1;
        this.isNoMore = false;
        this.goodsList = [
          { id: 1, name: "Uniapp 实战教程", price: 99.0, desc: "零基础入门到精通", color: "#3cc51f", stock: 20 },
          { id: 2, name: "Vue3 核心指南", price: 129.0, desc: "Composition API 详解", color: "#007aff", stock: 0 },
          { id: 3, name: "微信小程序开发", price: 89.0, desc: "从入门到上线", color: "#ff9500", stock: 15 },
          { id: 4, name: "React 实战项目", price: 159.0, desc: "电商平台完整开发", color: "#ff3b30", stock: 8 }
        ];

        //关闭下拉刷新动画
        uni.stopPullDownRefresh()
      }

		},

    //监听上拉加载
    onReachBottom(){
      this.loadMoreData();
    },

    //监听下拉刷新
    onPullDownRefresh(){
      this.refreshData();
    }
	};
</script>

<style scoped>
.list-container {
  padding: 20rpx;
  background-color: #f5f5f5;
}

.list-section {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 28rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
  color: #333;
  border-left: 6rpx solid #3cc51f;
  padding-left: 12rpx;
}

/* 基础列表项样式 */
.list-item {
  display: flex;
  align-items: center;
  gap: 20rpx;
  padding: 16rpx 0;
  border-bottom: 1rpx solid #eee;
}

.list-item:last-child {
  border-bottom: none;
}

.item-img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 8rpx;
}

.item-info {
  flex: 1;
}

.item-name {
  font-size: 26rpx;
  font-weight: 500;
  color: #333;
  margin-bottom: 8rpx;
}

.item-price {
  font-size: 24rpx;
  color: #ff3b30;
  margin-bottom: 8rpx;
}

.item-desc, .item-stock {
  font-size: 22rpx;
  color: #777;
}

/* 带索引列表样式 */
.index-item {
  display: flex;
  align-items: center;
  gap: 16rpx;
  padding: 12rpx 0;
  border-bottom: 1rpx solid #eee;
}

.index-tag {
  width: 40rpx;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  background-color: #3cc51f;
  color: #fff;
  border-radius: 50%;
  font-size: 20rpx;
}

.index-content {
  font-size: 24rpx;
  color: #333;
}

/* 遍历对象样式 */
.object-item {
  display: flex;
  padding: 12rpx 0;
  border-bottom: 1rpx solid #eee;
}

.object-key {
  font-size: 24rpx;
  color: #666;
  width: 160rpx;
}

.object-value {
  font-size: 24rpx;
  color: #333;
  flex: 1;
}

/* 空数据提示 */
.empty-tip {
  text-align: center;
  padding: 40rpx 0;
  color: #999;
  font-size: 24rpx;
}

/* 加载更多提示 */
.load-more {
  text-align: center;
  padding: 20rpx 0;
  color: #999;
  font-size: 22rpx;
}

</style>