import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { editproducts } from '../Service/AllApi';
import { baseURL } from '../Service/baseUrl';

function Editmodal({product}) {

    const [view, setView] = useState('')

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit, setedit] = useState({
    name:product.productname,
    ptype:product.producttype,
    price:product.price,
    description:product.description,
    image:''
  })
  
  const handleupdate = async()=>{
    const {name,ptype,price,description} = edit
    if(!name || !ptype || !price || !description){
      alert('Please fill in all required fields.')
    }else{
      const token = sessionStorage.getItem('token')

      const reqHeader = {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }

      const reqBody = new FormData()

      reqBody.append('productname',name)
      reqBody.append('producttype',ptype)
      reqBody.append('price',price)
      reqBody.append('description',description)
      view? reqBody.append('productImage',edit.image): reqBody.append('productImage',product.image)

      const response = await editproducts(product._id,reqBody,reqHeader)
      if(response.status === 200){
        alert('Updated Sucessfully')
        setShow(false)

      }else if(response.status === 406){
        alert('Only JPG and PNG Can Add')
      }else{
        alert('Internal Server Error')
      }
      console.log(response);
    }
  }
  useEffect(()=>{
    if(edit.image){
      setView(URL.createObjectURL(edit.image))
    }
  },[edit.image])

  

  return (
    <>
    <Button  className='mx-3' variant="dark" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="formV1" 
                        value={edit.name}
                        onChange={(e)=> setedit({...edit,name:e.target.value})}
                        />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="productCategory" className="form-label">Product Category</label>
                         <select
                            id="productCategory"
                            className="form-select"
                            value={edit.ptype}
                            onChange={(e) => setedit({ ...edit, ptype: e.target.value })}
          >
            <option value="" disabled>--Choose Category--</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Mouse">Mouse</option>
            <option value="Monitor">Monitor</option>
            <option value="Hard Disk">Hard Disk</option>
          </select>
        </div>
                    <div className="row mt-3">
                        <div className="col-md-6 mb-4">
                            <label htmlFor="form2" className="form-label">Discription</label>
                            <textarea className='form-control' name="" id="" style={{ width: "470px", height: "30px" }} 
                            value={edit.description}
                            onChange={(e)=>setedit({...edit,description:e.target.value})}
                            ></textarea>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="form1" className="form-label">Price</label>
                        <input type="text" className="form-control" id="formV1" value={edit.price}
                        onChange={(e)=>setedit({...edit,price:e.target.value})}
                         />
                    </div>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <label>
                          <input type="file" style={{display:'none'}} onChange={(e)=>setedit({...edit,image:e.target.files[0]})}/>
                          <img src={view?view:`${baseURL}/uploads/${product.image}`} alt="" className='img-fluid' />
                        </label>
                    </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editmodal