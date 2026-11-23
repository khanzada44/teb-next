/* Site footer with the contact form. */
export default function Footer() {
  return (
    <>
      <footer className="bg-d clr-l">
        <div className="b-b">
          <div className="container-xxl">
            <div className="row py-4 align-items-center justify-content-between">
              <div className="col-xl-12 col-md-12">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-12 col-12">
                    <img className="lozad footer-img img-1" alt="Awards of The Ebook publisher" data-src="/assets/img/sticker.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="b-b">
          <div className="container-xxl lozad footernav" data-background-image="/assets/img/icon-white.webp">
            <div className="row py-4 justify-content-between">
              <div className="col-lg-8 col-md-7 footer-clmn">
                <a href="/">
                  <img className="lozad logo" alt="The Ebook publisher" data-src="/assets/img/logo-lite.png" />
                </a>
                {" "}
                <div className="row">
                  <div className="col-md-9">
                    <ul className="list-unstyled row row-cols-md-2 mb-0 row-cols-2 c-list">
                      <li className="mb-2"><a className="fw-700" href="#">Ghostwriting</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Publishing</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Marketing</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Editing / Formating</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Branding / Design</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Audio Book</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Video Book Trailer</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Launch Marketing</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Author Website</a></li>
                      {" "}
                      <li className="mb-2"><a className="fw-700" href="#">Book Illustration</a></li>
                    </ul>
                  </div>
                  {" "}
                  <div className="col-md-3">
                    <ul className="list-unstyled row row-cols-md-1 mb-0 row-cols-2">
                      <li className="mb-2"><a className="" href="/about-us">About Us</a></li>
                      {" "}
                      <li className="mb-2"><a className="" href="#">Case studies</a></li>
                      {" "}
                      <li className="mb-2"><a className="" href="/contact-us">Contact Us</a></li>
                      {" "}
                      <li className="mb-2"><a className="" href="#">Blogs</a></li>
                      {" "}
                      <li className="mb-2"><a href="#">Terms and Conditions</a></li>
                      {" "}
                      <li className="mb-2"><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-lg-3 col-md-5">
                <h2 className="f-24 text-center">Talk To Writing Exeprt</h2>
                {" "}
                <form action="/api/lead" method="post">
                  <div className="form-group">
                    <input type="hidden" className="pkg_nme" name="package" defaultValue="Talk To Writing Exeprt" />
                    {" "}
                    <input type="hidden" name="link" defaultValue="" />
                  </div>
                  {" "}
                  <div className="form-group mb-3">
                    <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                  </div>
                  {" "}
                  <div className="form-group mb-3">
                    <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group mb-3">
                    <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group mb-3">
                    <textarea className="form-control" autoComplete="nope" name="msg" placeholder="Enter Brief"></textarea>
                  </div>
                  {" "}
                  <div className="form-group">
                    <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="b-b pt-3">
          <div className="container-xxl">
            <ul className="list-unstyled row mb-0 align-items-center">
              <li className="mb-3 col-lg-4 col-md-6 mb-3">
                <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center justify-content-start text-start">
                  <span className="icon-phone me-2 icon"></span>
                  <span className="">
                    <span className="clr-2 fw-700">Call Now</span>
                    <br />
                    <span className="fw-700">(312) 278-2359</span>
                  </span>
                </a>
              </li>
              {" "}
              <li className="mb-3 col-lg-4 col-md-6 mb-3">
                <a href="mailto:info@theebookpublisher.com " aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center justify-content-start text-start">
                  <span className="icon-mail me-2 icon"></span>
                  <span className="">
                    <span className="clr-2 fw-700">Mail Us At</span>
                    <br />
                    <span className="fw-700">info@theebookpublisher.com</span>
                  </span>
                </a>
              </li>
              {" "}
              <li className="mb-3 col-lg-4 col-md-6 mb-3">
                <span className="chat icona text-start d-flex align-items-center justify-content-start">
                  <span className="icon-location me-2 icon"></span>
                  <span className="">
                    <span className="clr-2 fw-700">Find Us at</span>
                    <br />
                    <span className="fw-700">
                      1S280 summit avenue Unit E2 Suite 1d , Oakbrook terrace ,Illinois 60181
                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {" "}
        <div className="container-xxl">
          <div className="row pb-3 pt-4 justify-content-center">
            <div className="col-md-6 text-center mb-5 mb-lg-0">
              <p className="mb-0">© 2025 The Ebook Publisher. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
