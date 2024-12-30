import React, { useEffect, useState } from 'react';
import './orderpage.css';
import { useParams } from 'react-router-dom';
import { getproductdetails, Orderpay, paymentOrder } from '../Service/AllApi';

function OrderPage() {
  const [product,setgetProduct] = useState({})
  const {id} = useParams()
  const [Data, SetData] = useState({
    productID:id,
    ShippindAddress:'',
    City:'',
    State:'',
    Pincode:'',
    phone:'',
    Amount:'',
    PaymentID:''
    })
  const getproduct = async()=>{
      const response = await getproductdetails(id)
      setgetProduct(response.data.productdetails)
      // console.log(product)
    }

    useEffect(()=>{
      getproduct()
    },[])

    const Buynow = async(amount,PaymentID)=>{

      const reqbody = {
        productID:Data.productID,
        ShippingAddress:Data.ShippindAddress,
        City:Data.City,
        State:Data.State,
        Pincode:Data.Pincode,
        phone:Data.phone,
        amount,
        PaymentID:PaymentID
      }

      const token = sessionStorage.getItem('token')

      // console.log(res);

      const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
      }

      const res = await Orderpay(reqbody,reqheader)
      console.log(res);


    }

    const loadScript = (src)=>{
      return new Promise((resolve)=>{
        const script = document.createElement("script")

        script.src = src;

        script.onload = ()=>{
          resolve(true)
        }

        script.onerror = ()=>{
          resolve(false)
        }

        document.body.appendChild(script)
      })
    }
  

    const paymentPage = async()=>{
      const reqbody = {
        amount: product.price *100
      }

    const token = sessionStorage.getItem('token')

      // console.log(reqbody);

      const reqheader = {
      'Authorization':`Bearer ${token}`,
      "Content-Type":"application/json"
      }

      const response = await paymentOrder(reqbody,reqheader)
      handleRazorpayScreen(response.data.amount)
      // console.log(response);
    }

    const handleRazorpayScreen = async(amount)=>{
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

      if(!res){
        alert("Some Error at Razorpay Screen Loading")
        return
      }

      const options = {
        key:'rzp_test_YWob3NoKy2p5h6',
        amount:amount,
        currency:'INR',

        handler: function (response){
          SetData({...Data,PaymentID:response.razorpay_payment_id})
          Buynow(amount,response?.razorpay_payment_id)
          console.log(response);
        },

        theme:{
          color: "#F4C430"
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }

    



  return (
    <>
      <h2 className="text-center">Place Your Order</h2>
      <p className="text-center">Fill Up The Form</p>
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="shipping-address"
            className="form-control"
            placeholder="Shipping Address"
            required
            onChange={(e)=>SetData({...Data, ShippindAddress: e.target.value})}
          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="City"
            required
            onChange={(e)=>SetData({...Data, City: e.target.value})}

          />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="state"
            className="form-control"
            placeholder="State"
            required
            onChange={(e)=>SetData({...Data, State: e.target.value})}

            />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="pincode"
            className="form-control"
            placeholder="PinCode"
            required
            onChange={(e)=>SetData({...Data, Pincode: e.target.value})}

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
            onChange={(e)=>SetData({...Data, phone: e.target.value})}

          />
        </div>
        <div>
        <div class="col-md-6">
        <label for="payment-method" class="form-label">
          Select Payment Method:
        </label>
        <select
          id="payment-method"
          name="payment-method"
          class="form-select"
          aria-label="Select Payment Method"
        >
          <option value="" disabled selected>-- Select Payment Method --</option>
          <option value="upi">Razorpay</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>
      </div>
        </div>

        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mt-3"
          onClick={paymentPage}
          >
          Submit Order
        </button>
      </form>
    </>
  );
}

export default OrderPage;
