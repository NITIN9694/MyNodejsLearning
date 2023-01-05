const express = require('express');
const  app  = express();
const dbConnect  = require('./db');


//read data
dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.warn(data);
    })
})

const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insertOne({
        name:"nitin",
        lastname:"JHa",
        price:"320"
    });
    if(result.acknowledged){
        console.log('data inserted');

    }
} 
insert();
app.listen(4000,()=>{
    console.log("server is running");
});