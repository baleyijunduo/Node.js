document.querySelector('#btnGET').addEventListener('click',function(){
    var urlg = 'http://127.0.0.1/api/get';
    var paramsObj = {name:'zs',age:20};
    axios({
        method:'get',
        url:urlg,
        params:paramsObj
    }).then((res) => {
        console.log(res.data);
    })
})

document.querySelector('#btnPOST').addEventListener('click',() => {
    var urlp = 'http://127.0.0.1/api/post';
    var paramsObj = {bookname:'水浒传',author:'施耐庵'};
    axios({
        method:'post',
        url:urlp,
        params:paramsObj
    }).then((res) => {
        console.log(res);
    })
})