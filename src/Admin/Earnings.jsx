import React from 'react'
import { Table } from 'react-bootstrap'

function Earnings() {
  return (
    <>
      <Table bg="dark" data-bs-theme="dark" responsive="sm">
        <thead>
          <tr>
            <th>NO</th>
            <th>Total Selled Product</th>
            <th>Total Earnings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>45</td> 
            <td>50000</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Earnings