import React from 'react'
import './contact.css'
import { FloatingLabel, Form } from 'react-bootstrap'
function Contact() {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-md-6 col-sm-12 text-center mt-4">
      <h3>
        Support <i className="fa-solid fa-headset"></i>
      </h3>
      <p>Get Answers From the ProGear Customer Care Community</p>
      <p>
        Find Support Options and Contact <a href="#/">Customer Care</a>
      </p>
    </div>
    <div className="col-md-6 col-sm-12 mt-4">
      <h3 className="text-center">
        Feedback Center <i className="fa-solid fa-message"></i>
      </h3>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Contact