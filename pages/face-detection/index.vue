<script>
function throttle(fn, delay) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
export default {
  name: "index",
  data(){
    return{
      //相机相关
      devicePosition: 'front',
      cameraHeight: 0,
      cameraContext: null,
      cameraListener: null,

      //检测状态
      isScanning: false,
      isDetecting: false,
      isLoading: false,
      qualifiedTime:0,

      //面部数据
      faceRect: {
        visible: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      facePoints: [],
      faceFrame: {
        visible: false,
        width: 0,
        height: 0
      },
      scaleX: 1,
      scaleY: 1,

      //检测结果
      resultImg: '',
      confidence: 0,
      facePosition: '未检测到',
      faceSize: '0%',

      //状态提示
      statusText: '请将人脸置于框内',
      statusClass: 'status-default',

      // 定时器
      takePhotoTimer: null,
      detectionTimer: null
    }
  },
  computed: {
    cameraStyle() {
      return {
        height: this.cameraHeight + 'px'
      };
    }
  },

  onLoad(){
    this.initCamera()
  },

  onUnload(){
    this.stopDetection();
    this.clearTimers();
  },

  methods: {
    //初始化相机
    initCamera() {
      this.isLoading = true;

      //获取窗口高度
      const systemInfo = uni.getSystemInfoSync();
      this.cameraHeight = systemInfo.windowHeight * 0.7;

      //初始化微信人脸检测
      if (typeof wx !== 'undefined' && wx.initFaceDetect){
        wx.initFaceDetect({
          success: () => {
            console.log('人脸初始化成功')
            this.setStatus('初始化成功，可以开始检测','success');
          },
          fail: (err) => {
            console.log('人脸初始化失败', err)
            this.setStatus('初始化失败','error');
          }
        });
      }

      //创建相机上下文
      this.cameraContext = uni.createCameraContext();
      if(!this.cameraContext){
        this.setStatus('请检查相机权限','error');
        this.isLoading = false;
        return;
      }

      this.isLoading = false;
      this.setStatus('准备就绪，点击开始检测','default')
    },

    //开始检测
    startDetection() {
      if(this.isScanning || this.isLoading) return;
      this.isScanning = true;
      this.qualifiedTime = 0;
      this.clearTimers()
      this.setStatus('开始检测中...','scanning');

      //开始监听相机帧
      this.cameraListener = this.cameraContext.onCameraFrame(frame => {
        this.handleFrameData(frame)
      });

      this.cameraListener.start()

      //添加检测超时
      this.detectionTimer = setTimeout(() => {
        if(this.isScanning && !this.isDetecting){
          this.setStatus('检测超时，请重新开始','error');
          this.stopDetection();
        }

      }, 3000);
    },

    //处理帧数据
    handleFrameData: throttle(function(frame){
      if(!this.isScanning) return;

      this.faceFrame = {
        width: frame.width,
        height: frame.height
      };

      //计算缩放比例
      this.scaleX = uni.getSystemInfoSync().windowWidth / frame.width;
      this.scaleY = (this.cameraHeight) / frame.height;

      //调用人脸检测
      if (typeof wx !== 'undefined' && wx.faceDetect){
        wx.faceDetect({
          frameBuffer: frame.data, // 核心：相机帧原始像素数据（ABGR 格式 Uint8Array）
          width: frame.width,      // 帧图像宽度（与 frameBuffer 匹配）
          height: frame.height,    // 帧图像高度（与 frameBuffer 匹配）
          enablePoint: true,       // 是否返回人脸关键点（如眼睛、鼻子、嘴巴坐标）
          enableConf: true,        // 是否返回人脸置信度（0-1，越高越可能是人脸）
          enableAngle: true,       // 是否返回人脸姿态角度（俯仰角、偏航角、滚转角）
          enableMultiFace: false,  // 是否支持多人脸检测（false=只检测1张人脸）
          success: (faceData) => {
            this.handleFaceData(faceData);
          },
          fail: (err) => {
            this.handleDetectionError(err);
          }
        });
      }
    },200),

    //处理人脸数据
    handleFaceData(faceData) {
      if (faceData.x === -1 || faceData.y === -1){
        this.faceRect.visible = false;
        this.setStatus('未检测到人脸，请重新开始','warning');
        this.qualifiedTime = 0;
        return ;
      }

      if (faceData.faceInfo.length > 1){
        this.setStatus('检测到多个人脸，请确保只有一个人脸','warning');
        this.qualifiedTime = 0;
        return;
      }

      const face = faceData.faceInfo[0];

      //更新面部矩阵
      this.faceRect = {
        visible: true,
        x: face.detectRect.originX * this.scaleX,
        y: face.detectRect.originY * this.scaleY,
        width: face.detectRect.width * this.scaleX,
        height: face.detectRect.height * this.scaleY
      };

      //更新关键点
      if(face.pointArray){
        this.facePoints = face.pointArray.slice(0, 10);
      }

      //计算面部在画面中的比例
      const faceWidthRate = face.detectRect.width / this.faceFrame.width;
      this.faceSize = Math.round(face.confArray.global * 100) + '%';

      //计算置信度
      this.confidence = Math.round(face.confArray.global * 100);

      //面部位置判断
      const centerX =face.x / this.faceFrame.width;
      const centerY = face.y / this.faceFrame.height;

      if (centerX > 0.4 && centerX < 0.6 && centerY > 0.4 && centerY < 0.6) {
        this.facePosition = '中心位置 ✓';
        this.qualifiedTime++;
        this.setStatus(`面部位置良好，保持 ${this.qualifiedTime}/3`, 'success');
      } else {
        this.facePosition = '需要调整';
        this.qualifiedTime = 0;

        if (centerX < 0.4) this.setStatus('请向右移动', 'warning');
        else if (centerX > 0.6) this.setStatus('请向左移动', 'warning');
        else if (centerY < 0.4) this.setStatus('请向下移动', 'warning');
        else this.setStatus('请向上移动', 'warning');
      }

      //检测通过条件
      const conditions = [
          this.confidence >= 80,
          faceWidthRate >= 0.4 && faceWidthRate <= 0.7,
          Math.abs(face.angleArray.pitch) < 0.3,
          Math.abs(face.angleArray.yaw) < 0.3,
          Math.abs(face.angleArray.roll) < 0.3
      ];
      if (conditions.every(cond => cond)) {
        if (this.qualifiedTime >= 3) {
          this.takePhoto();
        }
      } else {
        if (this.confidence < 80) {
          this.setStatus('面部清晰度不足，请正对光源', 'warning');
        } else if (faceWidthRate < 0.4) {
          this.setStatus('面部太小，请靠近摄像头', 'warning');
        } else if (faceWidthRate > 0.7) {
          this.setStatus('面部太大，请远离摄像头', 'warning');
        } else if (Math.abs(face.angleArray.pitch) >= 0.3) {
          this.setStatus('请平视摄像头', 'warning');
        }
        this.qualifiedTime = Math.max(0, this.qualifiedTime - 1);
      }
    },
    // 处理检测错误
    handleDetectionError(err) {
      console.error('人脸检测失败:', err);
      this.faceRect.visible = false;
      this.setStatus('检测失败，请重试', 'error');
    },

    // 拍照
    takePhoto() {
      if (this.takePhotoTimer) return;

      this.setStatus('准备拍照... 3', 'success');
      let countdown = 3;

      this.takePhotoTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          this.setStatus(`准备拍照... ${countdown}`, 'success');
        } else {
          clearInterval(this.takePhotoTimer);
          this.takePhotoTimer = null;
          this.capturePhoto();
        }
      }, 1000);
    },

    // 捕获照片
    capturePhoto() {
      this.cameraContext.takePhoto({
        quality: 'high',
        success: (res) => {
          this.resultImg = res.tempImagePath;
          this.isDetecting = false;
          this.isScanning = false;

          if (this.cameraListener) {
            this.cameraListener.stop();
          }

          this.setStatus('检测完成！', 'success');

          // 显示检测结果
          setTimeout(() => {
            this.showDetectionResult();
          }, 500);
        },
        fail: (err) => {
          console.error('拍照失败:', err);
          this.setStatus('拍照失败，请重试', 'error');
          this.stopDetection();
        }
      });
    },

    // 显示检测结果
    showDetectionResult() {
      uni.showModal({
        title: '检测完成',
        content: `面部检测成功！\n置信度：${this.confidence}%\n面部大小：${this.faceSize}`,
        showCancel: false,
        confirmText: '好的'
      });
    },

    // 停止检测
    stopDetection() {
      this.isScanning = false;
      this.qualifiedTime = 0;
      this.faceRect.visible = false;

      if (this.cameraListener) {
        this.cameraListener.stop();
      }

      this.clearTimers();
      this.setStatus('检测已停止', 'default');
    },

    // 重新开始检测
    restartDetection() {
      this.isDetecting = false;
      this.resultImg = '';
      this.faceRect.visible = false;
      this.setStatus('准备开始检测', 'default');
    },

    // 切换摄像头
    switchCamera() {
      if (this.isScanning || this.isLoading) return;

      this.devicePosition = this.devicePosition === 'front' ? 'back' : 'front';
      this.setStatus(`已切换为${this.devicePosition === 'front' ? '前置' : '后置'}摄像头`, 'info');
    },

    // 设置状态提示
    setStatus(text, type = 'default') {
      this.statusText = text;
      this.statusClass = `status-${type}`;
    },

    // 清除定时器
    clearTimers() {
      if (this.takePhotoTimer) {
        clearInterval(this.takePhotoTimer);
        this.takePhotoTimer = null;
      }
      if (this.detectionTimer) {
        clearTimeout(this.detectionTimer);
        this.detectionTimer = null;
      }
    },

    // 相机错误处理
    errorCamera(e) {
      console.error('相机错误:', e);
      uni.showModal({
        title: '相机错误',
        content: '请检查相机权限是否开启',
        showCancel: false,
        success: () => {
          uni.navigateBack();
        }
      });
    }

  }

}
</script>

