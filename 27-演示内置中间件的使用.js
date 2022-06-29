// 导入express模块
const express = require('express');

// 创建express的服务器实例
const app = express();

// 通过express.json中间件，解析表单中的JSON格式数据
app.use(express.json());

//通过express.urlencoded()这个中间件来解析表单中的url-encoded格式的数据 
app.use(express.urlencoded({extended:false}));

app.post('/',(req,res) => {
    console.log(req.body);
    res.send('ok');
})

// app.use((err,req,res,next) => {
//     console.log('发生了错误！' + err.message);
//     res.send('Error:' + err.message);
// })

app.listen(80,() => {
    console.log('http://127.0.0.1');
});