import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'


const App = () => {
  return (
    <RouterProvider  router={routes}/>
  )
}

export default App


export const getDefaultDarkTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme
}
getDefaultDarkTheme()