import React from 'react'

export default function PageTite() {
  return (
    <div className="page-header text-center">
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
        <div className="page-title">
          <h1>Shop Masonry Grid</h1>
        </div>
        {/*Breadcrumbs*/}
        <div className="breadcrumbs">
          <a href="index.html" title="Back to the home page">
            Home
          </a>
          <span className="title">
            <i className="icon anm anm-angle-right-l" />
            Shop
          </span>
          <span className="main-title">
            <i className="icon anm anm-angle-right-l" />
            Shop Masonry Grid
          </span>
        </div>
        {/*End Breadcrumbs*/}
      </div>
    </div>
  </div>
</div>

  )
}
