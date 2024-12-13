import React from "react";
import { Carousel } from "react-bootstrap";
import Razer1 from '../Assets/razer1 (1).jpg';
import Razer2 from '../Assets/razer1 (3).jpg';
import { Link, useParams } from "react-router-dom";

function Productdetails() {
  const {id} = useParams()
  console.log(id);
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
                  src={Razer1}
                  alt="Razer Viper V3 Pro - Top View"
                  style={{ height: "auto", maxHeight: "50vh" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Razer2}
                  alt="Razer Viper V3 Pro - Angled View"
                  style={{ height: "auto", maxHeight: "50vh" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Product Information */}
          <div className="col-md-6">
            <h4 className="mb-3">
              Razer Viper V3 Pro Wireless Esports Gaming Mouse: Symmetrical -
              54g Lightweight - 8K Polling - 35K DPI Optical Sensor - Gen3
              Optical Switches - 8 Programmable Buttons - 95 Hr Battery - White
            </h4>
            <p className="text-muted">
              Category: <span className="fw-bold">Mouse</span>
            </p>
            <p>
              Designed for precision, control, and speed, the Razer Viper V3 Pro
              ensures peak gaming performance with advanced features tailored
              for esports professionals.
            </p>
            <p>
              <strong>Brand:</strong> Razer
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <Link to={'/orderpage'} className="btn btn-dark">
                Buy Now
              </Link>
              <button className="btn btn-dark">
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
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
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <select
                  className="form-select"
                  id="rating"
                  name="rating"
                  required
                >
                  <option value="" disabled selected>
                    Choose a rating
                  </option>
                  <option value={1}>1 - Poor</option>
                  <option value={2}>2 - Fair</option>
                  <option value={3}>3 - Good</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={5}>5 - Excellent</option>
                </select>
              </div>

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
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-success w-75">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
