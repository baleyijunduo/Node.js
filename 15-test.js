//在外界使用require导入一个自定义模块时，得到的成员
// 就是那个模块中，通过module.exports指向的那个对象

const m = require('./15-自定义模块');

console.log(m);