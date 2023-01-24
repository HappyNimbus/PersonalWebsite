import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span> Dont have an account? Sign up!
          <Link to = "/register" > Register </Link>
        </span>
      </form> 
    </div>
  )
}

export default Login
