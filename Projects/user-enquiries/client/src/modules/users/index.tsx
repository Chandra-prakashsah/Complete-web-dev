import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
import UserListTable from './user-list-table'
import CreateUserForm from './create-user-form'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from './store/actions'
import { RootState } from '../../common/store'
import { ToastContainer } from 'react-toastify'

const User = () => {
    const rdxDispatch=useDispatch();
    const {loading,userList}=useSelector((state:RootState)=>state.user);
    const [formData,setFormData]=useState({});
    const getUserList=()=>{
        rdxDispatch(userActions.getUsers());
    }
    const updateUserHandle=(item:any)=>{
        setFormData(item);
    }
    useEffect(()=>{
      getUserList();
    },[])

  return (
    <div className='d-flex h-100 m-3'>
      <Row className='col-12'>
        <Col className='col-3'>
           <CreateUserForm updateUserData={formData}/>
        </Col>
        <Col className='col-9'>
          <UserListTable data={userList} loading={loading} updateUserHandle={updateUserHandle}/>
        </Col>
      </Row>
    </div>
  )
}

export default User