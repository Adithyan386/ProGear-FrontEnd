import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ResetPassword } from '../Service/AllApi'

function PasswordChange() {
  const {token} = useParams()
  const [message, setmessage] = useState('')
  const [passwords, setpasswords] = useState('')
  const [Conpasswords, setConpasswords] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const decodeToken = jwtDecode(token)

    const currentTime = Date.now()/1000

    if(currentTime>decodeToken.exp){
      setmessage('Link has Been Expried Try Again....!')

      setTimeout(()=>{
        navigate('/ResetPass')
      },3000)
    }
  },[token])

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
      if(passwords !== Conpasswords){
        setmessage('Passwrod Not Matching')
        return
      }
  
      const reqbody = {
        token,password:passwords
      }
  
      const response = await ResetPassword(reqbody)
      console.log(response)
  
      if(response.status === 200){
        setmessage('Password Updated SucessFully')
        setTimeout(()=>{
          navigate('/login')
        },3000)
      }else{
        setmessage('Failed to Update Password..Try Again Later')
      }
    } catch (error) {
      console.log(error);
      setmessage('An Error Occured..Please Try Again Later')
    }
  }

  return (
    <>
{
  
    message?
    <p>{message}</p>
    :
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Change Password</title>
  <div style={{maxWidth: 400, margin: '20px auto', padding: 10, border: '1px solid #ccc', borderRadius: 8}}>
    <h1 style={{textAlign: 'center'}}>Change Password</h1>
    <p style={{textAlign: 'center'}}>Update your password to keep your account secure.</p>
    <form style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <label htmlFor="new-password">New Password:</label>
      <input type="password" id="new-password" name="new-password" placeholder="Enter new password" required style={{padding: 8, border: '1px solid #ccc', borderRadius: 4}}
      onChange={(e)=>setpasswords(e.target.value)}
       />
      <label htmlFor="confirm-password">Confirm New Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm new password" required style={{padding: 8, border: '1px solid #ccc', borderRadius: 4}}  onChange={(e)=>setConpasswords(e.target.value)}

 />
      <button type="submit" style={{padding: 10, backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'}}
      onClick={handleSubmit}>
        Update Password
      </button>
    </form>
  </div>
</div>
}

    </>
  )
}

export default PasswordChange