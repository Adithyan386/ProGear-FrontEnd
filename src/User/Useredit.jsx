import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import './Uedit.css'

function Useredit() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button  className='mx-3' variant="primary" onClick={handleShow}>
        Edit
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-4">
                        <label htmlFor="form1" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="formE1" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="form1" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="formE1" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Price</label>
                        <input type="text" className="form-control" id="formE1" />
                    </div>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Useredit