/* Shared section, used on 33 pages. */
export default function PortfolioSection() {
  return (
    <>
      <section className="bg-1 clr-l portfolio port-slider mobile-hid">
        <div className="container">
          <div className="up-row">
            <div className="row text-center justify-content-center">
              <div className="col-lg-8 col-md-10"><h2 className="f-40">Our Featured Works</h2></div>
            </div>
            {" "}
            <div className="container-fluid center-div">
              <div className="col-md-12">
                <div className="portfolio-slider">
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/1.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/2.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/3.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/4.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/5.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/6.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/7.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/8.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/9.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/10.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/11.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/12.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/13.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/14.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/15.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/16.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/17.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/18.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/19.webp" /></div></div>
                  {" "}
                  <div className="item"><div className="gallery"><img src="/assets/img/mock/20.webp" /></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="container-fluid py-5 mn-clr cta-clmn">
          <div className="row text-center justify-content-center bk-div">
            <div className="col-xl-5">
              <h2 className="f-40 pb-head">
                {"EARN BEST SELLER STATUS BY CONNECTING WITH USA'S LEADING PUBLISHING SERVICES AND BOOK MARKETING SOLUTIONS. "}
              </h2>
            </div>
            {" "}
            <div className="col-xl-7">
              <p className="para-txt">
                {"Explore masterpieces our professional ghostwriters have carefully curated across different genres. Witness top tier creativity offered by our writers setting you apart from others "}
              </p>
              {" "}
              <div className="row">
                <div className="col-md-4 col-6">
                  <button className="w-100 mb-3 pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                </div>
                {" "}
                <div className="col-md-4 col-6">
                  <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center">
                    <span className="icon-phone ms-2 icon"></span>
                    {" "}
                    <span className="d-none d-md-block">
                      <span className="clr-2 fw-700">Call Now</span>
                      {" "}
                      <br />
                      {" "}
                      <span className="fw-700">{" (312) 278-2359 "}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
