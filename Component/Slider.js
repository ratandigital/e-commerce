import React from 'react'

export default function Slider() {
  return (
    <>
 {/*Home Slideshow*/}
 <section className="slideshow slideshow-wrapper">
        <div className="home-slideshow slick-arrow-dots">
          <div className="slide">
            <div className="slideshow-wrap">
              <picture>
                <source
                  media="(max-width:767px)"
                  srcSet="assets/images/slideshow/demo1-banner1.jpg"
                  width={1150}
                  height={800}
                />
                <img
                  className="blur-up lazyload"
                  src="assets/images/slideshow/demo1-banner1.jpg"
                  alt="slideshow"
                  title=""
                  width={1920}
                  height={795}
                />
              </picture>
              <div className="container">
                <div className="slideshow-content slideshow-overlay middle-left">
                  <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                      <p className="ss-small-title">Elegant design</p>
                      <h2 className="ss-mega-title">
                        Making someone feel <br />
                        pretty is an art
                      </h2>
                      <p className="ss-sub-title xs-hide">
                        Perfectly designed to ensures ultimate comfort and style
                      </p>
                      <div className="ss-btnWrap">
                        <a
                          className="btn btn-primary"
                          href="shop-grid-view.html"
                        >
                          Shop Women
                        </a>
                        <a
                          className="btn btn-secondary"
                          href="shop-grid-view.html"
                        >
                          Shop Men
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slideshow-wrap">
              <picture>
                <source
                  media="(max-width:767px)"
                  srcSet="assets/images/slideshow/demo1-banner2.jpg"
                  width={1150}
                  height={800}
                />
                <img
                  className="blur-up lazyload"
                  src="assets/images/slideshow/demo1-banner2.jpg"
                  alt="slideshow"
                  title=""
                  width={1920}
                  height={795}
                />
              </picture>
              <div className="container">
                <div className="slideshow-content slideshow-overlay middle-right">
                  <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                      <h2 className="ss-mega-title">
                        Spread Positive <br />
                        Energy With Hema
                      </h2>
                      <p className="ss-sub-title xs-hide">
                        The must-have closet essential women wardrobe for the
                        year
                      </p>
                      <div className="ss-btnWrap d-flex-justify-start">
                        <a
                          className="btn btn-primary"
                          href="shop-grid-view.html"
                        >
                          Explore Now!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slideshow-wrap">
              <picture>
                <source
                  media="(max-width:767px)"
                  srcSet="assets/images/slideshow/demo1-banner3.jpg"
                  width={1150}
                  height={800}
                />
                <img
                  className="blur-up lazyload"
                  src="assets/images/slideshow/demo1-banner3.jpg"
                  alt="slideshow"
                  title=""
                  width={1920}
                  height={795}
                />
              </picture>
              <div className="container">
                <div className="slideshow-content slideshow-overlay middle-right">
                  <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                      <h2 className="ss-mega-title">
                        Design Your Next <br />
                        Favourite Wear
                      </h2>
                      <p className="ss-sub-title xs-hide">
                        The outfit that blend elegance and style for your casual
                        wear
                      </p>
                      <div className="ss-btnWrap">
                        <a
                          className="btn btn-primary"
                          href="shop-grid-view.html"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Home Slideshow*/}
    </>
  )
}
