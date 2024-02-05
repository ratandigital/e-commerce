
'use client'
import React from 'react'
import { useState } from 'react'

export default function ProductImage() {
    let [image, setImage] = useState('assets/images/products/product1.jpg')
 
  return (
    <>
     {/* Product Horizontal */}
     <div className="product-details-img product-horizontal-style">
            {/* Product Main */}
            <div className="zoompro-wrap">
              {/* Product Image */}
              <div className="zoompro-span">
                <img
                  id="zoompro"
                  className="zoompro"
                  src={image}
                  data-zoom-image="assets/images/products/product1.jpg"
                  alt="product"
                  width={625}
                  height={808}
                />
              </div>
              {/* End Product Image */}
              {/* Product Label */}
              <div className="product-labels">
                <span className="lbl pr-label1">New</span>
                <span className="lbl on-sale">Sale</span>
              </div>
              {/* End Product Label */}
              {/* Product Buttons */}
              <div className="product-buttons">
                <a
                  href="#productVideo-modal"
                  className="btn btn-primary popup-video m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#productVideo_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100 "
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Watch Video"
                  >
                    <i className="icon anm anm-video-r" />
                  </span>
                </a>
                <a
                  href="#zoom_modal"
                  className="btn btn-primary prlightbox m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#zoom_modal"
                  data-bs-placement="top"
                  title="Zoom Image"
                  
                >
                  <i className="icon anm anm-expand-l-arrows" style={{marginLeft:'3px'}} />
                </a>
              </div>
              {/* End Product Buttons */}
            </div>
            {/* End Product Main */}
            {/* Product Thumb */}
            <div className="product-thumb product-horizontal-thumb mt-3">
              <div id="gallery" className="product-thumb-horizontal">
                <a
                  data-image="assets/images/products/product1.jpg"
                  data-zoom-image="assets/images/products/product1.jpg"
                  className="slick-slide slick-cloned active"
               
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1.jpg"
                    src="assets/images/products/product1.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1.jpg')}
                  />
                </a>
                <a
                  data-image="assets/images/products/product1-1.jpg"
                  data-zoom-image="assets/images/products/product1-1.jpg"
                  className="slick-slide slick-cloned"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1-1.jpg"
                    src="assets/images/products/product1-1.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1-1.jpg')}
                  />
                </a>
                <a
                  data-image="assets/images/products/product1-2.jpg"
                  data-zoom-image="assets/images/products/product1-2.jpg"
                  className="slick-slide slick-cloned"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1-2.jpg"
                    src="assets/images/products/product1-2.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1-2.jpg')}
                  />
                </a>
                <a
                  data-image="assets/images/products/product1-3.jpg"
                  data-zoom-image="assets/images/products/product1-3.jpg"
                  className="slick-slide slick-cloned"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1-3.jpg"
                    src="assets/images/products/product1-3.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1-3.jpg')}
                  />
                </a>
                <a
                  data-image="assets/images/products/product1-4.jpg"
                  data-zoom-image="assets/images/products/product1-4.jpg"
                  className="slick-slide slick-cloned"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1-4.jpg"
                    src="assets/images/products/product1-4.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1-4.jpg')}
                  />
                </a>
                <a
                  data-image="assets/images/products/product1-5.jpg"
                  data-zoom-image="assets/images/products/product1-5.jpg"
                  className="slick-slide slick-cloned"
                >
                  <img
                    className="blur-up lazyload"
                    data-src="assets/images/products/product1-5.jpg"
                    src="assets/images/products/product1-5.jpg"
                    alt="product"
                    width={625}
                    height={808}
                    onClick={()=>setImage('assets/images/products/product1-5.jpg')}
                  />
                </a>
              </div>
            </div>
            {/* End Product Thumb */}
            {/* Product Gallery */}
            <div className="lightboximages">
              <a
                href="assets/images/products/product1.jpg"
                data-size="1000x1280"
              />
              <a
                href="assets/images/products/product1-1.jpg"
                data-size="1000x1280"
              />
              <a
                href="assets/images/products/product1-2.jpg"
                data-size="1000x1280"
              />
              <a
                href="assets/images/products/product1-3.jpg"
                data-size="1000x1280"
              />
              <a
                href="assets/images/products/product1-4.jpg"
                data-size="1000x1280"
              />
              <a
                href="assets/images/products/product1-5.jpg"
                data-size="1000x1280"
              />
            </div>
            {/* End Product Gallery */}
          </div>
          {/* End Product Horizontal */}
    </>
  )
}
