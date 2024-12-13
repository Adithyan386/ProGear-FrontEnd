import React, { useEffect, useState } from "react";
import "./add.css";
import { addproduct } from "../Service/AllApi";

function AddProduct() {
  const [view, setView] = useState("");
  const [Product, setProduct] = useState({
    name: "",
    ptype: "",
    price: "",
    description: "",
    productImage: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, ptype, price, description, productImage } = Product;
    if (!name || !ptype || !price || !description || !productImage) {
      alert("Please fill out all fields!");
      return;
    }

    const reqBody = new FormData();
    reqBody.append("name", name);
    reqBody.append("ptype", ptype);
    reqBody.append("price", price);
    reqBody.append("description", description);
    reqBody.append("productImage", productImage);

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    const response = await addproduct(reqBody, reqHeader);
    if (response.status === 200) {
      setView('')
      setProduct({ name: "", ptype: "", price: "", description: "", productImage: "" });
      alert("Product added successfully!");
    }
    else if(response.status === 406){
      alert('Only png,jpg or jpeg Are Allowed')
    }
    else if (response.status === 500) {
      alert(response.response.data.message);
    } 
    else {
      alert("Internal Server Error");
    }
  };

  useEffect(() => {
    if (Product.productImage) {
      setView(URL.createObjectURL(Product.productImage));
    }
  }, [Product.productImage]);

  return (
    <div className="container">
      <form className="mt-5" id="add-form">
        <h3 className="text-center" id="headsAdd" style={{fontWeight:'900'}}>Add Product</h3>

        {/* Product Name */}
        <div className="form-group mt-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            className="form-control"
            value={Product.name}
            onChange={(e) => setProduct({ ...Product, name: e.target.value })}
          />
        </div>

        {/* Product Category */}
        <div className="form-group mt-3">
          <label htmlFor="productCategory" className="form-label">Product Category</label>
          <select
            id="productCategory"
            className="form-select"
            value={Product.ptype}
            onChange={(e) => setProduct({ ...Product, ptype: e.target.value })}
          >
            <option value="" disabled>--Choose Category--</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Mouse">Mouse</option>
            <option value="Monitor">Monitor</option>
            <option value="Hard Disk">Hard Disk</option>
          </select>
        </div>

        {/* Product Description */}
        <div className="form-group mt-3">
          <label htmlFor="productDescription" className="form-label">Description</label>
          <textarea
            id="productDescription"
            rows="4"
            placeholder="Enter product description"
            className="form-control"
            value={Product.description}
            onChange={(e) => setProduct({ ...Product, description: e.target.value })}
          />
        </div>

        {/* Product Price */}
        <div className="form-group mt-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input
            type="text"
            id="productPrice"
            placeholder="Enter product price"
            className="form-control"
            value={Product.price}
            onChange={(e) => setProduct({ ...Product, price: e.target.value })}
          />
        </div>

        {/* Product Image */}
        <div className="form-group mt-3">
          <label htmlFor="productImage" className="form-label">Upload Image</label>
          <input
            type="file"
            id="productImage"
            className="form-control"
            // value={Product.productImage}
            onChange={(e) =>setProduct({ ...Product, productImage: e.target.files[0] })
            }
          />
          {view && (
            <img
              src={view}
              alt="Product Preview"
              className="img-fluid mt-3"
              style={{ Width: "100%", height: "100px" }}
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
