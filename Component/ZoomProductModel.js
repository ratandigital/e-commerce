'use client'

import React from 'react'
import { Container } from 'react-bootstrap';


export default function ZoomProductModel() {
 
  return (
<>
  {/*Product Video Modal*/}
  <div
    className="productVideo-modal modal fade"
    id="zoom_modal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered" >
      <div className="modal-content">
        <div className="modal-body p-0">
        
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
          
          <Container className='d-flex justify-content-between align-items-center' style={{width:'100%', height:'100%', }}>
         <div className=' ' >
         <button className=' bg-success text-white p-1 '>Previous</button>
         </div>
         <div className='' >
         <img
                    className="blur-up lazyload d-flex align-items-center "
                    data-src="assets/images/products/product1.jpg"
                    src="assets/images/products/product1.jpg"
                    alt="product"
                    width={405}
                    height={500}
                    
                    
                 
                  />
         </div>
          
         <div className='' >
         <button className='d-flex  bg-success text-white p-1'>Previous</button>
         </div>
          </Container>
        </div>
      </div>
    </div>
  </div>
  {/*End Product Video Modal*/}
</>

  )
}
