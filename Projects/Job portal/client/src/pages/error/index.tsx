import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/ErrorPage'
import { Icons } from '../../assets/images'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={Icons.notFound} alt="not found" />
          <h1>ohh! page not found</h1>
          <p>we can't seem to find the page you're looking for</p>
          <Link to={'/dashboard'}>back to home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h1>404 page not found</h1>
      <Link to={'/'}>back to home</Link>
    </Wrapper>
  )
}

export default Error