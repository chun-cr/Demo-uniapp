// server.js - 完全简化版
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// 创建 Express 应用
const app = express();

// 设置端口
const PORT = 3000;

// 基本中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 创建上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log(`📁 创建上传目录: ${uploadDir}`);
}

// 配置文件存储
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        // 生成唯一的文件名
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

// 创建上传中间件
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB
    },
    fileFilter: function (req, file, cb) {
        // 只允许音频文件
        const allowedTypes = /audio\/(mpeg|mp3|wav|x-wav|x-m4a|ogg|webm|aac)/;
        if (allowedTypes.test(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('只允许上传音频文件'));
        }
    }
});

// ============ 路由定义 ============

// 首页路由
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: '录音上传服务器已启动',
        endpoints: {
            upload: 'POST /api/upload',
            files: 'GET /api/files',
            download: 'GET /api/download/:filename'
        }
    });
});

// 上传文件
app.post('/api/upload', upload.single('audio'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                status: 'error',
                message: '没有接收到文件'
            });
        }

        const file = req.file;
        
        res.json({
            status: 'success',
            message: '文件上传成功',
            data: {
                filename: file.filename,
                originalName: file.originalname,
                size: file.size,
                mimetype: file.mimetype,
                path: `/uploads/${file.filename}`,
                downloadUrl: `/api/download/${file.filename}`,
                createdAt: new Date().toISOString()
            }
        });

        console.log(`✅ 文件上传成功: ${file.filename}`);

    } catch (error) {
        console.error('❌ 上传错误:', error);
        res.status(500).json({
            status: 'error',
            message: '上传失败',
            error: error.message
        });
    }
});

// 获取文件列表
app.get('/api/files', (req, res) => {
    try {
        if (!fs.existsSync(uploadDir)) {
            return res.json({
                status: 'success',
                data: [],
                count: 0
            });
        }

        const files = fs.readdirSync(uploadDir)
            .filter(filename => {
                const filePath = path.join(uploadDir, filename);
                return fs.statSync(filePath).isFile();
            })
            .map(filename => {
                const filePath = path.join(uploadDir, filename);
                const stats = fs.statSync(filePath);
                
                return {
                    name: filename,
                    size: stats.size,
                    createdAt: stats.birthtime,
                    modifiedAt: stats.mtime,
                    downloadUrl: `/api/download/${filename}`,
                    directUrl: `/uploads/${filename}`
                };
            })
            .sort((a, b) => b.createdAt - a.createdAt); // 按创建时间倒序

        res.json({
            status: 'success',
            data: files,
            count: files.length
        });

    } catch (error) {
        console.error('❌ 获取文件列表错误:', error);
        res.status(500).json({
            status: 'error',
            message: '获取文件列表失败',
            error: error.message
        });
    }
});

// 下载文件 - 使用参数方式
app.get('/api/download/:filename', (req, res) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(uploadDir, filename);
        
        // 安全检查
        if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
            return res.status(400).json({
                status: 'error',
                message: '无效的文件名'
            });
        }
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                status: 'error',
                message: '文件不存在'
            });
        }

        // 发送文件
        res.download(filePath, filename, (err) => {
            if (err) {
                console.error('下载错误:', err);
                if (!res.headersSent) {
                    res.status(500).json({
                        status: 'error',
                        message: '下载失败'
                    });
                }
            }
        });

        console.log(`📥 文件下载: ${filename}`);

    } catch (error) {
        console.error('❌ 下载错误:', error);
        res.status(500).json({
            status: 'error',
            message: '下载失败',
            error: error.message
        });
    }
});

// 删除文件
app.delete('/api/files/:filename', (req, res) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(uploadDir, filename);
        
        // 安全检查
        if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
            return res.status(400).json({
                status: 'error',
                message: '无效的文件名'
            });
        }
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                status: 'error',
                message: '文件不存在'
            });
        }
        
        fs.unlinkSync(filePath);
        
        res.json({
            status: 'success',
            message: '文件删除成功'
        });

        console.log(`🗑️ 文件删除: ${filename}`);

    } catch (error) {
        console.error('❌ 删除错误:', error);
        res.status(500).json({
            status: 'error',
            message: '删除失败',
            error: error.message
        });
    }
});

// 静态文件访问
app.use('/uploads', express.static(uploadDir));

// 404 处理
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: '接口不存在',
        path: req.path
    });
});

// 错误处理
app.use((err, req, res, next) => {
    console.error('🔥 服务器错误:', err);
    
    // Multer 错误处理
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({
                status: 'error',
                message: '文件太大，最大50MB'
            });
        }
    }
    
    res.status(500).json({
        status: 'error',
        message: '服务器错误',
        error: err.message
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🎯 录音上传服务器启动成功');
    console.log(`📁 上传目录: ${uploadDir}`);
    console.log(`🌐 本地访问: http://localhost:${PORT}`);
    console.log(`🌐 网络访问: http://${getIPAddress()}:${PORT}`);
    console.log('📋 可用接口:');
    console.log(`  GET    /                     - 服务器信息`);
    console.log(`  POST   /api/upload           - 上传录音`);
    console.log(`  GET    /api/files            - 文件列表`);
    console.log(`  GET    /api/download/:name   - 下载文件`);
    console.log(`  DELETE /api/files/:name      - 删除文件`);
    console.log('='.repeat(60));
});

// 获取本机IP
function getIPAddress() {
    try {
        const os = require('os');
        const interfaces = os.networkInterfaces();
        
        for (const name in interfaces) {
            for (const iface of interfaces[name]) {
                if (iface.family === 'IPv4' && !iface.internal) {
                    return iface.address;
                }
            }
        }
    } catch (err) {
        // 忽略错误
    }
    return 'localhost';
}