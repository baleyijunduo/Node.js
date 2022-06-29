//凡是涉及到路径拼接操作，都要用path.jion方法进行处理
const path = require('path');
const fs = require('fs');
//注意 ../会抵消一层路径
const pathStr = path.join('/a','/b/c','../../','/d','/e');
console.log(pathStr);

fs.readFile(path.join(__dirname,'/02-test.txt'),'utf-8',function(err,dataStr){
    if(err){
        return console.log('错误' + err.message);
    }
    console.log(dataStr);
})