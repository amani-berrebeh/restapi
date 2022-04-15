const express = require('express');
// import modele
const user= require ('../models/user')
const userRouter = express.Router();
// import the function for get all users
const { getAllUsers } = require('../controllers/user');

const {addUser}= require('../controllers/user')

userRouter.get("/getall",getAllUsers)
userRouter.put("/adduser",addUser)
module.exports= userRouter
