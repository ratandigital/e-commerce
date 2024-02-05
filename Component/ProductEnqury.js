import React from 'react'

export default function ProductEnqury() {
  return (
    <>
    {/*Product Enuiry Modal*/}
    <div
      className="productInquiry-modal modal fade"
      id="productInquiry_modal"
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
            <div id="productInquiry" className="productInquiry-wrap">
              <div className="page-title">
                <h3 className="mb-3">Product Inquiry Popup</h3>
              </div>
              <form
                method="post"
                action="#"
                id="productInquiry_form"
                className="productInquiry-form form-vertical"
              >
                <div className="form-row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="ContactFormName"
                        name="contact[name]"
                        placeholder="Name"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="ContactFormEmail"
                        name="contact[email]"
                        placeholder="Email"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="ContactFormPhone"
                        name="contact[phone]"
                        pattern="[0-9\-]*"
                        placeholder="Phone Number"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="ContactFormSubject"
                        name="contact[subject]"
                        placeholder="Subject"
                        defaultValue=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea
                        rows={4}
                        id="ContactFormMessage"
                        name="contact[body]"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <input
                      type="submit"
                      className="btn btn-lg w-100"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Product Enuiry Modal*/}
  </>
  
  )
}
