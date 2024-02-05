import React from 'react'

export default function NewslatterModel() {

  return (
<>
    {/*Newsletter Modal*/}
    <div
      className="newsletter-modal style3 modal fade"
      id="newsletter_modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body p-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="newsletter-wrap d-flex flex-column">
              <div className="newsltr-img d-none d-sm-none d-md-block">
                <img
                  className="rounded-bottom-0 blur-up lazyload"
                  data-src="assets/images/newsletter/newsletter-s6.webp"
                  src="assets/images/newsletter/newsletter-s6.webp"
                  alt="Join Our Newsletter Get 20% OFF First Order"
                  title="Join Our Newsletter Get 20% OFF First Order"
                  width={582}
                  height={202}
                />
              </div>
              <div className="newsltr-text text-center">
                <div className="wraptext mw-100">
                  <h2 className="title text-transform-none">
                    Join Our Newsletter <br />
                    Get 20% OFF First Order
                  </h2>
                  <p className="text">
                    Stay Informed! Monthly Tips, Tracks and Discount.
                  </p>
                  <form action="#" method="post" className="mcNewsletter mb-3">
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
                  </form>
                  <ul className="list-inline social-icons d-inline-flex justify-content-center mb-3 w-100">
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
                  <div className="customCheckbox checkboxlink clearfix justify-content-center">
                    <input id="dontshow" name="newsPopup" type="checkbox" />
                    <label htmlFor="dontshow" className="mb-0">
                      Don't show this popup again
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Newsletter Modal*/}
</>
  )
}
