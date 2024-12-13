import React from 'react'
import { Table } from 'react-bootstrap'

function UserView() {
  return (
    <>
        <Table bg="dark" data-bs-theme="dark" responsive="sm">
        <thead>
          <tr>
            <th>NO</th>
            <th>User ID</th>
            <th>UserName</th>
            <th>E-Mail</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
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

export default UserView