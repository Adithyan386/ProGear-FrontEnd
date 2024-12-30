import { computeHeadingLevel } from "@testing-library/react"
import { baseURL } from "./baseUrl"
import { CommonApi } from "./Common"


//user register
export const userRegister = async(user)=>{
    return await CommonApi('POST',`${baseURL}/register`,user,"")
}

//user login
export const login = async(user)=>{
    return await CommonApi('POST',`${baseURL}/login`,user,"")
}

//add product

export const addproduct = async(product,reqheader)=>{
    return await CommonApi('POST',`${baseURL}/productadd`,product,reqheader)
}

//get product

export const getproduct = async(reqheader)=>{
    return await CommonApi('GET',`${baseURL}/viewProduct`,"",reqheader)
}

// delete product 

export const deleteproducts = async(id,reqheader)=>{
    return await CommonApi("DELETE",`${baseURL}/deleteproduct/${id}`,{},reqheader)
}

//edit product
export const editproducts = async(id,reqbody,reqheader)=>{
    return await CommonApi("PUT",`${baseURL}/editproduct/${id}`,reqbody,reqheader)
}

//get product based on category
export const getproductcategory = async(category)=>{
    return await CommonApi('GET',`${baseURL}/getproduct/${category}`,"","")
}

//get productdetails
export const getproductdetails = async(id)=>{
    return await CommonApi('GET',`${baseURL}/productdetails/${id}`,"","")
}

//add to cart 
export const addcart = async(userId,reqbody,reqheader)=>{
    return await CommonApi('POST',`${baseURL}/add-cart/${userId}`,reqbody,reqheader)
}

//get cart producrts
export const getcartProduct = async(id,reqheader)=>{
    return await CommonApi('GET',`${baseURL}/getCart/${id}`,"",reqheader)
}

//delete cart
export const DeleteCart = async(id,reqheader)=>{
    return await CommonApi('DELETE',`${baseURL}/deletecart/${id}`,{},reqheader)
}

//show all product
export const showproductss = async(searchKey)=>{
    return await CommonApi('GET',`${baseURL}/showproduct?search=${searchKey}`,"","")
}

//otp sending
export const otpSensding = async(reqbody)=>{
    return await CommonApi('POST',`${baseURL}/otpverify`,reqbody,"")
}

//otp verification
export const otpverification = async(reqbody)=>{
    return await CommonApi('POST',`${baseURL}/otpverify`,reqbody,"")
}

//otp resending
export const otpResending = async(reqbody)=>{
    return await CommonApi('POST',`${baseURL}/resendotp`,reqbody,"")
}

//google
export const GoogleSgin = async(reqbody)=>{
    return await CommonApi('POST',`${baseURL}/googlesign`,reqbody,"")
}

//forget password
export const PasswordChange = async(reqbody)=>{
    return await CommonApi('POST',`${baseURL}/ResetPass`,reqbody,"")
}

//reset password
export const ResetPassword = async(reqbody)=>{
    return await CommonApi('PUT',`${baseURL}/password`,reqbody,"")
}

//payment
export const paymentOrder = async(reqbody,reqheader)=>{
    return await CommonApi('POST',`${baseURL}/orderpay`,reqbody,reqheader)
}

//orderpay
export const Orderpay = async(reqbody,reqheader)=>{
    return await CommonApi('POST',`${baseURL}/orderproduct`,reqbody,reqheader)
}

//userorder
export const OrderView = async(reqheader)=>{
    return await CommonApi('GET',`${baseURL}/userOrder`,"",reqheader)
}

//AdminOrderView
export const Orderadminview = async(reqheader)=>{
    return await CommonApi('GET',`${baseURL}/adminOrder`,"",reqheader)
}

//getuserAdmin
export const getAdminUser = async(reqheader)=>{
    return await CommonApi('GET',`${baseURL}/viewUserAdmin`,"",reqheader)
}

//review
export const Reviews = async(reqbody,reqheader)=>{
    return await CommonApi('PUT',`${baseURL}/Review`,reqbody,reqheader)
}

//feedback
export const FeedBacks = async(reqbody,reqheader)=>{
    return await CommonApi('POST',`${baseURL}/Feedback`,reqbody,reqheader)
}

//admin-feedback
export const AdminFeedbackView = async(reqheader)=>{
    return await CommonApi('GET',`${baseURL}/adminfeed`,"",reqheader)
}