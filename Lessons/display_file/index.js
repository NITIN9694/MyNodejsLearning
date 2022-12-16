const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname,"display_file");

// for( i=0;i<5;i++){
//    fs.writeFileSync(dirpath+'\hello'+ i+".txt",i+" is working");
// }

fs.readdir(dirpath,(err,files)=>{
  files.forEach((item)=>{
    console.log("file name is ",item);
  })
})