import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnAuthenticatedError } from "../errors/customError.js";
import { createJWT } from "../utils/tokenUtils.js";

const register = async (req, res) => {
  const isFirstuser = await userModel.countDocuments() == 0;
  req.body.role = isFirstuser ? 'admin' : 'user';
  
  req.body.password = await hashPassword(req.body.password);
  const user = await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg:"User created" });
}

const login = async (req, res) => {
  const {email,password}=req.body;
  const user=await userModel.findOne({email:email});
  const isValidate=user && (await comparePassword(password,user.password))
  if(!isValidate){
     throw new UnAuthenticatedError("Invalid credentials!")
  }
  const token= createJWT({userId:user._id,role:user.role});
  const oneDay=1000*60*60*24;
  res.cookie('token',token,{
    httpOnly:true,
    expires:new Date(Date.now()+oneDay),
    secure:process.env.NODE_ENV==="production"
  })
  res.status(StatusCodes.OK).json({msg:"logged in successfuly!"});

}

export { register, login };