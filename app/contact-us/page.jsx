export const metadata = { title: "Contact Us" };

export default function ContactUsPage() {
  return (
    <>
      <section className="py-5">
        <div className="container-xl py-5 pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-12">
              <h1 className="f-60 clr-1 fw-700">
                {"Contact "}
                <span className="bg-1 clr-l px-2">{"The Ebook publisher "}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-3 contat-us-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 py-5 position-relative">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-xl-10 col-lg-11 col-md-11 col-12 pe-lg-5">
                  <h2 className="f-40">{" Contact Info"}</h2>
                  {" "}
                  <ul className="list-unstyled">
                    <li className="mb-3 mb-3">
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
                    <li className="mb-3 mb-3">
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
                    <li className="mb-3 mb-3">
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
                    {" "}
                    <li className="mb-3">
                      <span className="">
                        <span className="clr-2 fw-700">Follow Us On</span>
                        <br />
                        {" "}
                        <ul className="list-unstyled d-flex justify-content-start mb-0">
                          <li className="me-3">
                            <a href="#" aria-label="Like and follow The Ebook publisher facbook page" target="_blank"><span className="icon-fb icon"></span></a>
                          </li>
                          {" "}
                          <li className="me-3">
                            <a href="#" aria-label="Follow The Ebook publisher on Instagram" target="_blank"><span className="icon-insta icon"></span></a>
                          </li>
                          {" "}
                          <li className="">
                            <a href="#" aria-label="Follow The Ebook publisher on Twitter" target="_blank"><span className="icon-x icon"></span></a>
                          </li>
                        </ul>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <img className="lozad footerccup" alt="Contact With Book Translation Expert | The Ebook publisher" data-src="/assets/img/cupfooter.webp" />
            </div>
            {" "}
            <div className="col-lg-6 lozad p-0 bg last-form contact-us-right" data-background-image="/assets/img/form-bg.webp">
              <div className="overlay h-100 py-5">
                <div className="row h-100 align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-xl-10 col-lg-11 col-md-11 col-12 ps-lg-5 clr-l">
                    <h2 className="f-40">{" Contact Us Now"}</h2>
                    {" "}
                    <form action="/api/lead" method="post" className="row">
                      <div className="form-group">
                        <input type="hidden" className="pkg_nme" name="package" defaultValue="contact us" />
                        {" "}
                        <input type="hidden" name="link" defaultValue="" />
                      </div>
                      {" "}
                      <div className="col-md-6">
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
                      </div>
                      {" "}
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <select name="service" className="form-control" defaultValue={"What Are You Looking For?\n                                            "}>
                            <option disabled>{"What Are You Looking For? "}</option>
                            <option value="Book Writing">Book Writing</option>
                            <option value="Book Publishing">Book Publishing</option>
                            <option value="Book Marketing">Book Marketing</option>
                            <option value="Book Editing / Proofeading">{"Book Editing / Proofeading "}</option>
                            <option value="Book Cover">Book Cover</option>
                          </select>
                        </div>
                        {" "}
                        <div className="form-group mb-3">
                          <textarea className="form-control" autoComplete="nope" name="msg" placeholder="Enter Brief" rows="4"></textarea>
                        </div>
                      </div>
                      {" "}
                      <div className="col-12">
                        <div className="form-group">
                          <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta2" value="Submit Now">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
