const express=require('express');
const { getUser,createUser,deleteUser,updateUser,getUserById } = require('../controllers/user.controller');
const userRoutes=express.Router();


userRoutes.get('/user',getUser);
userRoutes.get('/user/:id',getUserById);
userRoutes.post('/user',createUser);
userRoutes.put('/user/:id',updateUser);
userRoutes.delete('/user/:id',deleteUser);

module.exports=userRoutes;