//在自定义模块中，默认情况下，module.exports = {}

// 向module.exports 对象上挂在username属性

module.exports.username = 'zs';

//向module.exports对象上挂在sayHello方法
module.exports.sayHello = function(){
    console.log('Hello!');
}