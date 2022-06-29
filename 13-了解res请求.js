const http = require('http');
const server = http.createServer();
//回调函数的形参不能调换位置
server.on('request',function(req,res){
    const url = req.url;
    const method = req.method;
    const str = `你请求的 url 是 ${url},and method is ${method}`;
    console.log(str);
    //如果中文乱码，则需要设计响应头
    res.setHeader('Content-Type','text/html;charset=utf-8');
    //调用res.end()方法,想客户端响应一些内容
    res.end(str);
})

server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})