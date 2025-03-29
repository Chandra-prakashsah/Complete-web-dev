import React, { useContext } from 'react'
import Wrapper from '../../assets/wrappers/BigSidebar'
import { DashboardContext } from '../../utils/dashboard-context'
import Logo from '../logo';
import NavLinks from '../nav-links';
const BigSidebar = () => {
  const {showSidebar}=useContext(DashboardContext);
  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar