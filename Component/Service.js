import React from 'react'

export default function Service() {
  return (
    <>
 {/*Service Section*/}
 <section className="section service-section pb-0">
        <div className="container">
          <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-phone-call-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Call us any time</h3>
                <span className="text-muted">Contact us 24/7 hours a day</span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-truck-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Pickup At Any Store</h3>
                <span className="text-muted">
                  Free shipping on orders over $65
                </span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-credit-card-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Secured Payment</h3>
                <span className="text-muted">
                  We accept all major credit cards
                </span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-redo-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Free Returns</h3>
                <span className="text-muted">30-days free return policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Service Section*/}
    </>
  )
}
