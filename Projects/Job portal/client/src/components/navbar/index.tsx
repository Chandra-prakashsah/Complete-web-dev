import React, { useContext } from 'react'
import Wrapper from '../../assets/wrappers/Navbar'
import {FaAlignLeft} from 'react-icons/fa'
import Logo from '../logo'
import { DashboardContext } from '../../utils/dashboard-context'
import LogoutContainer from '../logout-container'
import ThemeToggle from '../theme-toggle'
const Navbar = () => {
    const {isDarkTheme,toggleDarkTheme,showSidebar,toggleSidebar,logoutUser}=useContext(DashboardContext);
  return (
    <Wrapper>
        <div className="nav-center">
           <button type='button' className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignLeft/>
            </button> 
            <div>
                <Logo/>
                <h4 className="logo-text">dashboard</h4>    
            </div>   
            <div className="btn-container">
                <ThemeToggle/>
                <LogoutContainer/>
            </div>    
        </div>        
    </Wrapper>
  )
}

export default Navbar