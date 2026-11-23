/* Site header and navigation (same on every page). */
export default function Header() {
  return (
    <>
      <header>
        <div className="container-xl py-1 position-relative">
          <div className="row align-items-center justify-content-between">
            <div className="col-3 col-md-4 align-self-center d-lg-none">
              <span className="nav-open icona"><span className="icon">{"☰ "}</span></span>
            </div>
            {" "}
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 text-center">
              <a href="/" className="logo d-block" aria-label="Home page">
                <img className="lozad logo" alt="The Ebook publisher" data-src="/assets/img/logo-lite.png" />
              </a>
            </div>
            {" "}
            <div className="col-xl-4 col-lg-5 nav-bar">
              <ul className="list-unstyled d-lg-flex mb-0 justify-content-between">
                <li className="d-lg-none">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-3"><span className="nav-open icon">×</span></div>
                    {" "}
                    <div className="col-6">
                      <a href="/" className="logo d-block" aria-label="Home page">
                        <img className="lozad logo" alt="The Ebook publisher" data-src="/assets/img/logo-lite.png" />
                      </a>
                    </div>
                    {" "}
                    <div className="col-3 phn-ico">
                      <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex text-start"><span className="icon-phone me-2 icon"></span></a>
                    </div>
                  </div>
                </li>
                {" "}
                <li className="drop-down py-lg-5">
                  <span>Services ▼</span>
                  {" "}
                  <div className="bg-l container-fluid w-xl-90 drop-down-cont br lozad">
                    <div className="row">
                      <div className="col-lg-3 d-none d-md-flex bg-1 text-white p-4 align-items-center justify-content-center">
                        <div>
                          <p className="f-24 fw-700">
                            {"Become A "}
                            <br />
                            <span className="bg-2 clr-1"><span className="px-2">Best Selling Author</span></span>
                            {" With Book Writing Center"}
                          </p>
                          {" "}
                          <p>Our Substantial Services Has Helped Many Auhors Become A Best Seller</p>
                        </div>
                      </div>
                      {" "}
                      <div className="col-lg-9 p-md-4">
                        <div className="row row-cols-md-3 row-cols-1">
                          <div className="col">
                            <ul className="list-unstyled">
                              <li className="mb-2"><a className="clr-1 fw-700" href="#">Ghostwriting</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-writing">Book Writing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/article-writing">Article Writing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/ebook-writing">eBook Writing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/blog-writing">Blog Writing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/fantasy-ghostwriting">Fantasy Ghostwriting</a></li>
                              {" "}
                              <li className="mb-2"><a href="/screenplay-ghostwriting">Screenplay Ghostwriting</a></li>
                              {" "}
                              <li className="mb-2"><a href="/fiction-ghostwriting">Fiction</a></li>
                              {" "}
                              <li className="mb-2"><a href="/non-fiction-ghostwriting">Non Fiction</a></li>
                              {" "}
                              <li className="mb-2"><a href="/autobiographies-ghostwriting">Autobiographies</a></li>
                              {" "}
                              <li className="mb-2"><a href="/novels-ghostwriting">Novels</a></li>
                              {" "}
                              <li className="mb-2"><a href="/childrens-books">Childrens Books</a></li>
                            </ul>
                          </div>
                          {" "}
                          <div className="col">
                            <ul className="list-unstyled">
                              <li className="mb-2"><a className="clr-1 fw-700" href="/book-marketing">Book Marketing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/social-media-marketing">Social Media Marketing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/amazon-marketing">Amazon Marketing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/seo">Search Engine Optimization</a></li>
                              {" "}
                              <li className="mb-2"><a href="/influencer-marketing">Influencer Marketing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/content-marketing">Content Marketing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-launch-marketing">Book Launch Marketing</a></li>
                            </ul>
                            {" "}
                            <ul className="list-unstyled">
                              <li className="mb-2">
                                <a className="fw-700 clr-1" href="/book-publishing">Book Publishing</a>
                              </li>
                              {" "}
                              <li className="mb-2"><a href="/audio-book">Audio Book</a></li>
                              {" "}
                              <li className="mb-2"><a href="/self-publishing">Self Publishing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/digital-publishing">Digital Publishing</a></li>
                            </ul>
                          </div>
                          {" "}
                          <div className="col">
                            <ul className="list-unstyled">
                              <li className="mb-2"><a href="/book-editing">Book Editing</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-formating">Book Formatting</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-profreading">Book Proofreading</a></li>
                              {" "}
                              <li className="mb-2">
                                <a className="clr-1 fw-700" href="/branding">Book Branding / Design</a>
                              </li>
                              {" "}
                              <li className="mb-2"><a href="/author-website">Author Website</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-cover">Book Cover Design</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-video">Video Book Trailer</a></li>
                              {" "}
                              <li className="mb-2"><a href="/book-illustration">Book Illustration</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {" "}
                <li className="py-lg-5"><a href=" ">Case Studies</a></li>
                {" "}
                <li className="py-lg-5"><a href="/about-us">About Us</a></li>
                {" "}
                <li className="py-lg-5"><a href="/contact-us">Contact Us</a></li>
                {" "}
                <li className="d-lg-none heading f-18 pt-3 border-top">Contact Info</li>
                {" "}
                <li className="d-lg-none">
                  <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="d-flex align-items-center mb-3">
                    <span className="icon-phone me-2"></span>
                    {" (312) 278-2359"}
                  </a>
                  <a href="mailto:info@theebookpublisher.com " aria-label="Email us to discuss you project" className="d-flex align-items-center mb-3">
                    <span className="icon-mail me-2"></span>
                    {" info@theebookpublisher.com"}
                  </a>
                  <span className="d-flex align-items-center mb-3">
                    <span className="icon-location me-2"></span>
                    {" 1S280 summit avenue Unit E2 Suite 1d , Oakbrook terrace ,Illinois 60181"}
                  </span>
                  {" "}
                  <ul className="list-unstyled d-flex justify-content-start">
                    <li className="me-3 ms-0">
                      <a href="#" aria-label="Like and follow Book publishing professional's facbook page" target="_blank"><span className="icon-fb"></span></a>
                    </li>
                    {" "}
                    <li className="me-3 ms-0">
                      <a href="#" aria-label="Follow Book publishing professional's on Instagram" target="_blank"><span className="icon-insta"></span></a>
                    </li>
                    {" "}
                    <li className="ms-0">
                      <a href="#" aria-label="Follow The Ebook publisher on Twitter" target="_blank"><span className="icon-x"></span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {" "}
            <div className="col-xl-4 col-lg-4 d-none d-lg-block">
              <div className="row">
                <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                  <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center justify-content-start text-start">
                    <span className="icon-phone me-2 icon"></span>
                    <span className="">
                      <span className="clr-2 fw-700">Call Now</span>
                      <br />
                      <span className="fw-700">(312) 278-2359</span>
                    </span>
                  </a>
                </div>
                {" "}
                <div className="col-xl-6 col-lg-5">
                  <button className="w-100 pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-3 col-md-4 align-self-center d-lg-none text-end">
              <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="d-flex justify-content-end icona"><span className="icon"><span className="icon-phone"></span></span></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
