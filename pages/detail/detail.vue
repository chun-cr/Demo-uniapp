<template>
	<view class="detail-container">
<!--    加载中提示-->
    <view class="loading" v-if="isLoading">加载中</view>

<!--    商品详情-->
    <view class="detail-content" v-else>
      <view class="detail-img" :style="{backgroundColor: goodsInfo.color}"></view>
      <view class="detail-info">
        <view class="detail-name">{{ goodsInfo.name }}</view>
        <view class="detail-price">￥{{ goodsInfo.price.toFixed(2) }}</view>
        <view class="detail-desc">商品描述： {{ goodsInfo.desc }}</view>
        <view class="detail-stock" :class="goodsInfo.stock > 0 ? 'in-stock' : 'out-stock'">
          {{ goodsInfo.stock > 0 ? `库存${goodsInfo.stock}` : '已售罄' }}
        </view>
      </view>

<!--      返回按钮-->
      <button @click="navigateBack" class="back-btn">返回列表</button>
    </view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
        isLoading: true,
        goodsInfo: {

        }
				
			}
		},
    onLoad(options) {
      const id = Number(options.id)
      this.getGoodsDetail(id)
    },
		methods: {
      getGoodsDetail(id){
        setTimeout(()=>{
          //模拟后端数据
          const mockGoodsList = [
            { id: 1, name: "Uniapp 实战教程", price: 99.0, desc: "零基础入门到精通", color: "#3cc51f", stock: 20 },
            { id: 2, name: "Vue3 核心指南", price: 129.0, desc: "Composition API 详解", color: "#007aff", stock: 0 },
            { id: 3, name: "微信小程序开发", price: 89.0, desc: "从入门到上线", color: "#ff9500", stock: 15 },
            { id: 4, name: "React 实战项目", price: 159.0, desc: "电商平台完整开发", color: "#ff3b30", stock: 8 }
          ];

          //新增商品
          for (let i = 0; i < 10; i++) {

            mockGoodsList.push({
              id: i,
              name: `新增商品 ${i}`,
              price: 69.0 + Math.floor(Math.random() * 100),
              desc: "上拉加载的新商品",
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              stock: Math.floor(Math.random() * 30)
            });
          }

          this.goodsInfo = mockGoodsList.find(item => item.id == id) || {};
          this.isLoading = false
        },800)
      },

      //返回列表页
      navigateBack(){
        uni.navigateBack({ delta: 1 })
      }
			
		}
	}
</script>

<style scoped>
.detail-container {
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.loading {
  text-align: center;
  padding: 200rpx 0;
  font-size: 28rpx;
  color: #666;
}

.detail-content {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
}

.detail-img {
  width: 100%;
  height: 300rpx;
  border-radius: 12rpx;
  margin-bottom: 24rpx;
}

.detail-name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.detail-price {
  font-size: 28rpx;
  color: #ff3b30;
  margin-bottom: 16rpx;
}

.detail-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 36rpx;
  margin-bottom: 24rpx;
}

.detail-stock {
  font-size: 24rpx;
  padding: 8rpx 16rpx;
  border-radius: 8rpx;
  display: inline-block;
  margin-bottom: 30rpx;
}

.in-stock {
  color: #3cc51f;
  background-color: #f0f9eb;
  border: 1rpx solid #e1f3d8;
}

.out-stock {
  color: #999;
  background-color: #fafafa;
  border: 1rpx solid #eee;
}

.back-btn {
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  font-size: 28rpx;
  background-color: #1f7dc5;
  color: #fff;
  border-radius: 44rpx;
}

</style>