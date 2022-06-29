// 1.1 导入fs模块
const fs = require('fs');

//1.2 导入path模块
const path = require('path');

//1.3定义正则表达式，分别匹配<style></style> 和 <script></script> 标签
// \s\S意为匹配空白字符和任意非空白字符，*表示可以匹配多次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//2.1 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname,'./10-时钟案例.html'),'utf-8',function(err,dataStr){
    //2.2 读取文件失败
    if(err){
        return console.log('读取文件失败'  + err.message);
    }
    //2.3 读取成功,调用三个方法，切割css，js和html
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

//3.1 定义处理css样式的方式
function resolveCSS(htmlStr){
//3.2正则表达式的方法，提取其中的内容
    const r1 = regStyle.exec(htmlStr);
    //console.log(r1);
//3.3 将提取出来的样式字符串进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','');
//3.4 调用fs.writeFile()方法,将提取的样式写入到clock目录中index.css的文件里面来
    fs.writeFile(path.join(__dirname,'./10-时钟案例.css'),newCSS,function(err){
        if(err){
            return  console.log('写入CSS失败' + err.message);
        }

    })
}

//4.1 定义处理js的方式
function resolveJS(htmlStr){
    var r2 = regScript.exec(htmlStr);
    var newJS = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./10-时钟案例.js'),newJS,err => {
        if(err){
            return console.log('写入JS失败' + err.message);
        }
        console.log('写入成功');
    })
}

//5.1 定义HTML的处理方式
function resolveHTML(htmlStr){
    //5.2替换掉css与js的内容，换成链接
   const newHTML =  htmlStr.replace(regStyle,'<link rel = "stylesheet" href = "./10-时钟案例.css">')
            .replace(regScript,'<script src = "./10-时钟案例.js"></script>');

    // 5.3 覆盖html文件
    fs.writeFile(path.join(__dirname,'./10-时钟案例.html'),newHTML,err => {
        if(err){
            return console.log('写入HTML失败' + err.message);
        }
    })
    

}

//注意点：fs.writeFile只能创建文件，不能创建文件夹
// fs.wirteFile会覆盖文件中原有的内容
