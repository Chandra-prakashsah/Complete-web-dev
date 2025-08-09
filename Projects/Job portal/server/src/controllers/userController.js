import { StatusCodes} from 'http-status-codes'
import userModel from '../models/userModel.js';
import jobModel from '../models/job.model.js';

export const getCurrentUser=async(req,res)=>{
    const user=await userModel.findOne({_id:req.user.userId});
    res.status(StatusCodes.OK).json({user});
} 
export const getApplicationStats=async(req,res)=>{
    const user=await userModel.countDocuments();
    const job=await jobModel.countDocuments();
    res.status(StatusCodes.OK).json({user,job});
} 
export const updateUser=async(req,res)=>{
    const obj={...req.body};
    delete obj.password;
    const updatedUser=await userModel.findByIdAndUpdate(req.user.userId,res.body);
    res.status(StatusCodes.OK).json({msg:"user updated successfuly!"});
} 