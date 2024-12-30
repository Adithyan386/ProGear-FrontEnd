import React from 'react'
import './admin.css'
import { Link } from 'react-router-dom'

function AdminDash() {
  return (
    <>
     
        <div className='container'>
            <div className='row'>
              <div class="card text-bg-dark mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                 <h5 class="card-title">Users</h5>
                 <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                 <button className='btn btn-outline-light'><Link to={'/user'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                </div>
                </div>
                <div class="card text-bg-success mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                   <h5 class="card-title">Orders</h5>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaJEuryF2zoX6QZu_dGI17S9UvGyRjBNBHQ&s" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                   <button className='btn btn-outline-light'><Link to={'/order'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                 </div>
               </div>
               <div class="card text-bg-warning mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                   <h5 class="card-title">Track Oder</h5>
                   <img src="https://www.shutterstock.com/image-vector/map-pin-delivery-truck-line-260nw-584002243.jpg" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                   <button className='btn btn-outline-light'><Link to={'/track'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                 </div>
               </div>
               <div class="card text-bg-info mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                   <h5 class="card-title">Products</h5>
                   <img src="https://www.shutterstock.com/image-vector/new-product-stamp-vector-badge-260nw-1996342562.jpg" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                   <button className='btn btn-outline-light'><Link to={'/product'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                 </div>
               </div> 
               <div class="card text-bg-light mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                   <h5 class="card-title">Feedback</h5>
                   <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16a16c69194011.5b7816fcb375a.jpg" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                   <button className='btn btn-outline-dark'><Link to={'/feedback'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                 </div>
               </div>
               <div class="card text-bg-danger mt-5 ms-5" style={{width:'18rem'}}>
                 <div class="card-body">
                   <h5 class="card-title">Total Earnings</h5>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7u93tznJaiuNczznE4KEACJlG_h7rq48aGA&s" alt="" style={{borderRadius:'50%', height:'200px', width:'200px'}} />
                   <button className='btn btn-outline-light'><Link to={'/earnings'} style={{textDecoration:'none', color:'black'}}>View</Link></button>
                 </div>
               </div>
            </div>
        </div>

    </>
  )
}

export default AdminDash