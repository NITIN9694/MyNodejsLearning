const express = require("express");
const app = express();
const path = require("path");

app.set('view engine','ejs');
app.get('/profile',(_,resp)=>{
    resp.render('profile');
})

app.listen(2000,()=>{
    console.log("Server running");
   
});