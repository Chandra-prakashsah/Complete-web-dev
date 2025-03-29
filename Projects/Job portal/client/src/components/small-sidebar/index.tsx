import React, {  useContext } from 'react'
import Wrapper from '../../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { DashboardContext } from '../../utils/dashboard-context'
import Logo from '../logo'
import NavLinks from '../nav-links'

const SmallSidebar = () => {
  const {showSidebar,toggleSidebar}=useContext(DashboardContext);
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          <button className="close-btn" type='button' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar