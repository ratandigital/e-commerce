import React from 'react'

export default function Footer() {
  return (
  <>
      {/*Footer*/}
      <div className="footer">
      <div className="newsletterbg clearfix">
        <div className="container">
          <form action="#" method="post" className="footer-newsletter">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 mb-md-0">
                <label className="h3 mb-1 clr-none">
                  Sign Up Our Newsletter &amp; Get 10% OFF
                </label>
                <p>
                  Sign up to stay in the loop. Receive updates, access to
                  exclusive deals, and more.
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control input-group-field newsletter-input"
                    name="email"
                    defaultValue=""
                    placeholder="Enter your email address..."
                    required=""
                  />
                  <button
                    type="submit"
                    className="input-group-btn btn btn-secondary newsletter-submit"
                    name="commit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-top clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Informations</h4>
              <ul>
                <li>
                  <a href="my-account.html">My Account</a>
                </li>
                <li>
                  <a href="aboutus-style1.html">About us</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; condition</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Quick Shop</h4>
              <ul>
                <li>
                  <a href="#">Bags &amp; Accessories</a>
                </li>
                <li>
                  <a href="#">Tools &amp; Parts</a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Jewelry</a>
                </li>
                <li>
                  <a href="#">Cosmetics</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
              <h4 className="h4">Customer Services</h4>
              <ul>
                <li>
                  <a href="#">Request Personal Data</a>
                </li>
                <li>
                  <a href="faqs-style1.html">FAQ's</a>
                </li>
                <li>
                  <a href="contact-style1.html">Contact Us</a>
                </li>
                <li>
                  <a href="#">Orders and Returns</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-contact">
              <h4 className="h4">Contact Us</h4>
              <p className="address d-flex">
                <i className="icon anm anm-map-marker-al pt-1" /> 55 Gallaxy
                Enque, 2568 steet, 23568 NY
              </p>
              <p className="phone d-flex align-items-center">
                <i className="icon anm anm-phone-l" />{" "}
                <b className="me-1 d-none">Phone:</b>{" "}
                <a href="tel:401234567890">(+40) 123 456 7890</a>
              </p>
              <p className="email d-flex align-items-center">
                <i className="icon anm anm-envelope-l" />{" "}
                <b className="me-1 d-none">Email:</b>{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <ul className="list-inline social-icons mt-3">
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Linkedin"
                  >
                    <i className="icon anm anm-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="icon anm anm-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Youtube"
                  >
                    <i className="icon anm anm-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom clearfix">
        <div className="container">
          <div className="d-flex-center flex-column justify-content-md-between flex-md-row-reverse">
            <ul className="payment-icons d-flex-center mb-2 mb-md-0">
              <li>
                <i className="icon anm anm-cc-visa" />
              </li>
              <li>
                <i className="icon anm anm-cc-mastercard" />
              </li>
              <li>
                <i className="icon anm anm-cc-amex" />
              </li>
              <li>
                <i className="icon anm anm-cc-paypal" />
              </li>
              <li>
                <i className="icon anm anm-cc-discover" />
              </li>
              <li>
                <i className="icon anm anm-cc-stripe" />
              </li>
              <li>
                <i className="icon anm anm-cc-jcb" />
              </li>
            </ul>
            <div className="copytext">© 2023 Hema. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
    {/*End Footer*/}
  </>
  )
}
