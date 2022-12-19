const express = require("express");
const app = express();

const reqFilter=(req,res,next)=>{
    console.log("req",req)
    if(!req.query.age){
        res.send("Please provide age");
    }else if(req.query.age>18){
      res.send("You are Adult now")
    }else{
        next();
    }
    
}

app.use(reqFilter);

app.get('/users',(req,res)=>{
    res.send("Your in User page");
})
app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(2000,()=>{
    console.log("server is running");
});