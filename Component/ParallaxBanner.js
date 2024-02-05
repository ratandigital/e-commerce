import React from 'react'

export default function ParallaxBanner() {
  return (
<>
   {/*Parallax Banner*/}
   <div className="section parallax-banner-style1 py-0">
        <div className="hero hero-large hero-overlay bg-size">
          <img
            className="bg-img"
            src="assets/images/parallax/demo1-sale-banner.jpg"
            alt="Clearance Sale - Flat 50% Off"
            width={1920}
            height={645}
          />
          <div className="hero-inner d-flex-justify-center">
            <div className="container">
              <div className="wrap-text center text-white">
                <h1 className="hero-title text-white">
                  Clearance Sale - Flat 50% Off
                </h1>
                <p className="hero-subtitle h3 text-white">
                  Sale will end soon in
                </p>
                {/*Countdown Timer*/}
                <div
                  className="hero-saleTime d-flex-center text-center justify-content-center"
                  data-countdown="2028/10/01"
                />
                {/*End Countdown Timer*/}
                <p className="hero-details">
                  Hema Multipurpose Template that will give you and your
                  customers a smooth shopping experience which can be used for
                  various kinds of stores such as fashion.
                </p>
                <a
                  href="shop-left-sidebar.html"
                  className="hero-btn btn btn-light"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Parallax Banner*/}
</>
  )
}
