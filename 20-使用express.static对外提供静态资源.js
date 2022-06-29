const express = require('express');

const app = express();

//调用express.static()方法,快速对外提供静态资源
//如果调用多个express.static()方法，静态资源内部又同名文件，则调用先开放的静态资源
app.use(express.static('./14-clock'));

// 也可以对访问的资源添加前缀
app.use('/public',express.static('./14-clock'));
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})
