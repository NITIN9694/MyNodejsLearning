const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hello world");
    
});

server.listen(3000);