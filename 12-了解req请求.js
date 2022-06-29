const http = require('http');

const server = http.createServer();
//req是请求对象，包含与客户端相关的数据和属性
server.on('request',(req)=>{
    //req.url是客户端请求的URL地址
    const url = req.url;
    //req.method是客户端请求的method类型(method输出内容从端口号开始)
    const method = req.method;
    const str = `Your request url is ${url},and method is ${method}`;
    console.log(str);
});

server.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})
