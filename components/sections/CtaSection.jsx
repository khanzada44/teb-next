/* Shared section, used on 34 pages. */
export default function CtaSection() {
  return (
    <>
      <section className="position-relative pt-lg-5 mb-5">
        <div className="col-xl-3 col-lg-4 d-none d-lg-block">
          <img className="lozad cta-left" data-src="/assets/img/new/women.png" alt="Call The Ebook publisher" />
        </div>
        {" "}
        <div className="cta lozad bg clr-l" data-background-image="/assets/img/bookwriting-banner.webp">
          <div className="overlay">
            <div className="container-fluid">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-xl-6 col-lg-9 col-11 align-self-center py-5 text-xl-center text-lg-start text-center">
                  <h2 className="f-40">
                    {" Easily available for best book publishing platforms, individual plans for publishing,strategic book marketing services"}
                  </h2>
                  {" "}
                  <p>
                    As one of the leading book publishers for first-time authors, The Ebook Publisher is your go-to partner to bring your writing into the spotlight. Get in touch today and let your ideas inspire readers across the globe.
                  </p>
                  {" "}
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-3">
                      <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center justify-content-end text-end">
                        <span className="d-none d-md-block">
                          <span className="clr-2 fw-700">Speak with Us</span>
                          <br />
                          <span className="fw-700">(312) 278-2359</span>
                        </span>
                        <span className="icon-phone ms-2 icon"></span>
                      </a>
                    </div>
                    {" "}
                    <div className="col-md-4 col-6">
                      <button className="w-100 mb-3 pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                    </div>
                    {" "}
                    <div className="col-md-4 col-3">
                      <span className="chat icona text-start d-flex align-items-center justify-content-start">
                        <span className="icon-chat me-2 icon"></span>
                        <span className="d-none d-md-block">
                          <span className="clr-2 fw-700">{"We’re Here "}</span>
                          <br />
                          <span className="fw-700">Let’s Talk Live</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="col-xl-3 col-lg-2 d-none d-xl-block align-self-end">
                  <img className="lozad" data-src="/assets/img/call-hand.webp" alt="The World Awaits to read your wonderful stories! By The Ebook publisher" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
