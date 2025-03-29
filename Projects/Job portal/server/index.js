import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import jobRouter from './src/routes/job.route.js';
import errorHandler from './src/middlewares/errorHandler.js';
import authRouter from './src/routes/authRouter.js';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}


app.use('/api/v1/jobs',jobRouter);
app.use('/api/v1/auth',authRouter);

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

