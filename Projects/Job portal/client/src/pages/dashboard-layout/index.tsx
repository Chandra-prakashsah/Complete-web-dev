import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../../components'
import { DashboardContext } from '../../utils/dashboard-context'
import { getDefaultDarkTheme } from '../../App'

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(getDefaultDarkTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;

    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const logoutUser = () => { 
    console.log('logout user')
  }
  const user = { name: "john", role: "admin" }
  return (
    <DashboardContext.Provider value={{ showSidebar, toggleSidebar, isDarkTheme, toggleDarkTheme, logoutUser, user }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export default DashboardLayout