import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='bg-danger'>
      <Header />
      <Footer/>
    </div>
  )
}

export default App