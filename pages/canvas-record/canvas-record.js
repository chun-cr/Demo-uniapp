// Canvas录音波形图管理器
class CanvasWaveformManager {
    constructor(canvasContext, canvasWidth, canvasHeight) {
        this.canvasContext = canvasContext;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.waveformPoints = [];
        this.maxPoints = 200; // 最大波形点数
        this.lastDrawTime = 0;
        this.drawInterval = 50; // 绘制间隔（ms）
        this.currentVolume = 0;
    }

    // 更新音量
    updateVolume(volume) {
        this.currentVolume = volume;
        this.addWaveformPoint(volume);
    }

    // 添加波形点
    addWaveformPoint(volume) {
        // 将音量转换为波形高度（0-100 -> 0-canvasHeight/2）
        const maxHeight = this.canvasHeight / 2;
        const height = (volume / 100) * maxHeight;
        
        // 添加新点
        this.waveformPoints.push({
            volume: volume,
            height: height,
            timestamp: Date.now()
        });
        
        // 限制点数，保持滚动效果
        if (this.waveformPoints.length > this.maxPoints) {
            this.waveformPoints.shift();
        }
        
        // 使用节流控制绘制频率，避免过度绘制
        const now = Date.now();
        if (now - this.lastDrawTime >= this.drawInterval) {
            this.drawWaveform();
            this.lastDrawTime = now;
        }
    }

    // 绘制波形
    drawWaveform() {
        const ctx = this.canvasContext;
        if (!ctx || this.waveformPoints.length === 0) return;

        // 清空画布
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // 绘制背景
        ctx.setFillStyle('#f5f5f5');
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // 绘制中心线
        ctx.setStrokeStyle('#e0e0e0');
        ctx.setLineWidth(1);
        ctx.beginPath();
        ctx.moveTo(0, this.canvasHeight / 2);
        ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
        ctx.stroke();
        
        // 计算每个点的X坐标间隔
        const pointSpacing = this.canvasWidth / this.maxPoints;
        const centerY = this.canvasHeight / 2;
        
        // 绘制上半部分波形（绿色）
        ctx.setStrokeStyle('#07c160');
        ctx.setLineWidth(2);
        ctx.beginPath();
        
        for (let i = 0; i < this.waveformPoints.length; i++) {
            const x = i * pointSpacing;
            const y = centerY - this.waveformPoints[i].height;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        
        // 绘制下半部分波形（对称）
        ctx.beginPath();
        for (let i = 0; i < this.waveformPoints.length; i++) {
            const x = i * pointSpacing;
            const y = centerY + this.waveformPoints[i].height;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        
        // 填充波形区域（渐变效果）
        if (this.waveformPoints.length > 1) {
            // 上半部分填充
            ctx.setFillStyle('rgba(7, 193, 96, 0.2)');
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            for (let i = 0; i < this.waveformPoints.length; i++) {
                const x = i * pointSpacing;
                const y = centerY - this.waveformPoints[i].height;
                ctx.lineTo(x, y);
            }
            ctx.lineTo((this.waveformPoints.length - 1) * pointSpacing, centerY);
            ctx.closePath();
            ctx.fill();
            
            // 下半部分填充
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            for (let i = 0; i < this.waveformPoints.length; i++) {
                const x = i * pointSpacing;
                const y = centerY + this.waveformPoints[i].height;
                ctx.lineTo(x, y);
            }
            ctx.lineTo((this.waveformPoints.length - 1) * pointSpacing, centerY);
            ctx.closePath();
            ctx.fill();
        }
        
        // 绘制当前音量指示线
        if (this.waveformPoints.length > 0) {
            const lastIndex = this.waveformPoints.length - 1;
            const x = lastIndex * pointSpacing;
            
            ctx.setStrokeStyle('#ff4444');
            ctx.setLineWidth(2);
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvasHeight);
            ctx.stroke();
        }
        
        // 提交绘制
        ctx.draw();
    }

    // 绘制初始背景
    drawBackground() {
        const ctx = this.canvasContext;
        if (!ctx) return;

        // 清空画布
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // 绘制背景
        ctx.setFillStyle('#f5f5f5');
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // 绘制中心线
        ctx.setStrokeStyle('#e0e0e0');
        ctx.setLineWidth(1);
        ctx.beginPath();
        ctx.moveTo(0, this.canvasHeight / 2);
        ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
        ctx.stroke();
        
        ctx.draw();
    }

    // 重置波形
    reset() {
        this.waveformPoints = [];
        this.currentVolume = 0;
        this.drawBackground();
    }

    // 更新Canvas尺寸
    updateCanvasSize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
    }
}

// 导出
module.exports = CanvasWaveformManager;