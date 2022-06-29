const express = require('express');
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}));

// 在路由前配置cors中间件，解决接口跨域问题
const cors = require('cors');
app.use(cors());
// 导入路由模块
const router = require('./29-apiRouter');

// 把路由模块注册到app上
app.use('/api',router);
// 调用app.listen方法，指定端口号并启动web服务端
app.listen(80,() => {
    console.log('http://127.0.0.1');
})