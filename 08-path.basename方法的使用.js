const path = require('path');

//定义文件的存放路径

const fpath = 'a/b/c/index.html';

// const fullName = path.basename(fpath);
// console.log(fullName);
//第一个参数是文件路径，path.basename可以剥出文件部分，第二个参数可以去除后缀
const nameWithoutExit = path.basename(fpath,'.html');
console.log(nameWithoutExit);