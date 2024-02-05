import React from 'react'

export default function QuickViewModal() {
  return (
  <>
      {/* Product Quickview Modal*/}
      <div
      className="quickview-modal modal fade"
      id="quickview_modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 mb-md-0">
                {/* Model Thumbnail */}
                <div id="quickView" className="carousel slide">
                  {/* Image Slide carousel items */}
                  <div className="carousel-inner">
                    <div
                      className="item carousel-item active"
                      data-bs-slide-number={0}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2.jpg"
                        src="assets/images/products/product2.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                    <div
                      className="item carousel-item"
                      data-bs-slide-number={1}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2-1.jpg"
                        src="assets/images/products/product2-1.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                    <div
                      className="item carousel-item"
                      data-bs-slide-number={2}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2-2.jpg"
                        src="assets/images/products/product2-2.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                    <div
                      className="item carousel-item"
                      data-bs-slide-number={3}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2-3.jpg"
                        src="assets/images/products/product2-3.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                    <div
                      className="item carousel-item"
                      data-bs-slide-number={4}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2-4.jpg"
                        src="assets/images/products/product2-4.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                    <div
                      className="item carousel-item"
                      data-bs-slide-number={5}
                    >
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/products/product2-5.jpg"
                        src="assets/images/products/product2-5.jpg"
                        alt="product"
                        title="Product"
                        width={625}
                        height={808}
                      />
                    </div>
                  </div>
                  {/* End Image Slide carousel items */}
                  {/* Thumbnail image */}
                  <div className="model-thumbnail-img">
                    {/* Thumbnail slide */}
                    <div className="carousel-indicators list-inline">
                      <div
                        className="list-inline-item active"
                        id="carousel-selector-0"
                        data-bs-slide-to={0}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2.jpg"
                          src="assets/images/products/product2.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                      <div
                        className="list-inline-item"
                        id="carousel-selector-1"
                        data-bs-slide-to={1}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2-1.jpg"
                          src="assets/images/products/product2-1.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                      <div
                        className="list-inline-item"
                        id="carousel-selector-2"
                        data-bs-slide-to={2}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2-2.jpg"
                          src="assets/images/products/product2-2.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                      <div
                        className="list-inline-item"
                        id="carousel-selector-3"
                        data-bs-slide-to={3}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2-3.jpg"
                          src="assets/images/products/product2-3.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                      <div
                        className="list-inline-item"
                        id="carousel-selector-4"
                        data-bs-slide-to={4}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2-4.jpg"
                          src="assets/images/products/product2-4.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                      <div
                        className="list-inline-item"
                        id="carousel-selector-5"
                        data-bs-slide-to={5}
                        data-bs-target="#quickView"
                      >
                        <img
                          className="blur-up lazyload"
                          data-src="assets/images/products/product2-5.jpg"
                          src="assets/images/products/product2-5.jpg"
                          alt="product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </div>
                    </div>
                    {/* End Thumbnail slide */}
                    {/* Carousel arrow button */}
                    <a
                      className="carousel-control-prev carousel-arrow rounded-1"
                      href="#quickView"
                      data-bs-target="#quickView"
                      data-bs-slide="prev"
                    >
                      <i className="icon anm anm-angle-left-r" />
                    </a>
                    <a
                      className="carousel-control-next carousel-arrow rounded-1"
                      href="#quickView"
                      data-bs-target="#quickView"
                      data-bs-slide="next"
                    >
                      <i className="icon anm anm-angle-right-r" />
                    </a>
                    {/* End Carousel arrow button */}
                  </div>
                  {/* End Thumbnail image */}
                </div>
                {/* End Model Thumbnail */}
                <div className="text-center mt-3">
                  <a href="product-layout1.html" className="text-link">
                    View More Details
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <div className="product-arrow d-flex justify-content-between">
                  <h2 className="product-title">Product Quick View Popup</h2>
                </div>
                <div className="product-review d-flex mt-0 mb-2">
                  <div className="rating">
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star-o" />
                  </div>
                  <div className="reviews ms-2">
                    <a href="#">6 Reviews</a>
                  </div>
                </div>
                <div className="product-info">
                  <p className="product-vendor">
                    Vendor:
                    <span className="text">
                      <a href="#">Sparx</a>
                    </span>
                  </p>
                  <p className="product-type">
                    Product Type:<span className="text">Caps</span>
                  </p>
                  <p className="product-sku">
                    SKU:<span className="text">RF104456</span>
                  </p>
                </div>
                <div className="pro-stockLbl my-2">
                  <span className="d-flex-center stockLbl instock d-none">
                    <i className="icon anm anm-check-cil" />
                    <span> In stock</span>
                  </span>
                  <span className="d-flex-center stockLbl preorder d-none">
                    <i className="icon anm anm-clock-r" />
                    <span> Pre-order Now</span>
                  </span>
                  <span className="d-flex-center stockLbl outstock d-none">
                    <i className="icon anm anm-times-cil" />{" "}
                    <span>Sold out</span>
                  </span>
                  <span
                    className="d-flex-center stockLbl lowstock"
                    data-qty={15}
                  >
                    <i className="icon anm anm-exclamation-cir" />
                    <span>
                      {" "}
                      Order now, Only <span className="items">10</span> left!
                    </span>
                  </span>
                </div>
                <div className="product-price d-flex-center my-3">
                  <span className="price old-price">$135.00</span>
                  <span className="price">$99.00</span>
                </div>
                <div className="sort-description">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </div>
                <form
                  method="post"
                  action="#"
                  id="product_form--option"
                  className="product-form"
                >
                  <div className="product-options d-flex-wrap">
                    <div
                      className="product-item swatches-image w-100 mb-3 swatch-0 option1"
                      data-option-index={0}
                    >
                      <label className="label d-flex align-items-center">
                        Color:
                        <span className="slVariant ms-1 fw-bold">Blue</span>
                      </label>
                      <ul className="variants-clr swatches d-flex-center pt-1 clearfix">
                        <li className="swatch large radius available active">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Blue"
                          />
                        </li>
                        <li className="swatch large radius available">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Black"
                          />
                        </li>
                        <li className="swatch large radius available">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Pink"
                          />
                        </li>
                        <li className="swatch large radius available green">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Green"
                          />
                        </li>
                        <li className="swatch large radius soldout yellow">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Yellow"
                          />
                        </li>
                      </ul>
                    </div>
                    <div
                      className="product-item swatches-size w-100 mb-3 swatch-1 option2"
                      data-option-index={1}
                    >
                      <label className="label d-flex align-items-center">
                        Size:<span className="slVariant ms-1 fw-bold">S</span>
                      </label>
                      <ul className="variants-size size-swatches d-flex-center pt-1 clearfix">
                        <li className="swatch large radius soldout">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="XS"
                          >
                            XS
                          </span>
                        </li>
                        <li className="swatch large radius available active">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="S"
                          >
                            S
                          </span>
                        </li>
                        <li className="swatch large radius available">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="M"
                          >
                            M
                          </span>
                        </li>
                        <li className="swatch large radius available">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="L"
                          >
                            L
                          </span>
                        </li>
                        <li className="swatch large radius available">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="XL"
                          >
                            XL
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="product-action d-flex-wrap w-100 pt-1 mb-3 clearfix">
                      <div className="quantity">
                        <div className="qtyField rounded">
                          <a className="qtyBtn minus" href="#;">
                            <i
                              className="icon anm anm-minus-r"
                              aria-hidden="true"
                            />
                          </a>
                          <input
                            type="text"
                            name="quantity"
                            defaultValue={1}
                            className="product-form__input qty"
                          />
                          <a className="qtyBtn plus" href="#;">
                            <i
                              className="icon anm anm-plus-l"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="addtocart ms-3 fl-1">
                        <button
                          type="submit"
                          name="add"
                          className="btn product-cart-submit w-100"
                        >
                          <span>Add to cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="wishlist-btn d-flex-center">
                  <a
                    className="add-wishlist d-flex-center me-3"
                    href="wishlist-style1.html"
                    title="Add to Wishlist"
                  >
                    <i className="icon anm anm-heart-l me-1" />{" "}
                    <span>Add to Wishlist</span>
                  </a>
                  <a
                    className="add-compare d-flex-center"
                    href="compare-style1.html"
                    title="Add to Compare"
                  >
                    <i className="icon anm anm-random-r me-2" />{" "}
                    <span>Add to Compare</span>
                  </a>
                </div>
                {/* Social Sharing */}
                <div className="social-sharing share-icon d-flex-center mx-0 mt-3">
                  <span className="sharing-lbl">Share :</span>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-facebook"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share on Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                    <span className="share-title d-none">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-twitter"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tweet on Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                    <span className="share-title d-none">Tweet</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-pinterest"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pin on Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />{" "}
                    <span className="share-title d-none">Pin it</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-linkedin"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share on Instagram"
                  >
                    <i className="icon anm anm-linkedin-in" />
                    <span className="share-title d-none">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-whatsapp"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share on WhatsApp"
                  >
                    <i className="icon anm anm-envelope-l" />
                    <span className="share-title d-none">WhatsApp</span>
                  </a>
                  <a
                    href="#"
                    className="d-flex-center btn btn-link btn--share share-email"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share by Email"
                  >
                    <i className="icon anm anm-whatsapp" />
                    <span className="share-title d-none">Email</span>
                  </a>
                </div>
                {/* End Social Sharing */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Product Quickview Modal*/}
  </>
  )
}
