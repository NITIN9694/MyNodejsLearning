const {MongoClient} = require("mongodb");
const express = require('express');
const  app  = express();

const client = new MongoClient("mongodb+srv://nitin:789199@cluster0.ycnxzib.mongodb.net/test");

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('test');
return db.collection('users');
}

module.exports = dbConnect;