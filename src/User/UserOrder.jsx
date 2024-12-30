import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {  OrderView } from '../Service/AllApi';
import { baseURL } from '../Service/baseUrl';
import axios from 'axios';

function UserOrder() {
  const [Orders, setOrders] = useState([])
  console.log(Orders);

  const UserProducts = async()=>{
    const token = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const res = await OrderView(reqheader)
    setOrders(res.data)
    console.log(res)
  }

  useEffect(()=>{
    UserProducts()
  },[])

const paymentSlip = async(id)=>{
  const token = sessionStorage.getItem('token')

try {
  
    const invoice = await axios.post(`${baseURL}/pdfgen`,{id},
       {responseType:"blob",headers:{"Content-Type":"application/json",'Authorization':`Bearer ${token}`}})
  
      const url = window.URL.createObjectURL(new Blob([invoice.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download',`receipt-${id}.pdf`)
      document.body.appendChild(link)
      link.click()
} catch (error) {
  console.error("Error generating PDF&quot", error);
}


}

  return (
    <>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Order Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { Orders?.map((items,index)=>(
          <tr key={index}>
            <td>{index+1}</td>  
            <td>{items.productID.productname}</td>
            <td><img 
            src={`${baseURL}/uploads/${items.productID.image}`} 
            alt="" /></td>
            <td>{items.Status}</td>
            <td>${items.Amount/100}</td>
            <td><button className='btn btn-dark'><i class="fa-solid fa-download" onClick={()=>paymentSlip(items._id)}></i></button></td>
          </tr>
        ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default UserOrder