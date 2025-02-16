import React from 'react'
import Wrapper from '../../assets/wrappers/LandingPage'
import { Icons } from '../../assets/images'
import { Link } from 'react-router-dom'
import {Logo} from '../../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>I'm baby meh synth chia lo-fi seitan, mixtape swag shaman tote bag vaporware health goth. Tacos kinfolk celiac salvia messenger bag, bitters sartorial gluten-free narwhal vice lo-fi.</p>
          <Link to={'/login'} className='btn register-link'>login</Link>
          <Link to={'/register'} className='btn register-link'>register</Link>
        </div>
        <img src={Icons.main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing