const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const userRouter = require('./app/routes/user.enquiries.route');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;
const dbUrl = process.env.DBURL;


app.use('/api',userRouter);
//connect to db
mongoose.connect(dbUrl).then(() => {
    console.log("db connected");
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})
