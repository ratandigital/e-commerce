import React from 'react'

export default function ToolBar() {
  return (
   <>
      {/*Toolbar*/}
      <div className="toolbar toolbar-wrapper shop-toolbar">
            <div className="row align-items-center">
              <div className="col-4 col-sm-2 col-md-4 col-lg-4 text-left filters-toolbar-item d-flex order-1 order-sm-0">
                <button
                  type="button"
                  className="btn btn-filter icon anm anm-sliders-hr d-inline-flex d-lg-none me-2"
                >
                  <span className="d-none">Filter</span>
                </button>
                <div className="filters-item d-flex align-items-center">
                  <label className="mb-0 me-2 d-none d-lg-inline-block">
                    View as:
                  </label>
                  <div className="grid-options view-mode d-flex">
                    <a className="icon-mode mode-list d-block" data-col={1} />
                    <a
                      className="icon-mode mode-grid grid-2 d-block"
                      data-col={2}
                    />
                    <a
                      className="icon-mode mode-grid grid-3 d-md-block active"
                      data-col={3}
                    />
                    <a
                      className="icon-mode mode-grid grid-4 d-lg-block"
                      data-col={4}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center product-count order-0 order-md-1 mb-3 mb-sm-0">
                <span className="toolbar-product-count">
                  Showing: 15 products
                </span>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-4 text-right filters-toolbar-item d-flex justify-content-end order-2 order-sm-2">
                <div className="filters-item d-flex align-items-center">
                  <label
                    htmlFor="ShowBy"
                    className="mb-0 me-2 text-nowrap d-none d-sm-inline-flex"
                  >
                    Show:
                  </label>
                  <select
                    name="ShowBy"
                    id="ShowBy"
                    className="filters-toolbar-show"
                  >
                    <option value="title-ascending" selected="selected">
                      10
                    </option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                  </select>
                </div>
                <div className="filters-item d-flex align-items-center ms-2 ms-lg-3">
                  <label
                    htmlFor="SortBy"
                    className="mb-0 me-2 text-nowrap d-none"
                  >
                    Sort by:
                  </label>
                  <select
                    name="SortBy"
                    id="SortBy"
                    className="filters-toolbar-sort"
                  >
                    <option value="featured" selected="selected">
                      Featured
                    </option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/*End Toolbar*/}
   </>
  )
}
