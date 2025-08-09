import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import jobRouter from './src/routes/job.route.js';
import errorHandler from './src/middlewares/errorHandler.js';
import authRouter from './src/routes/authRouter.js';
import userRouter from './src/routes/userRouter.js'
import { authenticateUser } from './src/middlewares/authMiddleware.js';
const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.get('/api/v1/test',(req,res)=>{
    res.json({msg:"test app"})
})
app.use('/api/v1/jobs',authenticateUser,jobRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',authenticateUser,userRouter);

//handle 404

app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});

//server error middleware
app.use(errorHandler);

//connect to db

try { 
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to db');
    //start server
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })

} catch (error) {
    console.log(error);
    process.exit(1);
}

