const express = require('express');

const app = express();

// 导入Node.js 内置的querystring模块
const qs = require('querystring');

app.use((req,res,next) => {
    // 定义中间件具体业务逻辑
    // 1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = '';
    // 2.监听req的data事件
    req.on('data',(chunk) => {
        str += chunk;
    })
    // 3.监听req的end事件
    // 这时str就是完整的字符串
    req.on('end',() =>{
        console.log(str);
        // 把字符串格式请求体数据，解析成对象格式
        const body = qs.parse(str);
        req.body = body;
        next();
    })
})

app.post('/',(req,res) => {
    res.send(req.body);
})

// 调用app.listen方法，指定端口号并启动web服务端
app.listen(80,() => {
    console.log('http://127.0.0.1');
})