const fs = require('fs');

const input = process.argv;
if(input[2]=="add"){
    fs.writeFileSync(input[3],input[2]);
}else if("remove"){
   fs.unlinkSync(input[3]);
}else{
    console.log("invalid input");
}