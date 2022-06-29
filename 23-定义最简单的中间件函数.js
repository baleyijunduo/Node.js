const express = require('express');

const app = express();

// 定义一个最简单的中间件函数
const mw = function(req,res,next){
    console.log('这是最简单的中间件函数');
    next();
}

// 将mw注册为全局生效的中间件
//客户端发起任何请求到达服务器后都会触发的中间件就是全局中间件
app.use(mw);

app.get('/',(req,res) => {
    res.send('Home page');
})

app.post('/user',(req,res) => {
    res.send('User page')
})

app.listen(80,() => {
    console.log('http://127.0.0.1');
})