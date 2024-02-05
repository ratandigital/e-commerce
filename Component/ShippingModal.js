import React from 'react'

export default function ShippingModal() {
  return (
    <>
    {/* Shipping Modal */}
    <div
      className="shippingInfo-modal modal fade"
      id="shippingInfo_modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div id="ShippingInfo" className="shippingInfo-wrap">
              <h4 className="pb-1">Delivery</h4>
              <ul className="checkmark-info mb-3">
                <li>Dispatch: Within 24 Hours</li>
                <li>1 Year Brand Warranty</li>
                <li>
                  Free shipping across all products on a minimum purchase of $50
                </li>
                <li>International delivery time - 7-10 business days</li>
                <li>Cash on delivery might be available</li>
                <li>Easy 30 days returns and exchanges</li>
                <li>All orders shipped with UPS Express</li>
                <li>All orders are shipped with a UPS tracking number</li>
              </ul>
              <h4 className="pt-1">Returns</h4>
              <p>
                If you do not like the product you can return it within 15 days -
                no questions asked. This excludes bodysuits, swimwear and
                clearance sale items. We have an easy and hassle free return
                policy. Please look at our Delivery &amp; Returns section for
                further information.
              </p>
              <h4 className="pt-1">Help</h4>
              <ul className="list-info">
                <li>
                  Give us a shout if you have any other questions and/or concerns.
                </li>
                <li className="my-1">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@example.com">
                    <span className="email">contact@example.com</span>
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:401234567890">(+40) 123 456 7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Shipping Modal*/}
  </>
  
  )
}
