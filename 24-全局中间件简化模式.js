const express = require('express');

const app = express();

// // 定义一个最简单的中间件函数
// const mw = function(req,res,next){
//     console.log('这是最简单的中间件函数');
//     next();
// }

// 将mw注册为全局生效的中间件
//客户端发起任何请求到达服务器后都会触发的中间件就是全局中间件

// 中间件共享req和res
// 定义多个全局中间件，将会按顺序调用全局中间件
app.use((req,res,next) => {
    console.log('简化中间件');
    const time = Date.now();
    req.nowDate = time;
    console.log(req.nowDate);
    next();
});

app.get('/',(req,res) => {
    res.send('Home page' + req.nowDate);

})

app.post('/user',(req,res) => {
    res.send('User page'+ req.nowDate)
})

app.listen(80,() => {
    console.log('http://127.0.0.1');
})