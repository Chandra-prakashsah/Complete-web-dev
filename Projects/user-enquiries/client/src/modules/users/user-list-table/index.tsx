import React from 'react'
import './index.scss'
import { Spinner, Table } from 'react-bootstrap'
import { FaUserEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/actions'
import { toast } from 'react-toastify'
const UserListTable = ({data,loading,updateUserHandle}:any) => {
const rdxDispatch=useDispatch();
  const deleteHandler=(id:any)=>{
    console.log(id,"item");
    rdxDispatch(userActions.deleteUser(id)).then((res)=>{
      if(res.status){
         toast.success(res.data);
         rdxDispatch(userActions.getUsers());
      }else{
        toast.error(res.data);
      }
    })
  }
  return (
    <div className='text-center h-100 p-5 border'>
        <h4 className='text-muted'>User List</h4>
        {
          loading && <Spinner size='sm' title='...loading'/>
        }
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Edit</th> 
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {
          data?.map((item:any, index:number) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
              <td>
                <FaUserEdit className='cursor-pointer' size={20} onClick={()=>updateUserHandle(item)}/>
              </td>
              <td>
                <MdDelete className='cursor-pointer' color='red' size={20} onClick={()=>deleteHandler(item._id)}/>
              </td>
            </tr>
          ))
          }
        <tr>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default UserListTable