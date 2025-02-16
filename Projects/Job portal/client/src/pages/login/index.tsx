import React from 'react'
import Wraper from '../../assets/wrappers/RegisterAndLoginPage'
import { Logo,FormRow } from '../../components';
import { Link } from 'react-router-dom';
const Login = () => {

  const onChange = (e: any) => {}
  return (
   <Wraper>
    <form action="" className='form'>
        <Logo/>
        <h4>Login</h4>
        <FormRow
         type='text'
         name='email'
         labelText='Email'
         onChange={onChange}
         defaultValue='m1m9e@example.com'
        />
        <FormRow
         type='password'
         name='password'
         labelText='Password'
         onChange={onChange}
         defaultValue='password'
        />
        <button type="button" className='btn btn-block'>Login</button>
        <button type="button" className='btn btn-block'>Explore the app</button>
        <p>Not a member yet? <Link to="/register" className='member-btn'>Register</Link></p>
    </form>
   </Wraper>
  )
}

export default Login