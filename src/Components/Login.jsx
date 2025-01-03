import React, { useContext, useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleSgin, login } from '../Service/AllApi';
import { LoginContext } from '../Context';
function Login() {

  const {setLoginRespones} = useContext(LoginContext)
  
  const navigate = useNavigate()
  const [user,setuser] = useState({
    email:'',
    password:''
  })

  const handlelogin = async(e)=>{
    e.preventDefault()
    const{email,password} = user
    if(!email || !password){
      alert("Fill The Form")
    }else{
      const response = await login(user)

      console.log(response);
          if(response.status === 200){
            setLoginRespones(response)
            sessionStorage.setItem("user",JSON.stringify(response.data.prevoisusers))
            sessionStorage.setItem("token",response.data.token)

            if(response.data.prevoisusers.role===1){
              navigate('/admin')
            }else{
              navigate('/')
            }
          } else if(response.status === 404){
            alert(response.response.data.message)
          }else{
            alert('Server Error')
            console.log(response);
          }
    }


  }

  const GoogleWithSgin = async(token)=>{
    const reqbody = {
      GoogleToken:token
    }

    const response  = await GoogleSgin(reqbody)

    if(response.status === 200){
      setLoginRespones(response)
      sessionStorage.setItem('user', JSON.stringify(response.data.User))
      sessionStorage.setItem('token',response.data.token)
      alert('Google Sgin In SucessFully')
      navigate('/')
    }else{
      alert('Server Error')
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <form id="fo1" className="shadow rounded p-4 w-100" style={{ maxWidth: '400px' }}>
          <h3 className="text-center mb-4" id="head" style={{color:'white'}}>LOGIN</h3>
          
          {/* Email Input */}
          <div className="form-outline mb-4">
            <input 
              type="email" 
              id="form2Example1" 
              className="form-control" 
              placeholder="Enter Your Mail" 
              onChange={(e)=>setuser({...user,email:e.target.value})}
            />
          </div>
          
          {/* Password Input */}
          <div className="form-outline mb-4">
            <input 
              type="password" 
              id="form2Example2" 
              className="form-control" 
              placeholder="Enter Password" 
              onChange={(e)=>setuser({...user,password:e.target.value})}
            />
          </div>
          
          {/* Sign In Button */}
          <button 
            data-mdb-ripple-init 
            type="button" 
            id="but" 
            className="btn btn-primary btn-block mb-4 w-100"
            onClick={(e)=>handlelogin(e)}
          >
            Sign in
          </button>
          
          {/* Forgot Password Link */}
          <div className="mb-4 text-center">
            <Link to={'/forPass'} style={{textDecoration:'none', color:'white'}}>Forgot password?</Link>
          </div>
          
          {/* Google Login */}
          <div className="goo rounded d-flex justify-content-center mb-4">
            <GoogleLogin 
              onSuccess={(credentialResponse) => {
                GoogleWithSgin(credentialResponse.credential)
              }}
              onError={() => {
                console.log('Login Failed');
              }} 
            />
          </div>
          
          {/* Register Link */}
          <div className="text-center">
            <p id="pl" style={{textDecoration:'none', color:'white'}}>
              Not a member?{' '}
              <Link to="/sign" style={{ textDecoration: 'none', color: 'white' }}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
