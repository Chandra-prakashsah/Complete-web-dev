const express=require('express');
const mongoose=require('mongoose');
const userRoutes = require('./app/routes/user.routes');
require('dotenv').config();
const app=express();
app.use(express.json());
const port=process.env.PORT;

app.use("/api",userRoutes);

//connect to db
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("db connected");
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
})