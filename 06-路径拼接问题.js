//__dirname表示当前文件所处的目录
const fs = require('fs');
console.log(__dirname);
fs.readFile(__dirname + '/02-test.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败！' + err.message);
    }
    console.log('读取文件成功!' + dataStr);
})