import React, { useState } from 'react';
import './contact.css';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { FeedBacks } from '../Service/AllApi';

function Contact() {
  const [feedback,setfeedback] = useState({
    review:'',
    email:'',
    username:''
  })
  
  const handleFeedBack = async(e)=>{
    e.preventDefault()
  
    const {username,review,email} = FeedBacks
  
    const token = sessionStorage.getItem('token')
  
    const reqheaher = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }
  
    const response = await FeedBacks(feedback,reqheaher)
    console.log(response);
    if(response.status === 200){
      alert('FeedBack Added')
      setfeedback('')
    }
  }
  console.log(feedback);
  
  return (
    <>
      <div className="container">
      <div className="row">
        {/* Support Section */}
        <div className="col-md-6 col-sm-12 text-center mt-4">
          <h3>
            Support <i className="fa-solid fa-headset"></i>
          </h3>
          <p>Get Answers From the ProGear Customer Care Community</p>
          <p>
            Find Support Options and Contact <a href="#/">Customer Care</a>
          </p>
        </div>

        {/* Feedback Section */}
        <div className="col-md-6 col-sm-12 mt-4">
          <h3 className="text-center">
            Feedback Center <i className="fa-solid fa-message"></i>
          </h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name=""
              id=""
              onChange={(e)=>setfeedback({...feedback,username:e.target.value})}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name=""
              id=""
              onChange={(e)=>setfeedback({...feedback,email:e.target.value})}

            />
          </div>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={(e)=>setfeedback({...feedback,review:e.target.value})}

            />
          </FloatingLabel>
          <div className="text-center mt-3">
            <Button variant="primary" type="button" onClick={(e)=>handleFeedBack(e)}>
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Contact;



