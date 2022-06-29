const express = require('express');
const app = express();

// 1.导入路由模块
const route = require('./22-路由模块');

//2.注册路由模块
//注意：app.use的作用就是用来注册全局中间件
app.use(route);

// 也可以为路由模块添加前缀，写法与静态资源一致
// app.use('/api',route);
app.listen(80,() => {
    console.log('http://127.0.0.1');
})