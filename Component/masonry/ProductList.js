"use client"


import { useEffect, useState } from "react";

import React from 'react'

export default function ProductList() {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data)
  }

  useEffect(() => {
      fetchProducts()
  }, [])
  console.log(products)

  return (
   <>
        {/*Product Infinite*/}
        <div className="product-three-loadmore">
            {/*Product Grid*/}
            <div className="grid-products grid-view-items">
              <div className="row col-row product-options row-cols-md-3 row-cols-sm-3 row-cols-2">
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        <img
                          className="rounded-0 blur-up lazyload"
                          src="assets/images/products/product1.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                      </a>
                      {/* End Product Image */}
                      {/* Product label */}
                      <div className="product-labels">
                        <span className="lbl on-sale">Sale</span>
                      </div>
                      {/* End Product label */}
                      {/*Countdown Timer*/}
                      <div className="saleTime" data-countdown="2025/01/01" />
                      {/*End Countdown Timer*/}
                      {/*Product Button*/}
                      <div className="button-set style1">
                        {/*Cart Button*/}
                        <a
                          href="#quickshop-modal"
                          className="btn-icon addtocart quick-shop-modal"
                          data-bs-toggle="modal"
                          data-bs-target="#quickshop_modal"
                        >
                          <span
                            className="icon-wrap d-flex-justify-center h-100 w-100"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Quick Shop"
                          >
                            <i className="icon anm anm-cart-l" />
                            <span className="text">Quick Shop</span>
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Tops</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Oxford Cuban Shirt</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price old-price">$114.00</span>
                        <span className="price">$99.00</span>
                      </div>
                      {/* End Product Price */}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">3 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/*Color Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Navy"
                          >
                            <img
                              src="assets/images/products/product1.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Green"
                          >
                            <img
                              src="assets/images/products/product1-1.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Gray"
                          >
                            <img
                              src="assets/images/products/product1-2.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Orange"
                          >
                            <img
                              src="assets/images/products/product1-3.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#quickshop-modal"
                              className="btn btn-md quick-shop quick-shop-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickshop_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Quick Shop</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product2.jpg"
                          src="assets/images/products/product2.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product2-1.jpg"
                          src="assets/images/products/product2-1.jpg"
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
                          href="#quickshop-modal"
                          className="btn-icon addtocart quick-shop-modal"
                          data-bs-toggle="modal"
                          data-bs-target="#quickshop_modal"
                        >
                          <span
                            className="icon-wrap d-flex-justify-center h-100 w-100"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Select Options"
                          >
                            <i className="icon anm anm-cart-l" />
                            <span className="text">Select Options</span>
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Clothing</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Cuff Beanie Cap</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$128.00</span>
                      </div>
                      {/* End Product Price */}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <span className="caption hidden ms-1">8 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/*Color Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Navy"
                          >
                            <img
                              src="assets/images/products/product2.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Green"
                          >
                            <img
                              src="assets/images/products/product2-1.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Gray"
                          >
                            <img
                              src="assets/images/products/product2-2.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Orange"
                          >
                            <img
                              src="assets/images/products/product2-3.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Yellow"
                          >
                            <img
                              src="assets/images/products/product2-4.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                        <li className="swatch medium radius">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Blue"
                          >
                            <img
                              src="assets/images/products/product2-5.jpg"
                              alt="img"
                              width={625}
                              height={808}
                            />
                          </span>
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#quickshop-modal"
                              className="btn btn-md quick-shop quick-shop-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickshop_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Select Options</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product3.jpg"
                          src="assets/images/products/product3.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product3-1.jpg"
                          src="assets/images/products/product3-1.jpg"
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
                        <span className="lbl pr-label3">Trending</span>
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Footwear</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Flannel Collar Shirt</a>
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
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">10 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius red">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="red"
                          />
                        </li>
                        <li className="swatch medium radius orange">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="orange"
                          />
                        </li>
                        <li className="swatch medium radius yellow">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="yellow"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product4.jpg"
                          src="assets/images/products/product4.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product4-1.jpg"
                          src="assets/images/products/product4-1.jpg"
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
                        <span className="lbl on-sale">50% Off</span>
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Sunglasses</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Cotton Hooded Hoodie</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price old-price">$198.00</span>
                        <span className="price">$99.00</span>
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
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius black">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="black"
                          />
                        </li>
                        <li className="swatch medium radius navy">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="navy"
                          />
                        </li>
                        <li className="swatch medium radius darkgreen">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="darkgreen"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product5.jpg"
                          src="assets/images/products/product5.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product5-1.jpg"
                          src="assets/images/products/product5-1.jpg"
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
                        <span className="lbl pr-label2">Hot</span>
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Fashion</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Hooded Neck Hoodies</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$39.00</span>
                      </div>
                      {/* End Product Price */}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">3 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius black">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="black"
                          />
                        </li>
                        <li className="swatch medium radius maroon">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="maroon"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
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
                          className="hover rounded-0 blur-up lazyload"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Shoes</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Foldable Duffel Bag</a>
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
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius gray">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="gray"
                          />
                        </li>
                        <li className="swatch medium radius red">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="red"
                          />
                        </li>
                        <li className="swatch medium radius orange">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="orange"
                          />
                        </li>
                        <li className="swatch medium radius yellow">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="yellow"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal soldOutBtn disabled"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Out Of stock</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
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
                          className="hover rounded-0 blur-up lazyload"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Bags</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">High-Waisted Pant</a>
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
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius black">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="black"
                          />
                        </li>
                        <li className="swatch medium radius maroon">
                          <img
                            src="assets/images/products/swatches/blue-red.jpg"
                            alt="image"
                            width={70}
                            height={70}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="maroon"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
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
                          className="hover rounded-0 blur-up lazyload"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Electronic</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Narror Neck Tie</a>
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
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Variant */}
                      <ul className="variants-clr swatches">
                        <li className="swatch medium radius black">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="black"
                          />
                        </li>
                        <li className="swatch medium radius navy">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="navy"
                          />
                        </li>
                        <li className="swatch medium radius darkgreen">
                          <span
                            className="swatchLbl"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="darkgreen"
                          />
                        </li>
                      </ul>
                      {/* End Variant */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
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
                          className="hover rounded-0 blur-up lazyload"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Tools &amp; Parts</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Men's Cheater Jacket</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$99.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
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
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
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
                          className="hover rounded-0 blur-up lazyload"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Jewelry</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Casual Mustard Shirt</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$167.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
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
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product11.jpg"
                          src="assets/images/products/product11.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product11-1.jpg"
                          src="assets/images/products/product11-1.jpg"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Jeans</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Sleeve Round T-Shirt</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$154.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">19 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product12.jpg"
                          src="assets/images/products/product12.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product12-1.jpg"
                          src="assets/images/products/product12-1.jpg"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">T-Shirt</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Backpack Laptop Bag</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$121.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">6 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product13.jpg"
                          src="assets/images/products/product13.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product13-1.jpg"
                          src="assets/images/products/product13-1.jpg"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Mens</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Cotton Casual Tshirt</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$167.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">13 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product14.jpg"
                          src="assets/images/products/product14.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product14-1.jpg"
                          src="assets/images/products/product14-1.jpg"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Sneakers</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Ankle Casual Pants</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$125.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">20 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
                <div className="item col-item">
                  <div className="product-box">
                    {/* Start Product Image */}
                    <div className="product-image">
                      {/* Start Product Image */}
                      <a
                        href="/product-details"
                        className="product-img rounded-0"
                      >
                        {/* Image */}
                        <img
                          className="primary rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product15.jpg"
                          src="assets/images/products/product15.jpg"
                          alt="Product"
                          title="Product"
                          width={625}
                          height={808}
                        />
                        {/* End Image */}
                        {/* Hover Image */}
                        <img
                          className="hover rounded-0 blur-up lazyload"
                          data-src="assets/images/products/product15-1.jpg"
                          src="assets/images/products/product15-1.jpg"
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
                      {/*Product Vendor*/}
                      <div className="product-vendor">Dress</div>
                      {/*End Product Vendor*/}
                      {/* Product Name */}
                      <div className="product-name">
                        <a href="/product-details">Straight Fit Trousers</a>
                      </div>
                      {/* End Product Name */}
                      {/* Product Price */}
                      <div className="product-price">
                        <span className="price">$122.00</span>
                      </div>
                      {/* End Product Price */}
                      {/*Sort Description*/}
                      <p className="sort-desc hidden">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage...
                      </p>
                      {/*End Sort Description*/}
                      {/* Product Review */}
                      <div className="product-review">
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star" />
                        <i className="icon anm anm-star-o" />
                        <i className="icon anm anm-star-o" />
                        <span className="caption hidden ms-1">11 Reviews</span>
                      </div>
                      {/* End Product Review */}
                      {/* Product Button */}
                      <div className="button-action hidden">
                        <div className="addtocart-btn">
                          <form className="addtocart" action="#" method="post">
                            <a
                              href="#addtocart-modal"
                              className="btn btn-md add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <i className="icon anm anm-cart-l me-2" />
                              <span className="text">Add to Cart</span>
                            </a>
                          </form>
                        </div>
                      </div>
                      {/* End Product Button */}
                    </div>
                    {/* End product details */}
                  </div>
                </div>
              </div>
            </div>
            {/*End Product Grid*/}
            {/*Load More Button*/}
            <div className="infinitpaginOuter text-center mt-5">
              <div className="infiniteload">
                <a href="#" className="btn btn-xl loadMore3">
                  Load More
                </a>
              </div>
            </div>
            {/*End Load More Button*/}
          </div>
          {/*End Product Infinite*/}
   </>
  )
}
