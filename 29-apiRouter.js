const express = require('express');

const router = express.Router();

// 在这里挂载对应的路由
router.get('/get',(req,res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    // 调用res.send()方法，向客户端响应处理结果
    res.send({
        status:0,//0表述处理成功，1处理失败
        msg:'GET请求成功',//状态描述
        data:query//需要响应的数据
    });
})

// 定义POST接口
router.post('/post',(req,res) => {
    const body = req.body;
    res.send({
        status:0,
        msg:'POST请求成功',
        data:body
    })
})
module.exports = router;