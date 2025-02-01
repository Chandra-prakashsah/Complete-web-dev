import { toast } from "react-toastify";
import { AppDispatch } from "../../../../common/store";
import { request, userList,error, success } from "../reducers";
import {userServices} from "../services";
const getUsers=()=>async(dispatch:AppDispatch):Promise<any>=>{
    let response={};
    dispatch(request());
    try {
        const res=await userServices.getUsers();
        response={
            status:true,
            data:res.data.data
        }
        dispatch(userList(response));
        return response;
    } catch (err) {
        response={
            status:false,
            data:[]
        }
        dispatch(error())
        toast.error("Something went wrong!");
        return response;
    }
}

const createUser=(payload:any)=>async(dispatch:AppDispatch):Promise<any>=>{
    let response={};
    dispatch(request());
    try {
        const res=await userServices.createUser(payload);
        response={
            status:true,
            data:res.data.message
        }
        if(res.data){
            dispatch(success())
        }
        return response;
    }catch (err:any) {
        dispatch(error());
        response={
            status:false,
            data:err.response.data.message
        }
        return response;
    }
}
const updateUser=(id:any,payload:any)=>async(dispatch:AppDispatch):Promise<any>=>{
    let response={};
    dispatch(request());
    try {
        const res=await userServices.updateUser(id,payload);
        response={
            status:true,
            data:res.data.message
        }
        if(res.data){
            dispatch(success())
        }
        return response;
    }catch (err:any) {
        dispatch(error());
        response={
            status:false,
            data:"Something went wrong!"
        }
        return response;
    }
}

const deleteUser=(id:any)=>async(dispatch:AppDispatch):Promise<any>=>{
    let response={};
    dispatch(request());
    try {
        const res=await userServices.deleteUser(id);
        response={
            status:true,
            data:res.data.message
        }
        if(res.data){
            dispatch(success())
        }
        return response;
    }catch (err:any) {
        dispatch(error());
        response={
            status:false,
            data:"Something went wrong!"
        }
        return response;
    }
}
export const userActions={getUsers,createUser,updateUser,deleteUser};