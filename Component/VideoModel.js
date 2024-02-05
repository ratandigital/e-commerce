import React from 'react'

export default function VideoModel() {
  return (
<>
  {/*Product Video Modal*/}
  <div
    className="productVideo-modal modal fade"
    id="productVideo_modal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
          <div className="ratio ratio-16x9 productVideo-wrap">
            <iframe
              src="http://www.youtube.com/embed/93A2jOW5Mog?rel=0"
              title="YouTube video"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*End Product Video Modal*/}
</>

  )
}
