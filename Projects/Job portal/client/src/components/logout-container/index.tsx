import React, { useState } from 'react'
import  Wrapper from '../../assets/wrappers/LogoutContainer'
import {DashboardContext} from '../../utils/dashboard-context'
import { useContext } from 'react'
import {FaUserCircle,FaCaretDown} from 'react-icons/fa'
const LogoutContainer = () => {
    const [showLogout,setShowLogout]=useState(false);
    const {logoutUser,user} =useContext(DashboardContext);
  return (
    <Wrapper>
        <button type='button' onClick={()=>setShowLogout(!showLogout)} className='btn logout-btn' >
            <FaUserCircle/>
            {user?.name||''}
            <FaCaretDown/>
        </button>
        <div className={showLogout?'dropdown show-dropdown':'dropdown'}>
            <button className='dropdown-btn' onClick={logoutUser} type='button'>Logout</button>
        </div>
    </Wrapper>
  )
}

export default LogoutContainer