import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { OrderView } from '../Service/AllApi'

function TrackOrder() {
  const [Track, setTrack] = useState([])

  const OrderTrack = async()=>{
      const token = sessionStorage.getItem('token')
  
      const reqheader = {
        'Authorization':`Bearer ${token}`,
        "Content-Type":"application/json"
      }
  
      const res = await OrderView(reqheader)
      setTrack(res.data)
      console.log(res)
    }
    useEffect(()=>{
      OrderTrack()
    },[])
    console.log(Track);
  return (
    <>
    <Table bg="" data-bs-theme="" responsive="sm">
        <thead>
          <tr>
            <th>Track ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Shipement Status</th>
            <th>Arrival Date</th>
          </tr>
        </thead>
        <tbody>
           {
            Track?.map((item, index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{item.productID}</td>
              {/* <td>{item.userID.firstname}</td>
              <td>{item.userID.email}</td> */}
              <td>Arrived</td>
            </tr>
            ))

          } 
         
        </tbody>
      </Table>

    </>
  )
}

export default TrackOrder