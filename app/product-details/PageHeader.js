import React from 'react'

export default function PageHeader() {
  return (
    <>
    {/*Page Header*/}
    <div className="page-header text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            {/*Breadcrumbs*/}
            <div className="breadcrumbs">
              <a href="index.html" title="Back to the home page">
                Home
              </a>
              <span className="main-title fw-bold">
                <i className="icon anm anm-angle-right-l" />
                Product Layout1
              </span>
            </div>
            {/*End Breadcrumbs*/}
          </div>
        </div>
      </div>
    </div>
    {/*End Page Header*/}
  </>
  
  )
}
