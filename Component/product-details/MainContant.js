import React from 'react'
import ProductImage from '../ProductImage'

export default function MainContant() {
  return (
<>
  {/*Main Content*/}
  <div className="container">
    {/*Product Content*/}
    <div className="product-single">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-img mb-4 mb-md-0">
     <ProductImage/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 product-layout-info">
          {/* Product Details */}
          <div className="product-single-meta">
            <h2 className="product-main-title">Product Layout Style1</h2>
            {/* Product Reviews */}
            <div className="product-review d-flex-center mb-3">
              <div className="reviewStar d-flex-center">
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star-o" />
                <span className="caption ms-2">24 Reviews</span>
              </div>
              <a className="reviewLink d-flex-center" href="#reviews">
                Write a Review
              </a>
            </div>
            {/* End Product Reviews */}
            {/* Product Info */}
            <div className="product-info">
              <p className="product-stock d-flex">
                Availability:
                <span className="pro-stockLbl ps-0">
                  <span className="d-flex-center stockLbl instock text-uppercase">
                    In stock
                  </span>
                </span>
              </p>
              <p className="product-vendor">
                Vendor:
                <span className="text">
                  <a href="#">HVL</a>
                </span>
              </p>
              <p className="product-type">
                Product Type:<span className="text">Tops</span>
              </p>
              <p className="product-sku">
                SKU:<span className="text">RF104</span>
              </p>
            </div>
            {/* End Product Info */}
            {/* Product Price */}
            <div className="product-price d-flex-center my-3">
              <span className="price old-price">$135.00</span>
              <span className="price">$99.00</span>
            </div>
            {/* End Product Price */}
            <hr />
            {/* Sort Description */}
            <div className="sort-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            {/* End Sort Description */}
            <hr />
            {/* Countdown */}
            <h3 className="text-uppercase mb-0">Hurry up! Sales Ends In</h3>
            <div
              className="product-countdown d-flex-center text-center my-3"
              data-countdown="2028/12/12"
            />
            {/* End Countdown */}
          </div>
          {/* End Product Details */}
          {/* Product Form */}
          <form
            method="post"
            action="#"
            className="product-form product-form-border hidedropdown"
          >
            {/* Swatches */}
            <div className="product-swatches-option">
              {/* Swatches Color */}
              <div
                className="product-item swatches-image w-100 mb-4 swatch-0 option1"
                data-option-index={0}
              >
                <label className="label d-flex align-items-center">
                  Color:<span className="slVariant ms-1 fw-bold">Blue</span>
                </label>
                <ul className="variants-clr swatches d-flex-center pt-1 clearfix">
                  <li className="swatch x-large available active">
                    <img
                      src="assets/images/products/product1-1-80x.jpg"
                      alt="image"
                      width={80}
                      height={80}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Blue"
                    />
                  </li>
                  <li className="swatch x-large available">
                    <img
                      src="assets/images/products/product1-2-80x.jpg"
                      alt="image"
                      width={80}
                      height={80}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Black"
                    />
                  </li>
                  <li className="swatch x-large available purple">
                    <img
                      src="assets/images/products/product1-3-80x.jpg"
                      alt="image"
                      width={80}
                      height={80}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Purple"
                    />
                  </li>
                  <li className="swatch x-large available green">
                    <img
                      src="assets/images/products/product1-4-80x.jpg"
                      alt="image"
                      width={80}
                      height={80}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Green"
                    />
                  </li>
                  <li className="swatch x-large soldout yellow">
                    <img
                      src="assets/images/products/product1-5-80x.jpg"
                      alt="image"
                      width={80}
                      height={80}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Yellow"
                    />
                  </li>
                </ul>
              </div>
              {/* End Swatches Color */}
              {/* Swatches Size */}
              <div
                className="product-item swatches-size w-100 mb-4 swatch-1 option2"
                data-option-index={1}
              >
                <label className="label d-flex align-items-center">
                  Size:<span className="slVariant ms-1 fw-bold">S</span>{" "}
                  <a
                    href="#sizechart-modal"
                    className="text-link sizelink text-muted size-chart-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#sizechart_modal"
                  >
                    Size Guide
                  </a>
                </label>
                <ul className="variants-size size-swatches d-flex-center pt-1 clearfix">
                  <li className="swatch x-large soldout">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XS"
                    >
                      XS
                    </span>
                  </li>
                  <li className="swatch x-large available active">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="S"
                    >
                      S
                    </span>
                  </li>
                  <li className="swatch x-large available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="M"
                    >
                      M
                    </span>
                  </li>
                  <li className="swatch x-large available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="L"
                    >
                      L
                    </span>
                  </li>
                  <li className="swatch x-large available">
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
              {/* End Swatches Size */}
            </div>
            {/* End Swatches */}
            {/* Product Action */}
            <div className="product-action w-100 d-flex-wrap my-3 my-md-4">
              {/* Product Quantity */}
              <div className="product-form-quantity d-flex-center">
                <div className="qtyField">
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
              </div>
              {/* End Product Quantity */}
              {/* Product Add */}
              <div className="product-form-submit addcart fl-1 ms-3">
                <button
                  type="submit"
                  name="add"
                  className="btn btn-secondary product-form-cart-submit"
                >
                  <span>Add to cart</span>
                </button>
                <button
                  type="submit"
                  name="add"
                  className="btn btn-secondary product-form-sold-out d-none"
                  disabled="disabled"
                >
                  <span>Out of stock</span>
                </button>
                <button
                  type="submit"
                  name="add"
                  className="btn btn-secondary product-form-pre-order d-none"
                >
                  <span>Pre-order Now</span>
                </button>
              </div>
              {/* Product Add */}
              {/* Product Buy */}
              <div className="product-form-submit buyit fl-1 ms-3">
                <button
                  type="submit"
                  className="btn btn-primary proceed-to-checkout"
                >
                  <span>Buy it now</span>
                </button>
              </div>
              {/* End Product Buy */}
            </div>
            {/* End Product Action */}
            {/* Product Info link */}
            <p className="infolinks d-flex-center justify-content-between">
              <a className="text-link wishlist" href="wishlist-style1.html">
                <i className="icon anm anm-heart-l me-2" />{" "}
                <span>Add to Wishlist</span>
              </a>
              <a className="text-link compare" href="compare-style1.html">
                <i className="icon anm anm-sync-ar me-2" />{" "}
                <span>Add to Compare</span>
              </a>
              <a
                href="#shippingInfo-modal"
                className="text-link shippingInfo"
                data-bs-toggle="modal"
                data-bs-target="#shippingInfo_modal"
              >
                <i className="icon anm anm-paper-l-plane me-2" />{" "}
                <span>Delivery &amp; Returns</span>
              </a>
              <a
                href="#productInquiry-modal"
                className="text-link emaillink me-0"
                data-bs-toggle="modal"
                data-bs-target="#productInquiry_modal"
              >
                <i className="icon anm anm-question-cil me-2" />{" "}
                <span>Enquiry</span>
              </a>
            </p>
            {/* End Product Info link */}
          </form>
          {/* End Product Form */}
          {/* Product Info */}
          <div
            className="userViewMsg featureText"
            data-user={20}
            data-time={11000}
          >
            <i className="icon anm anm-eye-r" />
            <b className="uersView">21</b> People are Looking for this Product
          </div>
          <div className="shippingMsg featureText">
            <i className="icon anm anm-clock-r" />
            Estimated Delivery Between <b id="fromDate">Wed, May 1</b> and{" "}
            <b id="toDate">Tue, May 7</b>.
          </div>
          <div className="freeShipMsg featureText" data-price={199}>
            <i className="icon anm anm-truck-r" />
            Spent{" "}
            <b className="freeShip">
              <span
                className="money"
                data-currency-usd="$199.00"
                data-currency="USD"
              >
                $199.00
              </span>
            </b>{" "}
            More for Free shipping
          </div>
          {/* End Product Info */}
          {/* Social Sharing */}
          <div className="social-sharing d-flex-center mt-2 lh-lg">
            <span className="sharing-lbl fw-600">Share :</span>
            <a
              href="#"
              className="d-flex-center btn btn-link btn--share share-facebook"
            >
              <i className="icon anm anm-facebook-f" />
              <span className="share-title">Facebook</span>
            </a>
            <a
              href="#"
              className="d-flex-center btn btn-link btn--share share-twitter"
            >
              <i className="icon anm anm-twitter" />
              <span className="share-title">Tweet</span>
            </a>
            <a
              href="#"
              className="d-flex-center btn btn-link btn--share share-pinterest"
            >
              <i className="icon anm anm-pinterest-p" />{" "}
              <span className="share-title">Pin it</span>
            </a>
            <a
              href="#"
              className="d-flex-center btn btn-link btn--share share-linkedin"
            >
              <i className="icon anm anm-linkedin-in" />
              <span className="share-title">Linkedin</span>
            </a>
            <a
              href="#"
              className="d-flex-center btn btn-link btn--share share-email"
            >
              <i className="icon anm anm-envelope-l" />
              <span className="share-title">Email</span>
            </a>
          </div>
          {/* End Social Sharing */}
        </div>
      </div>
    </div>
    {/*Product Content*/}
    {/*Product Nav*/}
    <a
      href="product-layout7.html"
      className="product-nav prev-pro clr-none d-flex-center justify-content-between"
      title="Previous Product"
    >
      <span className="details">
        <span className="name">Oxford Cuban Shirt</span>
        <span className="price">$99.00</span>
      </span>
      <span className="img">
        <img
          src="assets/images/products/product1-120x170.jpg"
          alt="product"
          width={120}
          height={170}
        />
      </span>
    </a>
    <a
      href="product-layout2.html"
      className="product-nav next-pro clr-none d-flex-center justify-content-between"
      title="Next Product"
    >
      <span className="img">
        <img
          src="assets/images/products/product2-120x170.jpg"
          alt="product"
          width={120}
          height={170}
        />
      </span>
      <span className="details">
        <span className="name">Cuff Beanie Cap</span>
        <span className="price">$128</span>
      </span>
    </a>
    {/*End Product Nav*/}
    {/*Product Tabs*/}
    <div className="tabs-listing section pb-0">
      <ul className="product-tabs style2 list-unstyled d-flex-wrap d-flex-justify-center d-none d-md-flex">
        <li rel="description" className="active">
          <a className="tablink">Description</a>
        </li>
        <li rel="additionalInformation">
          <a className="tablink">Additional Information</a>
        </li>
        <li rel="size-chart">
          <a className="tablink">Size Chart</a>
        </li>
        <li rel="shipping-return">
          <a className="tablink">Shipping &amp; Return</a>
        </li>
        <li rel="reviews">
          <a className="tablink">Reviews</a>
        </li>
      </ul>
      <div className="tab-container">
        {/*Description*/}
        <h3 className="tabs-ac-style d-md-none active" rel="description">
          Description
        </h3>
        <div id="description" className="tab-content">
          <div className="product-description">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <h4 className="mb-3">Features</h4>
                <ul className="checkmark-info">
                  <li>
                    High quality fabric, very comfortable to touch and wear.
                  </li>
                  <li>
                    This cardigan sweater is cute for no reason,perfect for
                    travel and casual.
                  </li>
                  <li>
                    It can tie in front-is forgiving to you belly or tie behind.
                  </li>
                  <li>Light weight and perfect for layering.</li>
                </ul>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  data-src="assets/images/content/product-detail-img.jpg"
                  src="assets/images/content/product-detail-img.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
        {/*End Description*/}
        {/*Additional Information*/}
        <h3 className="tabs-ac-style d-md-none" rel="additionalInformation">
          Additional Information
        </h3>
        <div id="additionalInformation" className="tab-content">
          <div className="product-description">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-md-0">
                <div className="table-responsive">
                  <table className="table table-bordered align-middle table-part mb-0">
                    <tbody>
                      <tr>
                        <th>Color</th>
                        <td>Black, White, Blue, Red, Gray</td>
                      </tr>
                      <tr>
                        <th>Product Dimensions</th>
                        <td>15 x 15 x 3 cm; 250 Grams</td>
                      </tr>
                      <tr>
                        <th>Date First Available</th>
                        <td>14 May 2023</td>
                      </tr>
                      <tr>
                        <th>Manufacturer</th>
                        <td>Fashion and Retail Limited</td>
                      </tr>
                      <tr>
                        <th>Department</th>
                        <td>Men Shirt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Additional Information*/}
        {/*Size Chart*/}
        <h3 className="tabs-ac-style d-md-none" rel="size-chart">
          Size Chart
        </h3>
        <div id="size-chart" className="tab-content">
          <h4 className="mb-2">Ready to Wear Clothing</h4>
          <p className="mb-4">
            This is a standardised guide to give you an idea of what size you
            will need, however some brands may vary from these conversions.
          </p>
          <div className="size-chart-tbl table-responsive px-1">
            <table className="table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>XXS - XS</th>
                  <th>XS - S</th>
                  <th>S - M</th>
                  <th>M - L</th>
                  <th>L - XL</th>
                  <th>XL - XXL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>UK</th>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                  <td>14</td>
                  <td>16</td>
                </tr>
                <tr>
                  <th>US</th>
                  <td>2</td>
                  <td>4</td>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th>Italy (IT)</th>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                  <td>48</td>
                </tr>
                <tr>
                  <th>France (FR/EU)</th>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                </tr>
                <tr>
                  <th>Denmark</th>
                  <td>32</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                </tr>
                <tr>
                  <th>Russia</th>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                  <td>48</td>
                  <td>50</td>
                </tr>
                <tr>
                  <th>Germany</th>
                  <td>32</td>
                  <td>34</td>
                  <td>36</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                </tr>
                <tr>
                  <th>Japan</th>
                  <td>5</td>
                  <td>7</td>
                  <td>9</td>
                  <td>11</td>
                  <td>13</td>
                  <td>15</td>
                </tr>
                <tr>
                  <th>Australia</th>
                  <td>6</td>
                  <td>8</td>
                  <td>10</td>
                  <td>12</td>
                  <td>14</td>
                  <td>16</td>
                </tr>
                <tr>
                  <th>Korea</th>
                  <td>33</td>
                  <td>44</td>
                  <td>55</td>
                  <td>66</td>
                  <td>77</td>
                  <td>88</td>
                </tr>
                <tr>
                  <th>China</th>
                  <td>160/84</td>
                  <td>165/86</td>
                  <td>170/88</td>
                  <td>175/90</td>
                  <td>180/92</td>
                  <td>185/94</td>
                </tr>
                <tr>
                  <th>Jeans</th>
                  <td>24-25</td>
                  <td>26-27</td>
                  <td>27-28</td>
                  <td>29-30</td>
                  <td>31-32</td>
                  <td>32-33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*End Size Chart*/}
        {/*Shipping &amp; Return*/}
        <h3 className="tabs-ac-style d-md-none" rel="shipping-return">
          Shipping &amp; Return
        </h3>
        <div id="shipping-return" className="tab-content">
          <h4>Shipping &amp; Return</h4>
          <ul className="checkmark-info">
            <li>Dispatch: Within 24 Hours</li>
            <li>1 Year Brand Warranty</li>
            <li>
              Free shipping across all products on a minimum purchase of $50.
            </li>
            <li>International delivery time - 7-10 business days</li>
            <li>Cash on delivery might be available</li>
            <li>Easy 30 days returns and exchanges</li>
          </ul>
          <h4>Free and Easy Returns</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <h4>Special Financing</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage.
          </p>
        </div>
        {/*End Shipping &amp; Return*/}
        {/*Review*/}
        <h3 className="tabs-ac-style d-md-none" rel="reviews">
          Review
        </h3>
        <div id="reviews" className="tab-content">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
              <div className="ratings-main">
                <div className="avg-rating d-flex-center mb-3">
                  <h4 className="avg-mark">5.0</h4>
                  <div className="avg-content ms-3">
                    <p className="text-rating">Average Rating</p>
                    <div className="ratings-full product-review">
                      <a className="reviewLink d-flex-center" href="#reviews">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption ms-2">24 Ratings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ratings-list">
                  <div className="ratings-container d-flex align-items-center mt-1">
                    <div className="ratings-full product-review m-0">
                      <a
                        className="reviewLink d-flex align-items-center"
                        href="#reviews"
                      >
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                      </a>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={99}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "99%" }}
                      />
                    </div>
                    <div className="progress-value">99%</div>
                  </div>
                  <div className="ratings-container d-flex align-items-center mt-1">
                    <div className="ratings-full product-review m-0">
                      <a
                        className="reviewLink d-flex align-items-center"
                        href="#reviews"
                      >
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                      </a>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "75%" }}
                      />
                    </div>
                    <div className="progress-value">75%</div>
                  </div>
                  <div className="ratings-container d-flex align-items-center mt-1">
                    <div className="ratings-full product-review m-0">
                      <a
                        className="reviewLink d-flex align-items-center"
                        href="#reviews"
                      >
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                      </a>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      />
                    </div>
                    <div className="progress-value">50%</div>
                  </div>
                  <div className="ratings-container d-flex align-items-center mt-1">
                    <div className="ratings-full product-review m-0">
                      <a
                        className="reviewLink d-flex align-items-center"
                        href="#reviews"
                      >
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                      </a>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "25%" }}
                      />
                    </div>
                    <div className="progress-value">25%</div>
                  </div>
                  <div className="ratings-container d-flex align-items-center mt-1">
                    <div className="ratings-full product-review m-0">
                      <a
                        className="reviewLink d-flex align-items-center"
                        href="#reviews"
                      >
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                      </a>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={5}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "5%" }}
                      />
                    </div>
                    <div className="progress-value">05%</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="spr-reviews">
                <h3 className="spr-form-title">Customer Reviews</h3>
                <div className="review-inner">
                  <div className="spr-review d-flex w-100">
                    <div className="spr-review-profile flex-shrink-0">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/users/user-img1.jpg"
                        src="assets/images/users/user-img1.jpg"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="spr-review-content flex-grow-1">
                      <div className="d-flex justify-content-between flex-column mb-2">
                        <div className="title-review d-flex align-items-center justify-content-between">
                          <h5 className="spr-review-header-title text-transform-none mb-0">
                            Eleanor Pena
                          </h5>
                          <span className="product-review spr-starratings m-0">
                            <span className="reviewLink">
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                            </span>
                          </span>
                        </div>
                      </div>
                      <b className="head-font">Good and High quality</b>
                      <p className="spr-review-body">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                      </p>
                    </div>
                  </div>
                  <div className="spr-review d-flex w-100">
                    <div className="spr-review-profile flex-shrink-0">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/users/testimonial1.jpg"
                        src="assets/images/users/testimonial1.jpg"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="spr-review-content flex-grow-1">
                      <div className="d-flex justify-content-between flex-column mb-2">
                        <div className="title-review d-flex align-items-center justify-content-between">
                          <h5 className="spr-review-header-title text-transform-none mb-0">
                            Courtney Henry
                          </h5>
                          <span className="product-review spr-starratings m-0">
                            <span className="reviewLink">
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star" />
                              <i className="icon anm anm-star-o" />
                              <i className="icon anm anm-star-o" />
                            </span>
                          </span>
                        </div>
                      </div>
                      <b className="head-font">Feature Availability</b>
                      <p className="spr-review-body">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
              <form
                method="post"
                action="#"
                className="product-review-form new-review-form"
              >
                <h3 className="spr-form-title">Write a Review</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <fieldset className="row spr-form-contact">
                  <div className="col-sm-6 spr-form-contact-name form-group">
                    <label className="spr-form-label" htmlFor="nickname">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      className="spr-form-input spr-form-input-text"
                      id="nickname"
                      type="text"
                      name="name"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6 spr-form-contact-email form-group">
                    <label className="spr-form-label" htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      className="spr-form-input spr-form-input-email "
                      id="email"
                      type="email"
                      name="email"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6 spr-form-review-title form-group">
                    <label className="spr-form-label" htmlFor="review">
                      Review Title{" "}
                    </label>
                    <input
                      className="spr-form-input spr-form-input-text "
                      id="review"
                      type="text"
                      name="review"
                    />
                  </div>
                  <div className="col-sm-6 spr-form-review-rating form-group">
                    <label className="spr-form-label">Rating</label>
                    <div className="product-review pt-1">
                      <div className="review-rating">
                        <a href="#;">
                          <i className="icon anm anm-star-o" />
                        </a>
                        <a href="#;">
                          <i className="icon anm anm-star-o" />
                        </a>
                        <a href="#;">
                          <i className="icon anm anm-star-o" />
                        </a>
                        <a href="#;">
                          <i className="icon anm anm-star-o" />
                        </a>
                        <a href="#;">
                          <i className="icon anm anm-star-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 spr-form-review-body form-group">
                    <label className="spr-form-label" htmlFor="message">
                      Body of Review{" "}
                      <span className="spr-form-review-body-charactersremaining">
                        (1500) characters remaining
                      </span>
                    </label>
                    <div className="spr-form-input">
                      <textarea
                        className="spr-form-input spr-form-input-textarea"
                        id="message"
                        name="message"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </fieldset>
                <div className="spr-form-actions clearfix">
                  <input
                    type="submit"
                    className="btn btn-primary spr-button spr-button-primary"
                    defaultValue="Submit Review"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*End Review*/}
      </div>
    </div>
    {/*End Product Tabs*/}
  </div>
  {/*End Main Content*/}
</>


  )
}
