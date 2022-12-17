let a = 10;
let b = 0;

setTimeout(()=>{
  b= 20;
},2000)

console.log(a+b);

/*Its draw back of asynchronous beause  its  excutes the program without waiting
 and our functon not excute
*/

//Sloving that async problem

let wattingData  = new  Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove(30)
    },2000)
})

wattingData.then((data)=>{
    b= data;
    console.log(a+b);
})