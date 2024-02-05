import React from 'react'

export default function StikyCard() {
  return (
    <>
    {/* Sticky Cart */}
    <div className="stickyCart">
      <div className="container">
        <form
          method="post"
          action="#"
          id="stickycart-form"
          className="d-flex-center justify-content-center"
        >
          <div className="product-featured-img">
            <img
              className="blur-up lazyload"
              data-src="assets/images/products/product1-120x170.jpg"
              src="assets/images/products/product1-120x170.jpg"
              alt="product"
              width={120}
              height={170}
            />
          </div>
          <div className="sticky-title ms-2 ps-1 pe-5">Oxford Cuban Shirt</div>
          <div className="stickyOptions position-relative">
            <div className="selectedOpt">
              Red / S - <span className="money">$130.00</span>
            </div>
            <ul>
              <li className="vrOpt" data-val={31677941252156} data-no={0}>
                Red / S - $130.00
              </li>
              <li className="vrOpt" data-val={31677941383228} data-no={1}>
                Red / M - $130.00
              </li>
              <li className="vrOpt" data-val={31677941514300} data-no={2}>
                Green / L - $130.00
              </li>
              <li className="vrOpt" data-val={31677941678140} data-no={3}>
                Green / XL - $130.00
              </li>
              <li className="vrOpt" data-val={31677941284924} data-no={4}>
                Pink / S - $104.00
              </li>
              <li className="vrOpt" data-val={31677941415996} data-no={5}>
                Pink / M - $130.00
              </li>
              <li className="vrOpt" data-val={31677941579836} data-no={6}>
                Peach / L - $130.00
              </li>
              <li className="vrOpt" data-val={31677941710908} data-no={7}>
                Peach / XL - $130.00
              </li>
              <li className="soldout">White / S - Sold out</li>
              <li className="vrOpt" data-val={31677941481532} data-no={9}>
                White / M - $130.00
              </li>
              <li className="vrOpt" data-val={31677941612604} data-no={10}>
                Blue / L - $130.00
              </li>
              <li className="vrOpt" data-val={31677941776444} data-no={11}>
                Blue / XL - $130.00
              </li>
            </ul>
          </div>
          <select
            name="id"
            id="variantOptions1"
            className="product-form__variants selectbox no-js d-none ms-3"
          >
            <option selected="selected" value={31677941252156}>
              Red / S
            </option>
            <option value={31677941383228}>Red / S</option>
            <option value={31677941514300}>Red / M</option>
            <option value={31677941678140}>Green / XL</option>
            <option value={31677941284924}>Pink / S</option>
            <option value={31677941415996}>Pink / M</option>
            <option value={31677941579836}>Peach / L</option>
            <option value={31677941710908}>Peach / XL</option>
            <option disabled="disabled">White / S - Sold out</option>
            <option value={31677941481532}>White / M</option>
            <option value={31677941612604}>Blue / L</option>
            <option value={31677941776444}>Blue / XL</option>
          </select>
          <div className="qtyField mx-2">
            <a className="qtyBtn minus" href="#;">
              <i className="icon anm anm-minus-r" />
            </a>
            <input
              type="text"
              name="quantity"
              defaultValue={1}
              className="product-form-input qty"
            />
            <a className="qtyBtn plus" href="#;">
              <i className="icon anm anm-plus-r" />
            </a>
          </div>
          <button
            type="submit"
            name="add"
            className="btn btn-secondary product-form-cart-submit"
          >
            <span>Add to cart</span>
          </button>
        </form>
      </div>
    </div>
    {/* End Sticky Cart */}
  </>
  
  )
}
