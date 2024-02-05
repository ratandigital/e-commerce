"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('')
    const [availability, setAvailability] = useState('');
    const [vendor, setVendor] = useState('')
    const [product_type, setProduct_type] = useState('');
    const [prices, setPrices] = useState('')
    const [shoert_des, setShoert_des] = useState('');
    const [color, setColor] = useState('')
    const [color_pic, setColor_pic] = useState('');
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('');
    const [additional_info, setAdditional_info] = useState('')
    const [upimage, setUpimage] = useState('')
 console.log(upimage)
 function handleChange(e) {
  console.log(e.target.files);
  setUpimage(URL.createObjectURL(e.target.files[0]));
}
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // console.log('Name ', name)
        // console.log('book topic ', bookTopic)

        

        try {
console.log(upimage)
            const response = await fetch("/api/product", {
                method: "POST",
                body: JSON.stringify({ title: title, review:review, availability:availability, vendor:vendor, 
                  product_type:product_type, prices:prices,
                  shoert_des: shoert_des, color: color, 
                  size: size, description: description, additional_info: additional_info, upimage: upimage })
            })

            if (response.ok) {
                alert('done properly');
                setTitle('')
                setReview('')
                setAvailability('')
                setProduct_type('')
                setPrices('')
                setShoert_des('')
                setColor('')
                setColor_pic('')
                setSize('')
                setDescription('')
                setAdditional_info('')
                setVendor('')


            }

        }

        catch (error) {
            console.log(error)
        }
        finally {

        }
    }
    return (
      <Form className='p-5 bg-light' onSubmit={handleFormSubmit}>
      <fieldset style={{backgroundColor: 'AliceBlue', padding:'20px'}}>
        <div className='d-lg-flex d-sm-block'>
        <Form.Group className="mb-3 me-2 ">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 me-2">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect"  onChange={(e) => setReview(e.target.value)}>
          <option>Select a value</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Select>
        </Form.Group>
         <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="text" placeholder="availability" 
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Vendor Name</Form.Label>
        <Form.Control type="text" placeholder="availability" 
        value={vendor}
        onChange={(e) => setVendor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Type</Form.Label>
        <Form.Control type="text" placeholder="availability" 
        value={product_type}
        onChange={(e) => setProduct_type(e.target.value)}
        />
      </Form.Group>
        </div>
        <div className='d-lg-flex d-sm-block'>
        <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Prices</Form.Label>
        <Form.Control type="text" placeholder="availability" 
        value={prices}
        onChange={(e) => setPrices(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Short Description</Form.Label>
        <Form.Control type="text" placeholder="availability" 
        value={shoert_des}
        onChange={(e) => setShoert_des(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 me-2">
          <Form.Label htmlFor="disabledSelect">Color</Form.Label>
          <Form.Select id="disabledSelect"  onChange={(e) => setColor(e.target.value)}>
          <option>Select a Color</option>
            <option value='Red'>Red</option>
            <option value='Green'>Green</option>
            <option value='Blue'>Blue</option>
            <option value='White'>White</option>
            <option value='Purple'>Purple</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 me-2">
          <Form.Label htmlFor="disabledSelect">Size</Form.Label>
          <Form.Select id="disabledSelect"  onChange={(e) => setSize(e.target.value)}>
          <option>Select a Size</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Extra Large'>Extra Large</option>
           
          </Form.Select>
        </Form.Group>
     </div>
     <div className='d-lg-flex d-sm-block align-items-center justify-content-center'>
     <Form.Group className="mb-3 me-3 min-vw-80" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Additional Information</Form.Label>
        <Form.Control as="textarea" rows={5} 
          value={additional_info}
          onChange={(e) => setAdditional_info(e.target.value)}
        />
      </Form.Group>
       </div>
      
       <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={upimage} />
        </div>

      <div style={{textAlign: 'center'}}>
      <Button style={{width:'25%'}} type="submit">Submit</Button>
      </div>
      
      </fieldset>
    </Form>
    );
};

export default AddProduct;
