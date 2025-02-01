import axios from "axios"
import { userApiEndpoint } from "../../../../evornment"

const getUsers=()=>{
    return axios.get(userApiEndpoint);
}

const createUser=(payload:any)=>{
    return axios.post(userApiEndpoint,payload);
}
const updateUser=(id:any,payload:any)=>{
    return axios.put(`${userApiEndpoint}/${id}`,payload);
}
const deleteUser=(id:any)=>{
    return axios.delete(`${userApiEndpoint}/${id}`);
}

export const userServices={getUsers,createUser,updateUser,deleteUser};