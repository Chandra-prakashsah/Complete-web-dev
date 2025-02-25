import React from 'react'
import Wraper from '../../assets/wrappers/RegisterAndLoginPage'
import { Logo,FormRow } from '../../components';
import { Link } from 'react-router-dom';
const Register = () => {

  const onChange = (e: any) => {}
  return (
   <Wraper>
    <form action="" className='form'>
        <Logo/>
        <h4>Register</h4>
        <FormRow
         type='text'
         name='name'
         labelText='Name'
         onChange={onChange}
         defaultValue='Chandra'
        />
        <FormRow
         type='text'
         name='lastName'
         labelText='Last Name'
         onChange={onChange}
         defaultValue='Sah'
        />
        <FormRow
         type='text'
         name='location'
         labelText='Location'
         onChange={onChange}
         defaultValue='Chandigarh'
        />
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
        <button type="submit" className='btn btn-block'>submit</button>
        <p>Already a member? <Link to="/login" className='member-btn'>Login</Link></p>
    </form>
   </Wraper>
  )
}

export default Register