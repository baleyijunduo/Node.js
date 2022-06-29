// 不适用app.use()定义的中间件叫做局部生效中间件
//导入express模块
const express = require('express');

// 创建express服务器实例
const app = express();

// 定义中间件函数
const mw1 = (req,res,next) => {
    console.log('调用了局部生效中间件1');
    next();
}

const mw2 = (req,res,next) => {
    console.log('调用了局部生效中间件2');
    next();
}

//创建路由
// 中间多一个mw1参数就可以被局部中间件调用
// 也可以放多个局部中间件参数，逗号隔开
app.get('/',mw2,mw1,(req,res) => {
    res.end('去你妈的');
})

// 并没有调用中间件而是直接调用该函数
app.post('/',(req,res) => {
    res.end('去你爸的');
})

// 调用app.listen方法，指定端口号并启动web服务器
app.listen(80,() => {
    console.log('http://127.0.0.1');
})