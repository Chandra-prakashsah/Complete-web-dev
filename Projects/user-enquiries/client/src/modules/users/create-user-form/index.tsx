import React, { useEffect, useState } from 'react'
import './index.scss'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/actions';
import { toast } from 'react-toastify';
import { RootState } from '../../../common/store';
import Loader from '../../../components/loader';

const CreateUserForm = ({updateUserData}:any) => {
  const {name,email,phone,message,_id}=updateUserData;
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  });
  const [userId,setUserId]=useState('');
  const dispatch=useDispatch();
  const {loading}=useSelector((state:RootState)=>state.user);

  const handleChange=(e:any)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handleCreateUser=()=>{
    dispatch(userActions.createUser(formData)).then((res:any)=>{
      if(res.status){
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:''
        })
        toast.success(res.data);
        dispatch(userActions.getUsers());
      }else{
        toast.error(res.data);
      }
    })
  }
  const handleUpdateUser=()=>{
    dispatch(userActions.updateUser(userId,formData)).then((res:any)=>{
      if(res.status){
        setFormData({
          name:'',
          email:'',
          phone:'',
          message:''
        })
        setUserId('');
        toast.success(res.data);
        dispatch(userActions.getUsers());
      }else{
        toast.error(res.data);
      }
    })
  }
  useEffect(()=>{
    if(name&&email&&phone&&message&&_id){
      setFormData({
        name:name,
        email:email,
        phone:phone,
        message:message
      });
      setUserId(_id);
    }
  },[updateUserData]);
  return (
    <div className='text-center h-100 p-5 border'>
        <h4 className='text-muted'>User Enquiries</h4>
          <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Enter your name"
                required
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                required
                value={formData.email}
                name='email'
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
          <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="7896541230"
                required
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom">Phone</label>
            </Form.Floating>
          <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="textarea"
                placeholder="Type messaage..."
                required
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="floatingPasswordCustom">Message</label>
          </Form.Floating>
          <Button variant="primary w-100 mt-3" onClick={userId? handleUpdateUser:handleCreateUser} disabled={formData.name&&formData.email&&formData.phone&&formData.message?false:true}>
              {userId?'Update':'Create'}
              {loading &&<Loader/>}
          </Button>
    </div>
  )
}

export default CreateUserForm