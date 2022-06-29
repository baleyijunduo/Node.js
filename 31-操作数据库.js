// 导入mysql模块
const mysql = require('mysql');

// 建立与MySQL数据库的连接关系
const db = mysql.createPool({
    host:'127.0.0.1',//数据库的IP地址
    user:'root',//登录数据库账号
    password:'123456',//登陆密码
    database:'my_db_01'//数据库名字
})

// 测试mysql模块是否正常工作
// db.query('select 1',(err,results) => {
//     if(err){
//     return console.log(err.message);
//     }
//     console.log(results);
// })

// 查询users 表中所有的数据
// select查询语句执行结果返回的是数组
// const sqlStr = 'select * from users';
// db.query(sqlStr,(err,results) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(results);
// })

// // 向users表中，新增一条数据
// const user = {username:'Spider-Man',password:'haohao123'};
// // 定义待执行的SQL语句,用问号占位
// const sqlStr = 'insert into users(username,password) values (?,?)';
// // 执行SQL语句
// // 如果执行的是insert into 插入语句，则results是一个对象
// // 通过affectedRows属性，判断是否插入成功
// db.query(sqlStr,[user.username,user.password],(err,results) => {
//     if(err){
//         return console.log(err.message);
//     }
//     if(results.affectedRows === 1){
//         console.log('插入成功');
//     }
// });

// // 快速插入语句
// const user = {username:'bat-man',password:'leihao223'};
// const sqlStr = 'insert into users set ?';
// db.query(sqlStr,user,(err,results) => {
//     if(err){
//         return console.log(err.message);
//     }
//     if(results.affectedRows === 1){
//         console.log('插入成功');
//     }
// });

// //演示如何更新用户信息
// const user = {id:6,username:'sheit-man',password:'sheit123'};
// // 定义SQL语句
// // affectedRows用来查询结果行数，可以用于更新删除添加操作
// const sqlStr = 'update users set username=?,password=? where id = ?';
// db.query(sqlStr,[user.username,user.password,user.id],(err,results) => {
//     if(err){
//         return console.log(err.message);
//     }
//     if(results.affectedRows === 1){
//         console.log('更新成功');
//     }
// })

// // 更新用户的便捷方式
// const user = {id:5,username:'aaaa',password:'0000'};
// // 定义SQL语句
// const sqlStr = 'update users set ? where id=?';
// // 执行SQL语句
// db.query(sqlStr,[user,user.id],(err,results) => {
//     if(err){
//         return console.log(err.message);
//     }
//     if(results.affectedRows === 1){
//         console.log('修改成功');
//     }
// })

// 删除id为5的用户
// 最好不要删除，可以更新status属性封掉该用户
const sqlStr = 'Delete from users where id=?';
db.query(sqlStr,5,(err,results) => {
    if(err){
        return console.log(err.message);
    }
    if(results.affectedRows === 1){
        console.log('删除成功');
    }
})