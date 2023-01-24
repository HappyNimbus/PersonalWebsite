import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="temail" placeholder='email' />
        <input required type="password" placeholder='password' />
        <button>Sign Up</button>
        <p>This is an error!</p>
        <span> Already have an account? Log in!
          <Link to = "/login" > Log In </Link>
        </span>
      </form> 
    </div>
  )
}

export default Register