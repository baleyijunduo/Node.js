//1.导入fs模块
const fs = require('fs');

//2.调用fs.readFile() 读取文件的内容
fs.readFile('./05-成绩.txt','utf-8',function(err,dataStr){
//3.判断是否成功读取
if(err){
    return alert('读取失败！' + err);
}
//console.log('读取成功！' + dataStr);
//4.1先把成绩按照空格分隔
const arrOld = dataStr.split(' ');
console.log(arrOld);
//4.2循环分割后的数组，对每一项数据进行字符串的替换操作
const arrNew = []
//相当于function(item){}
arrOld.forEach(item => {
    arrNew.push(item.replace('=',':'))
})
//console.log(arrNew);
//4.3把新数组中的每一项，进行合并，得到一个新的字符串
var Str = arrNew.join('\r\n');
console.log(Str);

//5.调用fs.writeFile()方法,把处理完毕的成绩写入新文件
fs.writeFile('./成绩-ok.txt',Str,function (err) {
    if(err){
        return console.log('成绩写入失败');
    }
    console.log('成绩写入成功！');
})
})