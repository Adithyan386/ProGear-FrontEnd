import React, { useEffect, useState } from 'react';
import './sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { otpResending, otpverification, userRegister } from '../Service/AllApi';

function Sign() {


  const [Steps, setSteps] = useState(sessionStorage.getItem('Steps') || 1)
  const [otp, setotp] = useState('')

  const Navigate = useNavigate()
  const [user, setUser] = useState({
    fname: '',
    sname: '',
    email: sessionStorage.getItem('email' || ''),
    password: '',
  });

  useEffect(()=>{
    sessionStorage.setItem('email',user.email)
    sessionStorage.setItem('Steps',Steps)
  },[user.email,Steps])

  const handleRegister = async (e) => {
    e.preventDefault();
    const { fname, sname, email, password } = user;
    if (!fname || !sname || !email || !password) {
      alert('Please fill in the form');
    } else {
      const res = await userRegister(user);
      if (res.status === 200) {
        alert('Registration Sucessful')
        setSteps(2)

      } else if (res.status === 400) {
        alert('Email Already Eixst')
      } else {
        alert('internal Server Error')
        console.log(res);
      }
    }
  }

  const handleotpsubmit = async(e)=>{
    e.preventDefault();
    const {email} = user
    if(!otp){
      alert('Enter Your OTP')
    }

    const reqbody={
      email,
      otp
    }

    const res = await otpverification(reqbody)
    console.log(res);
    if(res.status === 200){
      alert('Registeration Completed')
      Navigate('/login')
    }else if(res.status === 400){
      alert('Invaild OTP.....!')
    }else if(res.status === 410){
      alert('OTP Expired....!')
    }else{
      alert('Server Error')
    }
  }

  const handleresend = async()=>{
    const {email} = user

    const reqbody = {
      email,
      otp
    }
    const response = await otpResending(reqbody)
  }

 
  // console.log(otp);

  return (

     <>
     {
        Steps === 1 ?
  
        <div className="container py-5">
          <form className="mt-5 mx-auto" id="Form-Sign">
            <h3 className="text-center mb-4" id="heads">
              SIGN IN
            </h3>
  
            {/* Name Fields */}
            <div className="row mb-3" id="Names">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  id="form3Example1"
                  placeholder="First Name"
                  className="form-control"
                  onChange={(e) => setUser({ ...user, fname: e.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  id="form3Example2"
                  placeholder="Last Name"
                  className="form-control"
                  onChange={(e) => setUser({ ...user, sname: e.target.value })}
                />
              </div>
            </div>
  
            {/* Email Field */}
            <div className="mb-3">
              <input
                type="email"
                id="form3Example3"
                placeholder="Email Address"
                className="form-control"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-3">
              <input
                type="password"
                id="form3Example4"
                placeholder="Password"
                className="form-control"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center mb-4">
              <button
                type="button"
                id="button"
                className="btn btn-dark btn-block w-100"
                onClick={(e) => handleRegister(e)}
              >
                Sign up
              </button>
            </div>
  
            {/* Redirect to Login */}
            <p id="pl" className="text-center">
              Have an Account?{' '}
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </Link>
            </p>
  
            {/* Google Login */}
            <div className="text-center">
              <p id="pp">or sign up with:</p>
              <div className="goo d-flex justify-content-center mb-4">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse.credential);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        :
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <input
             type="text"
            placeholder="Enter OTP"
            className="form-control mb-3"
            onChange={(e)=>setotp(e.target.value)}
          />  
        <div className="text-center mb-4">
          <button
          type="button"
          id="button"
          className="btn btn-dark btn-block w-100"
          onClick={(e)=>handleotpsubmit(e)}
          >
          Submit
        </button>
        <p>Resend Your OTP <Link to={'#'} style={{textDecoration:'none',color:'black'}} onClick={handleresend}>RESEND OTP</Link></p>
      </div>
    </div>
  </div>
</div>

        
        }
     </>
            
  
    )
  }

export default Sign;
