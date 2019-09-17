const express = require('express');
const cookieParser=require('cookie-parser')
const app =express();
//中间件调用,下面这两行代码,实现了给req身上加了一个body属性
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//中间件调用,下面这行代码,实现了给req身上加了一个cookies属性
app.use(cookieParser());
//中间件调用
app.use(express.static('public')); 
app.get('/',(req,res)=>{
    console.log(req.query);
    res.send('hello express')
});
app.post('/handleLogin',(req,res)=>{
    console.log(req.body);
    res.send('hello body')
});
app.get('/setCookie',(req,res)=>{
    res.cookie('username','zhangsan',{
        maxAge:1000*60*10
    });
    res.send('cookie')
});
app.get('/getcookie',(req,res)=>{
    console.log(req.cookies);
    res.send('cookie获取成功')
});
app.get('/hello/:id',(req,res)=>{
    console.log(req.params);
    res.send('来了');
});
app.get("/world/:name/:age",(req,res)=>{
    console.log(req.params); 
    res.send('你好');
})
app.listen(3000);
