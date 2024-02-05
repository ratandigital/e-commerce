import React from 'react'

export default function MiniCard() {
  return (
    <>
      {/*MiniCart Drawer*/}
      <div
      id="minicart-drawer"
      className="minicart-right-drawer offcanvas offcanvas-end"
      tabIndex={-1}
    >
      {/*MiniCart Empty*/}
      <div
        id="cartEmpty"
        className="cartEmpty d-flex-justify-center flex-column text-center p-3 text-muted d-none"
      >
        <div className="minicart-header d-flex-center justify-content-between w-100">
          <h4 className="fs-6">Your cart (0 Items)</h4>
          <button
            className="close-cart border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i
              className="icon anm anm-times-r"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Close"
            />
          </button>
        </div>
        <div className="cartEmpty-content mt-4">
          <i className="icon anm anm-cart-l fs-1 text-muted" />
          <p className="my-3">No Products in the Cart</p>
          <a href="index.html" className="btn btn-primary cart-btn">
            Continue shopping
          </a>
        </div>
      </div>
      {/*End MiniCart Empty*/}
      {/*MiniCart Content*/}
      <div id="cart-drawer" className="block block-cart">
        <div className="minicart-header">
          <button
            className="close-cart border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i
              className="icon anm anm-times-r"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Close"
            />
          </button>
          <h4 className="fs-6">Your cart (2 Items)</h4>
        </div>
        <div className="minicart-content">
          <ul className="m-0 clearfix">
            <li className="item d-flex justify-content-center align-items-center">
              <a
                className="product-image rounded-3"
                href="product-layout1.html"
              >
                <img
                  className="blur-up lazyload"
                  data-src="assets/images/products/cart-product-img1.jpg"
                  src="assets/images/products/cart-product-img1.jpg"
                  alt="product"
                  title="Product"
                  width={120}
                  height={170}
                />
              </a>
              <div className="product-details">
                <a className="product-title" href="product-layout1.html">
                  Women Sandals
                </a>
                <div className="variant-cart my-2">Black / XL</div>
                <div className="priceRow">
                  <div className="product-price">
                    <span className="price">$54.00</span>
                  </div>
                </div>
              </div>
              <div className="qtyDetail text-center">
                <div className="qtyField">
                  <a className="qtyBtn minus" href="#;">
                    <i className="icon anm anm-minus-r" />
                  </a>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="qtyBtn plus" href="#;">
                    <i className="icon anm anm-plus-r" />
                  </a>
                </div>
                <a href="#" className="edit-i remove">
                  <i
                    className="icon anm anm-pencil-ar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                  />
                </a>
                <a href="#" className="remove">
                  <i
                    className="icon anm anm-times-r"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  />
                </a>
              </div>
            </li>
            <li className="item d-flex justify-content-center align-items-center">
              <a
                className="product-image rounded-3"
                href="product-layout1.html"
              >
                <img
                  className="blur-up lazyload"
                  data-src="assets/images/products/cart-product-img2.jpg"
                  src="assets/images/products/cart-product-img2.jpg"
                  alt="product"
                  title="Product"
                  width={120}
                  height={170}
                />
              </a>
              <div className="product-details">
                <a className="product-title" href="product-layout1.html">
                  Sleeve Round T-Shirt
                </a>
                <div className="variant-cart my-2">Yellow / M</div>
                <div className="priceRow">
                  <div className="product-price">
                    <span className="price old-price">$114.00</span>
                    <span className="price">$99.00</span>
                  </div>
                </div>
              </div>
              <div className="qtyDetail text-center">
                <div className="qtyField">
                  <a className="qtyBtn minus" href="#;">
                    <i className="icon anm anm-minus-r" />
                  </a>
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={1}
                    className="qty"
                  />
                  <a className="qtyBtn plus" href="#;">
                    <i className="icon anm anm-plus-r" />
                  </a>
                </div>
                <a href="#" className="edit-i remove">
                  <i
                    className="icon anm anm-pencil-ar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit"
                  />
                </a>
                <a href="#" className="remove">
                  <i
                    className="icon anm anm-times-r"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="minicart-bottom">
          <div className="shipinfo">
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                50%
              </div>
            </div>
            <div className="freeShipMsg">
              <i className="icon anm anm-truck-l fs-6 me-2 align-middle" />
              Only{" "}
              <span
                className="money"
                data-currency-usd="$199.00"
                data-currency="USD"
              >
                $199.00
              </span>{" "}
              away from <b>Free Shipping</b>
            </div>
            <div className="freeShipMsg d-none">
              <i className="icon anm anm-truck-l fs-6 me-2 align-middle" />
              Congrats! You are eligible for <b>Free Shipping</b>
            </div>
          </div>
          <div className="subtotal clearfix my-3">
            <div className="totalInfo clearfix mb-1 d-none">
              <span>Shipping:</span>
              <span className="item product-price">$10.00</span>
            </div>
            <div className="totalInfo clearfix mb-1 d-none">
              <span>Tax:</span>
              <span className="item product-price">$0.00</span>
            </div>
            <div className="totalInfo clearfix">
              <span>Total:</span>
              <span className="item product-price">$163.00</span>
            </div>
          </div>
          <div className="agree-check customCheckbox">
            <input
              id="prTearm"
              name="tearm"
              type="checkbox"
              defaultValue="tearm"
              required=""
            />
            <label htmlFor="prTearm"> I agree with the </label>
            <a href="#" className="ms-1 text-link">
              Terms &amp; conditions
            </a>
          </div>
          <div className="minicart-action d-flex mt-3">
            <a
              href="checkout-style1.html"
              className="proceed-to-checkout btn btn-primary w-50 me-1"
            >
              Check Out
            </a>
            <a
              href="cart-style1.html"
              className="cart-btn btn btn-secondary w-50 ms-1"
            >
              View Cart
            </a>
          </div>
        </div>
      </div>
      {/*MiniCart Content*/}
    </div>
    {/*End MiniCart Drawer*/}
    </>
  )
}
