
var express= require('express');
var path=require('path');
var app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/api',require('./route/api').route)
app.listen(2678,()=>console.log("Server started at 2678"));