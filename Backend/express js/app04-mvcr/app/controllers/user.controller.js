const enquiryModel=require('../models/user.model');

const getUser=async(req,res)=>{
   enquiryModel.find().then((data)=>{
       res.status(200).json({
           status:200,
           message:"success",
           data
       })
   }) 
}

const getUserById=async(req,res)=>{
    const id=req.params.id;
    const data=await enquiryModel.findById(id);
    if(data){
        res.status(200).json({
            status:200,
            message:"success",
            data
        })
    }else{
        res.status(404).json({
            status:404,
            message:"not found"
        })
    }
}

const createUser=(req,res)=>{
    const {name,email,phone,message}=req.body;
    const newEnquiry=new enquiryModel({
        name,
        email,
        phone,
        message
    })

    newEnquiry.save().then((data)=>{
        res.send({
            status:200,
            message:"data saved",
            data
        })
    }).catch((err)=>{
        res.send({
            status:500,
            message:"error",
            err
        })
    })
}

const updateUser=(req,res)=>{
    const {name,email,phone,message}=req.body;
    const id=req.params.id;
    enquiryModel.updateOne({_id:id},{name,email,phone,message}).then((data)=>{
        res.send({
            status:200,
            message:"data updated",
        })
    }).catch((err)=>{
        res.send({
            status:500,
            message:"error",
            err
        })
    })
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const deleteRes=await enquiryModel.findOneAndDelete({_id:id});
    if(deleteRes){
        res.status(200).json({
            status:200,
            message:"data deleted",
        })
    }else{
        res.status(404).send({
            status:400,
            message:"data not found",
        })
    }
}
module.exports={getUser,getUserById,createUser,updateUser,deleteUser};