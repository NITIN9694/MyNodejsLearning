const express = require("express");
const path = require("path");
const app = express();


const publicPath = path.join(__dirname,'html');

app.use(express.static(publicPath));


app.get("/check",(req,res)=>{
    res.send("Its Working");
});

app.listen(2000,()=>{
    console.log("server running")
});