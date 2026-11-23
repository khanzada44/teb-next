/* Shared section, used on 26 pages. */
export default function CounterSection() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row text-center row-cols-lg-4 row-cols-md-3 justify-content-center row-cols-2 counter-section">
            <div className="col">
              <span className="f-60 heading d-block clr-1">
                <span className="counter counter-item" data-count="10">10</span>
                +
              </span>
              {" "}
              <p>Years of Publishing Excellence</p>
            </div>
            {" "}
            <div className="col">
              <span className="f-60 heading d-block clr-1">
                <span className="counter counter-item" data-count="1000">500</span>
                +
              </span>
              {" "}
              <p>{"Authors Successfully Served "}</p>
            </div>
            {" "}
            <div className="col">
              <span className="f-60 heading d-block clr-1">
                <span className="counter counter-item" data-count="1200">800</span>
                +
              </span>
              {" "}
              <p>Books Turned Bestsellers</p>
            </div>
            {" "}
            <div className="col">
              <span className="f-60 heading d-block clr-1">
                <span className="counter counter-item" data-count="100">100</span>
                %
              </span>
              {" "}
              <p>Client Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
