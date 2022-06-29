// 导入express模块
const express = require('express');

// 创建express服务器实例
const app =express();

// 配置session中间件
const session = require('express-session');
app.use(session({
    secret:'haohao',
    resave:false,
    saveUninitialized:true
}));

// 托管静态页面
app.use(express.static('./32-pages'));

// 解析POST提交过来的表单数据
app.use(express.urlencoded({extended:false}));

// 登录API接口
app.post('/api/login',(req,res) => {
    // 判断用户提交的登录信息是否正确
    if(req.body.username != 'admin' || req.body.password != '000000'){
        return res.send({status:1,msg:'登陆失败'});
    }
    
    // 将登录后的用户信息保存到Session中
    req.session.user = req.body;//用户信息
    req.session.islogin = true;//永固登陆状态
    res.send({status:0,msg:'登录成功'});

})

// 获取用户姓名接口
app.get('/api/username',(req,res) => {
    // 从Session中获取用户的名称，响应给客户端
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    res.send({
        status:0,
        msg:'success',
        username:req.session.user.username
    })
})

app.post('/api/logout',(req,res) =>{
    // 清空session信息
    req.session.destroy();
    res.send({
        status:0,
        msg:'退出成功'
    })
})
app.listen(80,() => {
    console.log('http://127.0.0.1');
})