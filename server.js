const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
 const connect= require ('./connect');
const userRouter = require('./routes/user');
 
const app= express();
app.use(express.json)
connect();
app.use('/user',userRouter)
// to read the body

// app.get('/',(req,res)=res.send('test'));
app.listen(process.env.port ,() => 
console.log(`server is listening on port ${process.env.port}`));