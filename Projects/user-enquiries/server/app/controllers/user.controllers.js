const userEnquiriesModel = require('../models/userEnquiries.model');

const getUser = async (req, res) => {
    const data = await userEnquiriesModel.find();
    if (data) {
        res.status(200).json({
            message: 'user data fetched successfully',
            data: data
        })
    } else {
        res.status(404).json({
            message: 'user data not found',
            data: []
        })
    }
} 

const createUser = async (req, res) => {
    const { name, email, phone, message } = req.body;
    const obj={name,email,phone,message};
    const enquiries=new userEnquiriesModel(obj);
    const data = await enquiries.save().then((data)=>{
        res.status(200).json({
            message: 'user created successfully',
        })
    }).catch((err)=>{
        res.status(404).json({
            message: "record already exist",
            err
        })
    })
}


const updateUser=async(req,res)=>{
    const id=req.params.id;
    const {name,email,phone,message}=req.body;
    const data=await userEnquiriesModel.updateOne({_id:id},{name,email,phone,message});
    if(data){
        res.status(200).json({
            message: 'user data updated successfully',
        })
    }else{
        res.status(404).json({
            message: 'user data not updated',
        })
    }
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const data=await userEnquiriesModel.findOneAndDelete({_id:id});
    if(data){
        res.status(200).json({
            message: 'user deleted successfully',
        })
    }else{
        res.status(404).json({
            message: 'user data not deleted',
        })
    }
}

module.exports={getUser,createUser,updateUser,deleteUser};