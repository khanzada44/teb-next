/* "Get Started" popup form (opened by data-bs-target="#quote"). */
export default function QuoteModal() {
  return (
    <>
      <div className="modal fade" id="quote" tabIndex="-1" aria-labelledby="quoteLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content lozad bg-1 clr-l">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            {" "}
            <div className="modal-body py-0">
              <div className="row">
                <div className="col-md-6 d-lg-block d-none align-self-end">
                  <img className="popup-img lozad" data-src="/assets/img/girl.webp" alt="The Ebook publisher" />
                </div>
                {" "}
                <div className="col-md-6 align-self-center p-3">
                  <h4 className="f-24">Take the First Step Toward Publishing</h4>
                  {" "}
                  <form action="/api/lead" method="post">
                    <div className="form-group">
                      <input type="hidden" className="pkg_nme" name="package" />
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
                      <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
