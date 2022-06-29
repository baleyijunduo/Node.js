//1.1 导入http模块
const http = require('http');
//1.2 导入fs模块
const fs = require('fs');
//1.3 导入path模块
const path = require('path');
// 2.1 创建web服务器
const server = http.createServer();
// 2.2 监听web服务器的request事件
server.on('request',function(req,res){
    // 3.1获取客户端请求的URL地址
    const url = req.url;
    console.log(url);
    let fpath = '';
    // 3.2把请求的URL地址映射为具体文件的存放路径
    if(url === '/'){
        // url = './clock/index.html';
        fpath = path.join(__dirname,'/14-clock/index.html');
        console.log(1);
    }
    else{
        fpath = path.join(__dirname,'/14-clock',url);
        console.log(2);
    }
    // const fpath = path.join(__dirname,url);

    // 4.1根据"映射"文件路径读取文件的内容
    fs.readFile(fpath,'utf8',function(err,dataStr){
        if(err){
            // console.log('读取失败' + err.message);
            res.end('404 notfound');
        }
        res.end(dataStr);
    })


})
// 2.3启动服务器
server.listen(80,() => {
    console.log('server running at http://127.0.0.1');
})