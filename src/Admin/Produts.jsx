import React from 'react'
import { Link } from 'react-router-dom'

function Produts() {
  return (
    <>
<div className="container">
  <div className="row justify-content-center mt-5">
    {/* View Products Card */}
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="card text-bg-info" style={{ width: '18rem' }}>
        <div className="card-body text-center">
          <h5 className="card-title">View Products</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">View Products</h6>
          <img
            src="https://www.shutterstock.com/image-vector/new-product-stamp-vector-badge-260nw-1996342562.jpg"
            alt="View Product"
            style={{
              borderRadius: '50%',
              height: '200px',
              width: '200px',
              objectFit: 'cover',
            }}
            className="img-fluid"
          />
          <button className="btn btn-outline-light mt-3">
            <Link
              to={'/viewproduct'}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              View
            </Link>
          </button>
        </div>
      </div>
    </div>

    {/* Add Products Card */}
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-4 mt-md-0">
      <div className="card text-bg-info" style={{ width: '18rem' }}>
        <div className="card-body text-center">
          <h5 className="card-title">Add Products</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Add Product</h6>
          <img
            src="https://www.shutterstock.com/image-vector/new-product-stamp-vector-badge-260nw-1996342562.jpg"
            alt="Add Product"
            style={{
              borderRadius: '50%',
              height: '200px',
              width: '200px',
              objectFit: 'cover',
            }}
            className="img-fluid"
          />
          <button className="btn btn-outline-light mt-3">
            <Link to={'/addproduct'} style={{ textDecoration: 'none', color: 'black' }}>
              Add
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Produts