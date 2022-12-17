const express = require("express");

const app = express();

app.get("/check",(req,res)=>{
    res.send("Its Working");
});

app.listen(2000,()=>{
    console.log("server running")
});