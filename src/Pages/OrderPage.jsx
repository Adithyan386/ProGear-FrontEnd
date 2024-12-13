import React from 'react';
import './orderpage.css';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

function OrderPage() {
  return (
    <>
      <h2 className="text-center">Place Your Order</h2>
      <p className="text-center">Fill Up The Form</p>
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Address"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="shipping-address"
            className="form-control"
            placeholder="Shipping Address"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="City"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="state"
            className="form-control"
            placeholder="State"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="pincode"
            className="form-control"
            placeholder="PinCode"
            required
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="tel"
            id="phone-number"
            className="form-control"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit Order
        </button>


        <h3>Payment Method</h3>
        <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          --Payment Method--
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
           Card
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">G-Pay</Dropdown.Item>
          <Dropdown.Item href="#/action-3">COD</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
<div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Card Number"
            required
          />
        </div>
      </form>
    </>
  );
}

export default OrderPage;
