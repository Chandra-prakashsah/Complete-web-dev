import React, { useContext } from 'react'
import links from '../../utils/link'
import { NavLink } from 'react-router-dom'
import { DashboardContext } from '../../utils/dashboard-context';

const NavLinks = ({ isBigSidebar }: { isBigSidebar: boolean }) => {
  const {toggleSidebar}=useContext(DashboardContext);
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link
        return (
          <NavLink key={text} to={path} className='nav-link'
          onClick={isBigSidebar?null:toggleSidebar}
          >
            <span className="icon">
              {icon}
            </span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks