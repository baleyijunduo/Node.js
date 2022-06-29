//1.导入fs模块操作文件
const fs123 = require('fs');

//2.调用fs.readFile()方法读取文件
//参数1：读取文件的存放路径
//参数2：读取文件时候采用的编码格式，一般默认utf-8
//参数3：回调函数，拿到读取失败和成功的结果
fs123.readFile('./02-test.txt','utf-8',function(err,dataStr){
    //2.1打印失败的结果
    //如果成功，失败值为null
    //如果失败，则err值为错误对象
    console.log(err);

    //2.2 打印成功的结果
    //如果失败，dataStr值为undefined
    console.log(dataStr);
    
})