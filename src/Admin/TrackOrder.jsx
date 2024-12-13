import React from 'react'
import { Table } from 'react-bootstrap'

function TrackOrder() {
  return (
    <>
    <Table bg="dark" data-bs-theme="dark" responsive="sm">
        <thead>
          <tr>
            <th>Track ID</th>
            <th>Shipement Status</th>
            <th>Arrival Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>

    </>
  )
}

export default TrackOrder