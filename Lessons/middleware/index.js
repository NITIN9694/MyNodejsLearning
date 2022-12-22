const express = require("express");
const app = express();
const requestFilter  = require('./middleware');
const router = express.Router();

router.use(requestFilter);
app.use('/',router);


router.get('/users',(req,res)=>{
    res.send("Your in User page");
})

app.get('/',(req,res)=>{
    res.send("Welcome");
})

router.get('/about',(req,res)=>{
    res.send("about");
})

app.listen(2000,()=>{
    console.log("server is running");
});