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