<template>
  <view class="page-container">
    <camera v-if="!isDectecting"
            mode="normal"
            :device-position="devicePosition"
            resolution="high"
            frame-size="medium"
            :style="{height : cameraHeight + 'px'}"
            @error="handleCamera"
            >
      <view class="camera-overlay">
<!--        人脸检测框-->
        <view
          v-if="faceRect.visible"
          class="face-rect"
          :style="{
            top: faceRect.x + 'px',
            left: faceRect.y + 'px',
            width: faceRect.width + 'px',
            height: faceRect.height + 'px'
          }"
        >
          <view class="face-rect-border"></view>
          <view class="face-rect-points">
            <view
              v-for="(point, index) in facePoints"
              :key="index"
              class="face-point"
              :style="{
                top: (point.y * scaleX) + 'px',
                left: (point.x * scaleY) + 'px'
              }"
            ></view>
          </view>
        </view>

<!--        中心区域-->
        <view class="center-area">
          <view class="center-rect"></view>
          <view class="center-dot"></view>
        </view>
      </view>
    </camera>

<!--    检测结果展示-->
    <view v-if="isDetecting" class="result-container">
      <image :src="resultImg" mode="withFix" class="result-image"></image>
      <view class="result-title">检测结果</view>
      <view class="info-item">
        <text class="label">面部位置：</text>
        <text class="value">{{ facePosition.visible ? `(${facePosition.x}, ${facePosition.y})` : '未检测到人脸' }}</text>
      </view><view class="info-item">
        <text class="label">面部大小：</text>
        <text class="value">{{ faceSize }}</text>
      </view><view class="info-item">
        <text class="label">置信度：</text>
        <text class="value">{{ confidence }}</text>
      </view>
    </view>

