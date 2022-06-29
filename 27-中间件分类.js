// 1.应用级别中间件
    // 就是绑定在app上的中间件
// 2.路由级别中间件
    // 绑定在路由Route上的中间件
// 3.错误级别中间件
    // 用来捕获整个项目的异常错误，防止项目异常崩溃
    // 形参格式为(err,req,res,next)
    // 错误中间件必须注册在所有路由之后
// 4.express内置中间件
    // express.static 快速托管静态资源的内置中间件
    // express.json解析JSON格式的请求体数据
    // express.urlencoded解析URL-encoded格式的请求体数据
// 5.第三方中间件