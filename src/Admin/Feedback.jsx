import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AdminFeedbackView } from '../Service/AllApi'

function Feedback() {
  const [adminfeed,setadminfeed]  = useState([])

  const feedbacks = async()=>{
    const token = sessionStorage.getItem('token')


    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await AdminFeedbackView(reqheader)
    setadminfeed(response.data)
    console.log(response);
  }
  useEffect(()=>{
    feedbacks()
  },[])
  return (
    <>
     <Table bg="" data-bs-theme="" responsive="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {
            adminfeed?.map((feeds,index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{feeds.username}</td>
              <td>{feeds.email}</td>
              <td>{feeds.review}</td>
            </tr>
            ))
          }
            
        </tbody>
      </Table>

    </>
  )
}

export default Feedback