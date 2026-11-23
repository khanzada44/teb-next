/* Shared section, used on 3 pages. */
export default function ProcessSection2() {
  return (
    <>
      <section className="process py-5 my-5 position-relative lozad left-logo" data-background-image="/assets/img/logo-lite.webp">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11 col-xxl-9 col-xl-10">
              <h4 className="f-40 fw-700 mb-4">
                {"BOOK PUBLISHING PROCESS BY "}
                <span className="clr-1">{" THE EBOOK PUBLISHER "}</span>
              </h4>
            </div>
          </div>
          {" "}
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-8">
              <div className="row align-items-center mb-5 slideright">
                <div className="col-md-9 order-2 order-lg-1">
                  <div className="box bg-3 p-3">
                    <h3 className="f-24">Evaluating manuscript</h3>
                    {" "}
                    <p>
                      {"The initial step in the book editing and formatting process is evaluating your manuscript. Professional editors at our team will go through your manuscript line by line to analyze writing styles,flow and overall structure adopted by the writer. In addition to this, experts will also pinpoint any specific area that needs improvement and work closely with you to learn about your objectives,any special needs and preferred style. "}
                    </p>
                  </div>
                </div>
                {" "}
                <div className="col-md-3 order-1 order-lg-1 position-relative">
                  <span className="line"></span>
                  {" "}
                  <div className="number ms-lg-auto me-md-auto mx-auto mb-4 mb-md-0"><span className="f-40 heading">01</span></div>
                </div>
              </div>
              {" "}
              <div className="row align-items-center mb-5">
                <div className="col-md-9 order-2 order-lg-1">
                  <div className="box bg-3 p-3">
                    <h3 className="f-24">Editing for Development and Structural Improvement</h3>
                    {" "}
                    <p>
                      {"Once we get a better understanding of your goals,we will begin developmental editing, where we concentrate on the organization, tempo, and readability of the text.This stage consists of plot holes and refining the characters for fiction and non fiction stories. "}
                    </p>
                  </div>
                </div>
                {" "}
                <div className="col-md-3 order-1 order-lg-1 position-relative">
                  <span className="line"></span>
                  {" "}
                  <div className="number ms-lg-auto me-md-auto mx-auto mb-4 mb-md-0"><span className="f-40 heading">02</span></div>
                </div>
              </div>
              {" "}
              <div className="row align-items-center mb-5">
                <div className="col-md-9 order-2 order-lg-1">
                  <div className="box bg-3 p-3">
                    <h3 className="f-24">Proofreading and copyediting line-by-line</h3>
                    {" "}
                    <p>
                      {"After the completion of the above steps comes the most important step in book editing, evaluating the manuscript for errors arising in grammar, punctuation,spelling and consistency. Book editors at the ebook publishers concentrate on formation of sentences and appropriate choice of words. Moreover, if there are any minor errors and inconsistencies we’ll make sure that they are removed. "}
                    </p>
                  </div>
                </div>
                {" "}
                <div className="col-md-3 order-1 order-lg-1 position-relative">
                  <span className="line"></span>
                  {" "}
                  <div className="number ms-lg-auto me-md-auto mx-auto mb-4 mb-md-0"><span className="f-40 heading">03</span></div>
                </div>
              </div>
              {" "}
              <div className="row align-items-center mb-5 slideright">
                <div className="col-md-9 order-2 order-lg-1">
                  <div className="box bg-3 p-3">
                    <h3 className="f-24">Optimized layouts for seamless reading</h3>
                    {" "}
                    <p>
                      {"The last step involved in the process of book publishing is formatting your work for internet and print media. This stage involves final adjustments such as modifying margins,fonts, page numbers and headers. It also includes necessary layout adjustments for e-books to guarantee compatibility with Kindle, Apple Books and other systems. "}
                    </p>
                  </div>
                </div>
                {" "}
                <div className="col-md-3 order-1 order-lg-1 position-relative">
                  <span className="line"></span>
                  {" "}
                  <div className="number ms-lg-auto me-md-auto mx-auto mb-4 mb-md-0"><span className="f-40 heading">04</span></div>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-lg-5 col-xl-4 pe-0">
              <img className="lozad w-100" data-src="/assets/img/process-after.webp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
