<template>
  <view class="content">
    <view id="player"></view>
  </view>
</template>


<script>
import Aliplayer from 'aliyun-aliplayer';
import "aliyun-aliplayer/build/skins/default/aliplayer-min.css";
export default {
  data() {
    return {}
  },
  mounted() {
    this.player = this.createPlayer();
  },
  methods: {
    createPlayer: () => {
      return new Aliplayer({
        id: 'player',
        source: 'https://player.alicdn.com/video/aliyunmedia.mp4',
        width: '800px',
        autoSize: true,
      });
    },
    // 如果需要引入组件，请先加载 await loadComponent() 再初始化播放器
    loadComponent() {
      return new Promise((resolve, reject) => {
        const s_tag = document.createElement('script');
        s_tag.type = 'text/javascript';
        // 需要先下载组件 js 文件，放到项目 /static/ 目录下
        // 下载地址：https://github.com/aliyunvideo/AliyunPlayer_Web/blob/master/customComponents/dist/aliplayer-components/aliplayercomponents-1.1.2.min.js
        s_tag.src = './static/aliplayercomponents-1.1.2.min.js';
        s_tag.charset = 'utf-8';
        s_tag.onload = () => {
          resolve();
        }
        document.body.appendChild(s_tag);
      });
    }
  }
}
</script>


<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>