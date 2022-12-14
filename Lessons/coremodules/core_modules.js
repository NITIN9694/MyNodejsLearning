/*Global Module which we dont have to import called Global Module*?
/*that moudle we have to import called non global module */

//Global ex->
console.log("Global");

//Non Global
const fs = require('fs');
fs.writeFileSync("hello.txt","its working");