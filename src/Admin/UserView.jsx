import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAdminUser } from '../Service/AllApi'

function UserView() {
  const [viewUser, setviewUser] = useState([])

  const UserViewadnmin = async()=>{
    const token = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await getAdminUser(reqheader)
    console.log(response);
    setviewUser(response.data)
  }
  useEffect(()=>{
    UserViewadnmin()
  },[])
  return (
    <>
        <Table bg="" data-bs-theme="" responsive="sm">
        <thead>
          <tr>
            <th>NO</th>
            <th>User ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>E-Mail</th>
          </tr>
        </thead>
        <tbody>
          {
            viewUser.map((user, index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{user._id}</td>
              <td>{user.firstname}</td>
              <td>{user.secondname}</td>
              <td>{user.email}</td>
            </tr>
  
            ))
          }
          
        </tbody>
      </Table>
    </>
  )
}

export default UserView