<!--    控制面板-->
    <view class="contro-panel">
      <view class="status-info">
        <text class="status-text" :class="statusClass">{{ statusText }}</text>
        <text v-if="qualifiedTime > o" class="countdown"> {{ qualifiedTime }} </text>
      </view>

      <view class="button-group">
        <button
          v-if="!isScanning && !isDetecting"
          class="btn start-btn"
          :disabled="isLoading"
          @tap="startDetection"
          >
          <view class="btn-icon">▶</view>
          <text class="btn-text">开始检测</text>
        </button>

        <!-- 停止按钮 -->
        <button
            v-if="isScanning && !isDetecting"
            class="btn stop-btn"
            @tap="stopDetection"
        >
          <view class="btn-icon">⏸</view>
          <text class="btn-text">停止检测</text>
        </button>

        <!-- 重新检测按钮 -->
        <button
            v-if="isDetecting"
            class="btn restart-btn"
            @tap="restartDetection"
        >
          <view class="btn-icon">↻</view>
          <text class="btn-text">重新检测</text>
        </button>

<!--        切换摄像头-->
        <button
          class="btn flip-btn"
          :disabled="isScanning || isDetecting"
          @tap="switchCamera">
          <view class="btn-icon">🔄</view>
          <text class="btn-text">切换摄像头</text>
        </button>

