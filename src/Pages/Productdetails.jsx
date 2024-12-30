import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { addcart, getproductdetails, Reviews } from "../Service/AllApi";
import { baseURL } from "../Service/baseUrl";

function Productdetails() {
  
  const [review, setReview] = useState('')

  const [product, setgetProduct] = useState({})

  // const [cart, setcart] = useState({})

  const {id} = useParams()

  const getproduct = async()=>{
    const response = await getproductdetails(id)
    setgetProduct(response.data.productdetails)
    // console.log(response)
  }
  // console.log(id);
  

  const handelCart = async()=>{
    console.log('inside cart');
    
    const token = sessionStorage.getItem('token')
    const userid = sessionStorage.getItem('user')
    const user = JSON.parse(userid)?._id

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }
    const reqbody = {
      id,
      count:1
    }

    const response = await addcart(user,reqbody,reqheader)
    console.log(response)

    if(response.status === 401){
      alert('Authorization Failed Please Login.....!')

    }else if(response.status === 200){
      alert('Product Added to Cart...')
    }
  }
  const handleReview = async(e)=>{
    e.preventDefault()

    const reqbody ={
      productID: id,
      review
    }

    const token  = sessionStorage.getItem('token')

    const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
    }

    const response = await Reviews(reqbody, reqheader)
    if(response.status === 200){
      alert('Review Added')
      setReview('')
      getproduct()
    }
  }
  useEffect(()=>{
    getproduct()
  },[])

  return (
    <div>
      <div className="container my-5">
        <div className="row g-4">
          {/* Product Images */}
          <div className="col-md-6 d-flex justify-content-center">
            <Carousel fade className="w-100" style={{ maxWidth: "500px" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${baseURL}/uploads/${product?.image}`}
                  alt="Razer Viper V3 Pro - Top View"
                  style={{ height: "auto", maxHeight: "50vh" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Product Information */}
          <div className="col-md-6">
            <h4 className="mb-3">
            {product?.productname}
            </h4>
            <p className="text-muted">
              Category: <span className="fw-bold">{product?.producttype}</span>
            </p>
            <p>
              Price:{product?.price}
            </p>
            <p>
              {product?.description}
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <Link to={`/orderpage/${id}`} className="btn btn-dark">
                Buy Now
              </Link>
              <button className="btn btn-dark" onClick={handelCart}>
                <i className="fa-solid fa-cart-shopping" ></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-header bg-success text-white text-center">
            <h2>Feedback Form</h2>
          </div>
          <div className="card-body">
            <form>
              {/* Rating Field */}
              
              {/* Feedback Field */}
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">
                  Your Feedback
                </label>
                <textarea
                  className="form-control"
                  id="feedback"
                  name="feedback"
                  rows={4}
                  placeholder="Write your feedback here"
                  required
                  onChange={(e)=>setReview(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-success w-75"
                onClick={(e)=>handleReview(e)}>
                  Submit
                </button>
              </div>
              <div className="text-center">
                  <h4>
                    Reviews
                  </h4>
                  {
                    product?.reviews?.map((r)=>(
                      <>
                      <p>
                        {r.username}
                      </p>
                      <p>
                        {r.review}
                      </p>
                      </>
                    ))
                    
                  }
                  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
