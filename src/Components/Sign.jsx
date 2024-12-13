import React, { useState } from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { userRegister } from '../Service/AllApi';
function Sign() {
  const [user, setuser] = useState({fname:'',sname:'',email:'',password:''})
  const handleRegister = async(e)=>{
      e.preventDefault()
      const{fname,sname,email,password} = user
      if(!fname || !sname || !email || !password){
        alert("fill the form")
      }else{
        const res = await userRegister(user)
        console.log(res);
      }
  }
  return (
    <>
    <div className='container'>
        <form className='mt-5' id='Form-Sign'>
        <h3  className='text-center' id='heads'>SIGN IN</h3>
        <div class="mb-4" id='Names'>
        <div class="">
        <div data-mdb-input-init class="form-outline d-flex justify-content-center mt-3">
        <input type="text" id="form3Example1" placeholder='First Name' class="form-control w-25" onChange={(e) => setuser({ ...user, fname: e.target.value })} />
          </div>
        </div>
        <div>
          <div data-mdb-input-init class="form-outline d-flex justify-content-center mt-3">
            <input type="text" id="form3Example2" placeholder='Last Name' class="form-control w-25" onChange={(e) => setuser({ ...user, sname: e.target.value })} />
          </div>
        </div>
      </div>
    
      <div data-mdb-input-init class="form-outline d-flex justify-content-center mb-4">
        <input type="email" id="form3Example3" placeholder='Email Address' class="form-control w-25 " onChange={(e) => setuser({ ...user, email: e.target.value })} />
      </div>
    
      <div data-mdb-input-init class="form-outline d-flex justify-content-center mb-4">
        <input type="password" id="form3Example4" placeholder='Password' class="form-control w-25"  onChange={(e) => setuser({ ...user, password: e.target.value })}/>
      </div>
    
      <button data-mdb-ripple-init type="button" id='button' class="btn btn-dark btn-block mb-4 w-25" onClick={(e)=>handleRegister(e)}>Sign up</button>
      <p id='pl'>Have a Accout? <Link  to={'/login'} style={{textDecoration:'none', color:'white'}}>Login</Link></p>

    
      <div class="text-center">
        <p id='pp'>or sign up with:</p>
        <div className="goo rounded d-flex justify-content-center mb-4">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log(decoded);
              }}
              onError={() => {
                console.log('Login Failed');
              }} 
            />
          </div>
    </div>
    </form>
</div>
    </>
  )
}

export default Sign