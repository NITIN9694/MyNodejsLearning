const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname,'html');

app.get('/',(_,resp)=>{
    resp.sendFile(`${publicPath/about.html}`)
})

app.listen(2000,()=>{
    console.log("Server running");
    console.log(publicPath)
});