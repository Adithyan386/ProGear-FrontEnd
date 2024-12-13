import React from 'react'
import { Table } from 'react-bootstrap'

function UserOrder() {
  return (
    <>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Product Type</th>
            <th>Order Status</th>
            <th>Payment Status</th>
            {/* <th>Table heading</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>  
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default UserOrder