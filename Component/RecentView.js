import React from 'react'

export default function RecentView() {
  return (
    <>
  {/*Recently Viewed Products*/}
  <section className="section product-slider pb-0">
    <div className="container">
      <div className="section-header">
        <p className="mb-1 mt-0">Browse Bestseller</p>
        <h2>You may also like</h2>
      </div>
      {/*Product Grid*/}
      <div className="product-slider-4items gp10 arwOut5 grid-products">
        <div className="item col-item">
          <div className="product-box">
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img">
                {/* Image */}
                <img
                  className="primary blur-up lazyload"
                  data-src="assets/images/products/product6.jpg"
                  src="assets/images/products/product6.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Image */}
                {/* Hover Image */}
                <img
                  className="hover blur-up lazyload"
                  data-src="assets/images/products/product6-1.jpg"
                  src="assets/images/products/product6-1.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Hover Image */}
              </a>
              {/* End Product Image */}
              {/* Product label */}
              <div className="product-labels">
                <span className="lbl on-sale">Sold out</span>
              </div>
              {/* End Product label */}
              {/*Product Button*/}
              <div className="button-set style1">
                {/*Cart Button*/}
                <a
                  href="#addtocart-modal"
                  className="btn-icon addtocart add-to-cart-modal soldOutBtn disabled"
                  data-bs-toggle="modal"
                  data-bs-target="#addtocart_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Out Of stock"
                  >
                    <i className="icon anm anm-cart-l" />
                    <span className="text">Add to Cart</span>
                  </span>
                </a>
                {/*End Cart Button*/}
                {/*Quick View Button*/}
                <a
                  href="#quickview-modal"
                  className="btn-icon quickview quick-view-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#quickview_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Quick View"
                  >
                    <i className="icon anm anm-search-plus-l" />
                    <span className="text">Quick View</span>
                  </span>
                </a>
                {/*End Quick View Button*/}
                {/*Wishlist Button*/}
                <a
                  href="wishlist-style2.html"
                  className="btn-icon wishlist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add To Wishlist"
                >
                  <i className="icon anm anm-heart-l" />
                  <span className="text">Add To Wishlist</span>
                </a>
                {/*End Wishlist Button*/}
                {/*Compare Button*/}
                <a
                  href="compare-style2.html"
                  className="btn-icon compare"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to Compare"
                >
                  <i className="icon anm anm-random-r" />
                  <span className="text">Add to Compare</span>
                </a>
                {/*End Compare Button*/}
              </div>
              {/*End Product Button*/}
            </div>
            {/* End Product Image */}
            {/* Start Product Details */}
            <div className="product-details text-left">
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">Foldable Duffel Bag</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price">$299.00</span>
              </div>
              {/* End Product Price */}
              {/* Product Review */}
              <div className="product-review">
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <span className="caption hidden ms-1">15 Reviews</span>
              </div>
              {/* End Product Review */}
            </div>
            {/* End product details */}
          </div>
        </div>
        <div className="item col-item">
          <div className="product-box">
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img">
                {/* Image */}
                <img
                  className="primary blur-up lazyload"
                  data-src="assets/images/products/product7.jpg"
                  src="assets/images/products/product7.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Image */}
                {/* Hover Image */}
                <img
                  className="hover blur-up lazyload"
                  data-src="assets/images/products/product7-1.jpg"
                  src="assets/images/products/product7-1.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Hover Image */}
              </a>
              {/* End Product Image */}
              {/* Product label */}
              <div className="product-labels">
                <span className="lbl pr-label1">Best seller</span>
              </div>
              {/* End Product label */}
              {/*Product Button*/}
              <div className="button-set style1">
                {/*Cart Button*/}
                <a
                  href="#addtocart-modal"
                  className="btn-icon addtocart add-to-cart-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#addtocart_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Cart"
                  >
                    <i className="icon anm anm-cart-l" />
                    <span className="text">Add to Cart</span>
                  </span>
                </a>
                {/*End Cart Button*/}
                {/*Quick View Button*/}
                <a
                  href="#quickview-modal"
                  className="btn-icon quickview quick-view-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#quickview_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Quick View"
                  >
                    <i className="icon anm anm-search-plus-l" />
                    <span className="text">Quick View</span>
                  </span>
                </a>
                {/*End Quick View Button*/}
                {/*Wishlist Button*/}
                <a
                  href="wishlist-style2.html"
                  className="btn-icon wishlist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add To Wishlist"
                >
                  <i className="icon anm anm-heart-l" />
                  <span className="text">Add To Wishlist</span>
                </a>
                {/*End Wishlist Button*/}
                {/*Compare Button*/}
                <a
                  href="compare-style2.html"
                  className="btn-icon compare"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to Compare"
                >
                  <i className="icon anm anm-random-r" />
                  <span className="text">Add to Compare</span>
                </a>
                {/*End Compare Button*/}
              </div>
              {/*End Product Button*/}
            </div>
            {/* End Product Image */}
            {/* Start Product Details */}
            <div className="product-details text-left">
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">High-Waisted Pant</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price">$139.00</span>
              </div>
              {/* End Product Price */}
              {/* Product Review */}
              <div className="product-review">
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <span className="caption hidden ms-1">11 Reviews</span>
              </div>
              {/* End Product Review */}
            </div>
            {/* End product details */}
          </div>
        </div>
        <div className="item col-item">
          <div className="product-box">
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img">
                {/* Image */}
                <img
                  className="primary blur-up lazyload"
                  data-src="assets/images/products/product8.jpg"
                  src="assets/images/products/product8.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Image */}
                {/* Hover Image */}
                <img
                  className="hover blur-up lazyload"
                  data-src="assets/images/products/product8-1.jpg"
                  src="assets/images/products/product8-1.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Hover Image */}
              </a>
              {/* End Product Image */}
              {/*Product Button*/}
              <div className="button-set style1">
                {/*Cart Button*/}
                <a
                  href="#addtocart-modal"
                  className="btn-icon addtocart add-to-cart-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#addtocart_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Cart"
                  >
                    <i className="icon anm anm-cart-l" />
                    <span className="text">Add to Cart</span>
                  </span>
                </a>
                {/*End Cart Button*/}
                {/*Quick View Button*/}
                <a
                  href="#quickview-modal"
                  className="btn-icon quickview quick-view-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#quickview_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Quick View"
                  >
                    <i className="icon anm anm-search-plus-l" />
                    <span className="text">Quick View</span>
                  </span>
                </a>
                {/*End Quick View Button*/}
                {/*Wishlist Button*/}
                <a
                  href="wishlist-style2.html"
                  className="btn-icon wishlist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add To Wishlist"
                >
                  <i className="icon anm anm-heart-l" />
                  <span className="text">Add To Wishlist</span>
                </a>
                {/*End Wishlist Button*/}
                {/*Compare Button*/}
                <a
                  href="compare-style2.html"
                  className="btn-icon compare"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to Compare"
                >
                  <i className="icon anm anm-random-r" />
                  <span className="text">Add to Compare</span>
                </a>
                {/*End Compare Button*/}
              </div>
              {/*End Product Button*/}
            </div>
            {/* End Product Image */}
            {/* Start Product Details */}
            <div className="product-details text-left">
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">Narror Neck Tie</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price">$134.00</span>
              </div>
              {/* End Product Price */}
              {/* Product Review */}
              <div className="product-review">
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <span className="caption hidden ms-1">0 Reviews</span>
              </div>
              {/* End Product Review */}
            </div>
            {/* End product details */}
          </div>
        </div>
        <div className="item col-item">
          <div className="product-box">
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img">
                {/* Image */}
                <img
                  className="primary blur-up lazyload"
                  data-src="assets/images/products/product9.jpg"
                  src="assets/images/products/product9.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Image */}
                {/* Hover Image */}
                <img
                  className="hover blur-up lazyload"
                  data-src="assets/images/products/product9-1.jpg"
                  src="assets/images/products/product9-1.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Hover Image */}
              </a>
              {/* End Product Image */}
              {/* Product label */}
              <div className="product-labels">
                <span className="lbl pr-label4">Popular</span>
              </div>
              {/* End Product label */}
              {/*Product Button*/}
              <div className="button-set style1">
                {/*Cart Button*/}
                <a
                  href="#addtocart-modal"
                  className="btn-icon addtocart add-to-cart-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#addtocart_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Cart"
                  >
                    <i className="icon anm anm-cart-l" />
                    <span className="text">Add to Cart</span>
                  </span>
                </a>
                {/*End Cart Button*/}
                {/*Quick View Button*/}
                <a
                  href="#quickview-modal"
                  className="btn-icon quickview quick-view-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#quickview_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Quick View"
                  >
                    <i className="icon anm anm-search-plus-l" />
                    <span className="text">Quick View</span>
                  </span>
                </a>
                {/*End Quick View Button*/}
                {/*Wishlist Button*/}
                <a
                  href="wishlist-style2.html"
                  className="btn-icon wishlist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add To Wishlist"
                >
                  <i className="icon anm anm-heart-l" />
                  <span className="text">Add To Wishlist</span>
                </a>
                {/*End Wishlist Button*/}
                {/*Compare Button*/}
                <a
                  href="compare-style2.html"
                  className="btn-icon compare"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to Compare"
                >
                  <i className="icon anm anm-random-r" />
                  <span className="text">Add to Compare</span>
                </a>
                {/*End Compare Button*/}
              </div>
              {/*End Product Button*/}
            </div>
            {/* End Product Image */}
            {/* Start Product Details */}
            <div className="product-details text-left">
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">Men's Cheater Jacket</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price">$99.00</span>
              </div>
              {/* End Product Price */}
              {/* Product Review */}
              <div className="product-review">
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star-o" />
                <i className="icon anm anm-star-o" />
                <span className="caption hidden ms-1">19 Reviews</span>
              </div>
              {/* End Product Review */}
            </div>
            {/* End product details */}
          </div>
        </div>
        <div className="item col-item">
          <div className="product-box">
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img">
                {/* Image */}
                <img
                  className="primary blur-up lazyload"
                  data-src="assets/images/products/product10.jpg"
                  src="assets/images/products/product10.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Image */}
                {/* Hover Image */}
                <img
                  className="hover blur-up lazyload"
                  data-src="assets/images/products/product10-1.jpg"
                  src="assets/images/products/product10-1.jpg"
                  alt="Product"
                  title="Product"
                  width={625}
                  height={808}
                />
                {/* End Hover Image */}
              </a>
              {/* End Product Image */}
              {/*Product Button*/}
              <div className="button-set style1">
                {/*Cart Button*/}
                <a
                  href="#addtocart-modal"
                  className="btn-icon addtocart add-to-cart-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#addtocart_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Cart"
                  >
                    <i className="icon anm anm-cart-l" />
                    <span className="text">Add to Cart</span>
                  </span>
                </a>
                {/*End Cart Button*/}
                {/*Quick View Button*/}
                <a
                  href="#quickview-modal"
                  className="btn-icon quickview quick-view-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#quickview_modal"
                >
                  <span
                    className="icon-wrap d-flex-justify-center h-100 w-100"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Quick View"
                  >
                    <i className="icon anm anm-search-plus-l" />
                    <span className="text">Quick View</span>
                  </span>
                </a>
                {/*End Quick View Button*/}
                {/*Wishlist Button*/}
                <a
                  href="wishlist-style2.html"
                  className="btn-icon wishlist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add To Wishlist"
                >
                  <i className="icon anm anm-heart-l" />
                  <span className="text">Add To Wishlist</span>
                </a>
                {/*End Wishlist Button*/}
                {/*Compare Button*/}
                <a
                  href="compare-style2.html"
                  className="btn-icon compare"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Add to Compare"
                >
                  <i className="icon anm anm-random-r" />
                  <span className="text">Add to Compare</span>
                </a>
                {/*End Compare Button*/}
              </div>
              {/*End Product Button*/}
            </div>
            {/* End Product Image */}
            {/* Start Product Details */}
            <div className="product-details text-left">
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">Casual Mustard Shirt</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price">$167.00</span>
              </div>
              {/* End Product Price */}
              {/* Product Review */}
              <div className="product-review">
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <i className="icon anm anm-star" />
                <span className="caption hidden ms-1">7 Reviews</span>
              </div>
              {/* End Product Review */}
            </div>
            {/* End product details */}
          </div>
        </div>
      </div>
      {/*End Product Grid*/}
    </div>
  </section>
  {/*End Recently Viewed Products*/}
</>

  )
}
