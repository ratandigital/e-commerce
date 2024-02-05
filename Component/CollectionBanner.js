import React from 'react'

export default function CollectionBanner() {
  return (
    <>
      {/*Collection banner*/}
      <section className="section collection-banners pb-0">
        <div className="container">
          <div className="collection-banner-grid">
            <div className="row sp-row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 collection-banner-item">
                <div className="collection-item sp-col">
                  <a href="shop-left-sidebar.html" className="zoom-scal">
                    <div className="img">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/collection/demo1-ct-img1.jpg"
                        src="assets/images/collection/demo1-ct-img1.jpg"
                        alt="Women Wear"
                        title="Women Wear"
                        width={645}
                        height={723}
                      />
                    </div>
                    <div className="details middle-right">
                      <div className="inner">
                        <p className="mb-2">Trending Now</p>
                        <h3 className="title">Women Wear</h3>
                        <span className="btn btn-outline-secondary btn-md">
                          Shop Now
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 collection-banner-item">
                <div className="collection-item sp-col">
                  <a href="shop-left-sidebar.html" className="zoom-scal">
                    <div className="img">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/collection/demo1-ct-img2.jpg"
                        src="assets/images/collection/demo1-ct-img2.jpg"
                        alt="Mens Wear"
                        title="Mens Wear"
                        width={645}
                        height={344}
                      />
                    </div>
                    <div className="details middle-left">
                      <div className="inner">
                        <h3 className="title mb-2">Mens Wear</h3>
                        <p className="mb-3">Tailor-made with passion</p>
                        <span className="btn btn-outline-secondary btn-md">
                          Shop Now
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="collection-item sp-col">
                  <a href="shop-left-sidebar.html" className="zoom-scal">
                    <div className="img">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/collection/demo1-ct-img3.jpg"
                        src="assets/images/collection/demo1-ct-img3.jpg"
                        alt="Kids Wear"
                        title="Kids Wear"
                        width={645}
                        height={349}
                      />
                    </div>
                    <div className="details middle-right">
                      <div className="inner">
                        <p className="mb-2">Buy one get one free</p>
                        <h3 className="title">Kids Wear</h3>
                        <span className="btn btn-outline-secondary btn-md">
                          Shop Now
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Collection banner*/}
    </>
  )
}
