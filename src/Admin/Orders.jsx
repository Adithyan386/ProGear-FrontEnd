import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Orderadminview } from '../Service/AllApi'
import { baseURL } from '../Service/baseUrl'

function Orders() {
  const [Admin, setAdmin] = useState([])

  const adminvieworder = async()=>{
    const token = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

        const res = await Orderadminview(reqheader)
        setAdmin(res.data)
        console.log(res)
  }
  useEffect(()=>{
    adminvieworder()
    },[])
    console.log(Admin);
  return (
    <>
      
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Order Status</th>
            <th>Pirce</th>
            <th>Image</th>
            {/* <th>Table heading</th> */}
          </tr>
        </thead>
        <tbody>
          {
            Admin?.map((item,index)=>(
              <tr key={index}>
              <td>{index+1}</td>  
              <td>{item.productID._id}</td>
              <td>{item.productname}</td>
              <td>{item.Status}</td>
              <td>{item.Amount/100}</td>
              <td><img 
                src={`${baseURL}/uploads/${item.productID.image}`} 
                alt="" /></td>
            </tr>
            ))
            }
        </tbody>
      </Table>
    </>
  )
}

export default Orders