<!--        加载提示-->
        <view v-if="isLoading" class="loading-overlay">
          <view class="loading-spinner"></view>
          <text class="loading-text">初始化中...</text>
        </view>
      </view>
    </view>

  </view>

</template>

<style lang="less">
.page-container {
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.camera-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

// 人脸检测框样式
.face-rect {
  position: absolute;
  border: 2px solid #3efefe;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(62, 254, 254, 0.5);

  .face-rect-border {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
  }
}

.face-point {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #3efefe;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 4px rgba(62, 254, 254, 0.8);
}

// 中心区域
.center-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;

  .center-rect {
    width: 100%;
    height: 100%;
    border: 1px dashed rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  .center-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: #ff3b30;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}

// 控制面板
.control-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  padding: 20rpx;
  padding-bottom: env(safe-area-inset-bottom);
}

.status-info {
  text-align: center;
  margin-bottom: 20rpx;

  .status-text {
    font-size: 28rpx;
    font-weight: bold;
    padding: 10rpx 30rpx;
    border-radius: 50rpx;
    display: inline-block;

    &.status-default {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    &.status-scanning {
      background-color: rgba(62, 254, 254, 0.2);
      color: #3efefe;
    }

    &.status-success {
      background-color: rgba(52, 199, 89, 0.2);
      color: #34c759;
    }

    &.status-warning {
      background-color: rgba(255, 149, 0, 0.2);
      color: #ff9500;
    }

    &.status-error {
      background-color: rgba(255, 59, 48, 0.2);
      color: #ff3b30;
    }

    &.status-info {
      background-color: rgba(0, 122, 255, 0.2);
      color: #007aff;
    }
  }

  .countdown {
    display: block;
    font-size: 32rpx;
    color: #3efefe;
    margin-top: 10rpx;
    font-weight: bold;
  }
}

.button-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20rpx;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rpx 30rpx;
  border: none;
  border-radius: 20rpx;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-width: 200rpx;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    filter: grayscale(1);
  }

  .btn-icon {
    font-size: 40rpx;
    margin-bottom: 10rpx;
  }

  .btn-text {
    font-size: 24rpx;
    color: #fff;
  }

  &.start-btn {
    background: linear-gradient(135deg, #34c759, #2ecc71);
  }

  &.stop-btn {
    background: linear-gradient(135deg, #ff3b30, #ff375f);
  }

  &.restart-btn {
    background: linear-gradient(135deg, #007aff, #5856d6);
  }

  &.flip-btn {
    background: linear-gradient(135deg, #5ac8fa, #34c759);
  }
}

// 检测结果展示
.result-container {
  background-color: #000;
  height: 100%;
  display: flex;
  flex-direction: column;

  .result-image {
    flex: 1;
    width: 100%;
  }

  .result-info {
    background: rgba(0, 0, 0, 0.8);
    padding: 30rpx;

    .result-title {
      display: block;
      font-size: 36rpx;
      color: #fff;
      font-weight: bold;
      margin-bottom: 30rpx;
      text-align: center;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rpx;

      .label {
        color: #999;
        font-size: 28rpx;
      }

      .value {
        color: #3efefe;
        font-size: 28rpx;
        font-weight: bold;
      }
    }
  }
}

// 加载提示
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .loading-spinner {
    width: 80rpx;
    height: 80rpx;
    border: 4rpx solid rgba(255, 255, 255, 0.1);
    border-top-color: #3efefe;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 30rpx;
  }

  .loading-text {
    color: #fff;
    font-size: 28rpx;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>