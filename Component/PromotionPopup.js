import React from 'react'

export default function PromotionPopup() {
  return (
   <>
       {/*Product Promotion Popup*/}
       <div className="product-notification mobile-hide" id="dismiss">
      <span className="close" aria-hidden="true">
        <i className="icon anm anm-times-r" />
      </span>
      <div className="media d-flex align-items-center">
        <a href="product-layout1.html" className="mediaImg">
          <img
            className="w-100 h-100 blur-up lazyload"
            src="assets/images/products/product2-120x170.jpg"
            data-src="assets/images/products/product2-120x170.jpg"
            alt="Cuff Beanie Cap"
            width={120}
            height={170}
          />
        </a>
        <div className="media-body ms-3">
          <p className="smtlt mb-0">Someone purchsed a</p>
          <h5 className="pname">
            <a href="product-layout1.html">Cuff Beanie Cap</a>
          </h5>
          <p className="detail">12 Minutes ago from New York, USA</p>
        </div>
      </div>
    </div>
    {/*End Product Promotion Popup*/}
   </>
  )
}
