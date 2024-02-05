import React from 'react'

export default function Blog() {
  return (
    <>
        {/*Blog Post*/}
        <section className="section home-blog-post">
        <div className="container">
          <div className="section-header">
            <p className="mb-2 mt-0">Latest post</p>
            <h2>Most Recent News</h2>
          </div>
          <div className="blog-slider-3items gp15 arwOut5 hov-arrow">
            <div className="blog-item">
              <div className="blog-article zoomscal-hov">
                <div className="blog-img">
                  <a
                    className="featured-image zoom-scal"
                    href="blog-details.html"
                  >
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/post-img1.jpg"
                      src="assets/images/blog/post-img1.jpg"
                      alt="New shop collection our shop"
                      width={740}
                      height={410}
                    />
                  </a>
                  <div className="date">
                    <span className="dt">25</span>{" "}
                    <span className="mt">
                      Apr
                      <br /> <b>2023</b>
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h2 className="h3 mb-3">
                    <a href="blog-details.html">New shop collection our shop</a>
                  </h2>
                  <p className="content">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <a
                    href="blog-details.html"
                    className="btn btn-secondary btn-sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-item">
              <div className="blog-article zoomscal-hov">
                <div className="blog-img">
                  <a
                    className="featured-image zoom-scal"
                    href="blog-details.html"
                  >
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/post-img2.jpg"
                      src="assets/images/blog/post-img2.jpg"
                      alt="Gift ideas for everyone"
                      width={740}
                      height={410}
                    />
                  </a>
                  <div className="date">
                    <span className="dt">31</span>{" "}
                    <span className="mt">
                      Mar
                      <br /> <b>2023</b>
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h2 className="h3 mb-3">
                    <a href="blog-details.html">Gift ideas for everyone</a>
                  </h2>
                  <p className="content">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority suffered.
                  </p>
                  <a
                    href="blog-details.html"
                    className="btn btn-secondary btn-sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-item">
              <div className="blog-article zoomscal-hov">
                <div className="blog-img">
                  <a
                    className="featured-image zoom-scal"
                    href="blog-details.html"
                  >
                    <img
                      className="blur-up lazyload"
                      data-src="assets/images/blog/post-img3.jpg"
                      src="assets/images/blog/post-img3.jpg"
                      alt="Sales with best collection"
                      width={740}
                      height={410}
                    />
                  </a>
                  <div className="date">
                    <span className="dt">30</span>{" "}
                    <span className="mt">
                      Jan
                      <br /> <b>2023</b>
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <h2 className="h3 mb-3">
                    <a href="blog-details.html">Sales with best collection</a>
                  </h2>
                  <p className="content">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                  <a
                    href="blog-details.html"
                    className="btn btn-secondary btn-sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Blog Post*/}
    </>
  )
}
