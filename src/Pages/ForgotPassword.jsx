import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PasswordChange } from '../Service/AllApi'

function ForgotPassword() {
  const [email, Setemail] = useState('')

  const handlePassword = async(e)=>{
    e.preventDefault()

    const reqbody = {
      email
    }
    const res = await PasswordChange(reqbody)
    console.log(res);
  }
  return (
    <>
    
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Forgot Password</title>
  <div style={{maxWidth: 400, margin: '20px auto', padding: 10, border: '1px solid #ccc', borderRadius: 8}}>
    <h1 style={{textAlign: 'center'}}>Forgot Password</h1>
    <p style={{textAlign: 'center'}}>
      Enter your email address, and we'll send you a link to reset your password.
    </p>
    <form  style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required style={{padding: 8, border: '1px solid #ccc', borderRadius: 4}} onChange={(e)=>Setemail(e.target.value )} />
      <button type="submit" style={{padding: 10, backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'}} onClick={(e)=>handlePassword(e)}>
        Send Reset Link
      </button>
    </form>
    <div style={{textAlign: 'center', marginTop: 10}}>
      <Link to={'/login'} style={{color: '#007bff', textDecoration: 'none'}}>Back to Login</Link>
    </div>
  </div>
    </div>

    </>
  )
}

export default ForgotPassword