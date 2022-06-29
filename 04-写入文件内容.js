//1.导入fs文件系统快
const fs = require('fs');

//2.都要用fs.writeFile()方法，写入文件内容
//参数1.表示文件存放的路径
//参数2.表示要写入的内容
//参数3.回调函数

fs.writeFile('./02-test.txt','leihao',function(err,dataStr){
    //2.1如果文件写入成功，err值为null
    //2.2如果写入失败err是一个错误对象
    // console.log(err);
    // console.log(dataStr);

    if(err){
       return console.log('文件写入失败' + err.message);
    }

    console.log('文件写入成功');
})