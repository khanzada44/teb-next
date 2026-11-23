export const metadata = { title: 'Thank You', robots: { index: false, follow: true } };

export default function ThankyouPage() {
  return (
    <>

      <section className="thankyou-sec">
        <div className="container-xl py-5 pt-5">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-12">
              <h1 className="f-60 clr-1 fw-700">
                {"THANK "}
                <span className="bg-1 clr-l px-2">{"YOU "}</span>
              </h1>
              {" "}
              <p>
                {"We have received your online inquiry and forwarded your information to one of our Support Agent who will be in touch with you shortly. "}
              </p>
              {" "}
              <a href="/" className="tk-pg" aria-label="Read more about ghostwriting services by The Ebook publisher">EXPLORE MORE</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
