import React from 'react'

export default function SideBar() {
  return (
    <>
     {/*Sidebar*/}
     <div className="col-12 col-sm-12 col-md-12 col-lg-3 sidebar sidebar-bg filterbar">
          <div className="closeFilter d-block d-lg-none">
            <i className="icon anm anm-times-r" />
          </div>
          <div className="sidebar-tags sidebar-sticky0 clearfix">
            {/*Categories*/}
            <div className="sidebar-widget clearfix categories filterBox filter-widget">
              <div className="widget-title">
                <h2>Categories</h2>
              </div>
              <div className="widget-content filterDD">
                <ul className="sidebar-categories scrollspy morelist clearfix">
                  <li className="lvl1 sub-level more-item">
                    <a href="#;" className="site-nav">
                      Clothing
                    </a>
                    <ul className="sublinks">
                      <li className="lvl2 sub-level sub-sub-level">
                        <a href="#;" className="site-nav">
                          Men
                        </a>
                        <ul className="sublinks">
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Shirt <span className="count">(25)</span>
                            </a>
                          </li>
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Jeans <span className="count">(6)</span>
                            </a>
                          </li>
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Shoes <span className="count">(9)</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Women <span className="count">(14)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Child <span className="count">(26)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 sub-level more-item">
                    <a href="#;" className="site-nav">
                      Jewellery
                    </a>
                    <ul className="sublinks">
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Ring <span className="count">(12)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Neckalses <span className="count">(15)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Eaarings <span className="count">(18)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Accessories <span className="count">(14)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Shoes <span className="count">(18)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Electronic <span className="count">(22)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Cosmetics <span className="count">(27)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Categories*/}
            {/*Price Filter*/}
            <div className="sidebar-widget filterBox filter-widget">
              <div className="widget-title">
                <h2>Price</h2>
              </div>
              <form
                className="widget-content price-filter filterDD"
                action="#"
                method="post"
              >
                <div id="slider-range" className="mt-2" />
                <div className="row">
                  <div className="col-6">
                    <input id="amount" type="text" />
                  </div>
                  <div className="col-6 text-right">
                    <button className="btn btn-sm">filter</button>
                  </div>
                </div>
              </form>
            </div>
            {/*End Price Filter*/}
            {/*Color Swatches*/}
            <div className="sidebar-widget filterBox filter-widget">
              <div className="widget-title">
                <h2>Color</h2>
              </div>
              <div className="widget-content filter-color filterDD">
                <ul className="swacth-list swatches d-flex-center clearfix pt-0">
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
                  <li className="swatch large radius available">
                    <img
                      src="assets/images/products/swatches/blue-red.jpg"
                      alt="image"
                      width={70}
                      height={70}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Red"
                    />
                  </li>
                  <li className="swatch large radius available black">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Black"
                    />
                  </li>
                  <li className="swatch large radius available red">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Red"
                    />
                  </li>
                  <li className="swatch large radius available blue">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Blue"
                    />
                  </li>
                  <li className="swatch large radius available pink">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Pink"
                    />
                  </li>
                  <li className="swatch large radius available gray">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Gray"
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
                  <li className="swatch large radius available orange">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Orange"
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
            </div>
            {/*End Color Swatches*/}
            {/*Size Swatches*/}
            <div className="sidebar-widget filterBox filter-widget">
              <div className="widget-title">
                <h2>Size</h2>
              </div>
              <div className="widget-content filter-size filterDD">
                <ul className="swacth-list size-swatches d-flex-center clearfix">
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
                  <li className="swatch large radius available">
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
                      title="X"
                    >
                      X
                    </span>
                  </li>
                  <li className="swatch large radius available active">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XL"
                    >
                      XL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XLL"
                    >
                      XLL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XXL"
                    >
                      XXL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={25}
                    >
                      25
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={35}
                    >
                      35
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={40}
                    >
                      40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Size Swatches*/}
            {/*Product Brands*/}
            <div className="sidebar-widget filterBox filter-widget brand-filter">
              <div className="widget-title">
                <h2>Brands</h2>
              </div>
              <div className="widget-content filterDD">
                <ul className="clearfix">
                  <li>
                    <input type="checkbox" defaultValue="avone" id="avone" />
                    <label htmlFor="avone">
                      <span />
                      Avone
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" defaultValue="diva" id="diva" />
                    <label htmlFor="diva">
                      <span />
                      Diva
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" defaultValue="optimal" id="optimal" />
                    <label htmlFor="optimal">
                      <span />
                      Optimal
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Product Brands*/}
            {/*Product Tags*/}
            <div className="sidebar-widget filterBox filter-widget product-tag">
              <div className="widget-title">
                <h2>Product Tags</h2>
              </div>
              <div className="widget-content filterDD">
                <ul className="tags-list product-tags d-flex-wrap clearfix" >
                  <li className="item active">
                    <a className="rounded-5" href="#">
                      Women
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Shoes
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Beauty
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Accessories
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      $100 - $400
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Above $800
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Black
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Blue
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      Red
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      M
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#" style={{color:'black'}}>
                      XS
                    </a>
                  </li>
                </ul>
                <span className="btn btn-sm brd-link btnview">View all</span>
              </div>
            </div>
            {/*End Product Tags*/}
            {/*Banner*/}
            <div className="sidebar-widget static-banner p-0">
              <a href="shop-left-sidebar.html">
                <img
                  className="rounded-0 blur-up lazyload"
                  data-src="assets/images/banners/shop-banner.jpg"
                  src="assets/images/banners/shop-banner.jpg"
                  alt="image"
                  width={274}
                  height={367}
                />
              </a>
            </div>
            {/*End Banner*/}
          </div>
        </div>
        {/*End Sidebar*/}
    </>
  )
}
