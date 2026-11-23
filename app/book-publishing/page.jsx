import CtaSection from '@/components/sections/CtaSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection3 from '@/components/sections/ProcessSection3';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqsSection from '@/components/sections/FaqsSection';

export const metadata = { title: "Book Publishing" };

export default function BookPublishingPage() {
  return (
    <>
      <section className="py-5">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-10 col-12">
              <h1 className="f-55 clr-1 fw-700">
                MAKE YOUR BOOK THE NEXT BEST SELLER WITH USA’S TOP BOOK PUBLISHING SERVICES
              </h1>
              {" "}
              <p className="">
                {"Expert publishers at the ebook publisher are inspired to turn your visions into reality. Having a vast experience in this field of expertise our publishers guarantee your voice embodies your unique story telling style. Get in touch with us today and speak with one of our representatives to guide you more and help you navigate this publishing journey. "}
              </p>
              {" "}
              <div className="row">
                <div className="col-md-4 col-6">
                  <button className="w-100 mb-3 pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                </div>
                {" "}
                <div className="col-md-4 col-3">
                  <a href="tel:+13122782359" aria-label="Call Us now to discuss you project" className="icona d-flex align-items-center justify-content-start">
                    <span className="icon-phone me-2 icon"></span>
                    <span className="d-none d-md-block">
                      <span className="clr-2 fw-700">Call Now</span>
                      <br />
                      <span className="fw-700">(312) 278-2359</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-lg-5 col-md-2">
              <img className="lozad banside" data-src="/assets/img/publishing.webp" alt="Best Publishing services in USA" />
            </div>
          </div>
        </div>
      </section>
      <section className="left-logo lozad" data-background-image="/assets/img/logo-lite.webp">
        <div className="wrapper-slid-1">
          <div className="boxes-slid-1">
            <div className="box-slid-1"><img src="/assets/img/new/feature-1.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-2.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-3.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-4.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-5.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-6.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-7.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-8.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-1.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-2.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-3.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-4.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-5.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-6.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-7.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-8.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-1.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-2.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-3.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-4.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-5.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-6.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-7.webp" /></div>
            {" "}
            <div className="box-slid-1"><img src="/assets/img/new/feature-8.webp" /></div>
          </div>
        </div>
        {" "}
        <div className="sub-services py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="clr-1 fw-700 f-40">
                  <span className="underline">
                    RAISE THE POTENTIAL OF YOUR BOOK WITH PROFESSIONAL PUBLISHING SERVICES
                  </span>
                </h2>
                {" "}
                <p>
                  Whether it be manuscript submission or worldwide distribution, our publishing services help you navigate your way through this journey while ensuring it reaches its maximum potential.
                </p>
              </div>
              {" "}
              <div className="col-12 heading">
                <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-audio-dev-tab" data-bs-toggle="pill" data-bs-target="#pills-audio-dev" type="button" role="tab" aria-controls="pills-audio-dev" aria-selected="true">
                      <div className="service-icon">
                        <img className="lozad" alt="Book Writing Service by The Ebook publisher" data-src="/assets/img/nav-icons/publishing/audio.webp" />
                      </div>
                      {" "}
                      <p>Audio Book</p>
                    </button>
                  </li>
                  {" "}
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-slef-tab" data-bs-toggle="pill" data-bs-target="#pills-slef" type="button" role="tab" aria-controls="pills-slef" aria-selected="false" tabIndex="-1">
                      <div className="service-icon">
                        <img className="lozad" alt="Article Writing Service by The Ebook publisher" data-src="/assets/img/nav-icons/publishing/self.webp" />
                      </div>
                      {" "}
                      <p>Self Puiblishing</p>
                    </button>
                  </li>
                  {" "}
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="false" tabIndex="-1">
                      <div className="service-icon">
                        <img className="lozad" alt="eBook Writing Service by The Ebook publisher" data-src="/assets/img/nav-icons/ghostwriting/ebook.webp" />
                      </div>
                      {" "}
                      <p>Digital Publishing</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {" "}
          <div className="tab-content container-xl pb-5" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-audio-dev" role="tabpanel" aria-labelledby="pills-audio-dev-tab">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                  <h3 className="f-40 clr-1 fw-700 mb-3">
                    TURN YOUR PAGES INTO SOUND WITH PROFESSIONAL AUDIOBOOK PRODUCTION SERVICES
                  </h3>
                  {" "}
                  <p>
                    {"Audio book services at the e-book publishers provide top-quality audio services consisting of voiceover narration, distribution and editing. Whatever marketing goals you have for your e-book business whether it is increasing your audience and reach or delivering alternate formats, our skilled team of experts thrive in creating an audiobook that reflects your voice and notions. Get in touch with our audiobook experts today to take your book to the next level. "}
                  </p>
                  {" "}
                  <ul className="c-list list-unstyled row row-cols-2">
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                    {" "}
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                  </ul>
                  {" "}
                  <a href="/audio-book" className="btn">Explore More</a>
                </div>
                {" "}
                <div className="col-xl-5 col-md-5">
                  <div className="service-image">
                    <img className="lozad" alt="Audio Book Service by The Ebook publisher" data-src="/assets/img/audible-publishing-side-2.webp" />
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="tab-pane fade row" id="pills-slef" role="tabpanel" aria-labelledby="pills-slef-tab">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                  <h3 className="f-40 clr-1 fw-700 mb-3">
                    {" PUBLISH YOUR INDEPENDENT BOOK WITH SELF-PUBLISHING SERVICES BY THE E-BOOK PUBLISHER"}
                  </h3>
                  {" "}
                  <p>
                    At the ebook publisher, we help you publish your own book. From an initial draft and cover design to polished final manuscript ready for publication everything is taken care of at the ebook publisher and prepared for global release. With our help, you'll have complete control over the promotion and publishing of your book in addition to having access to industry-leading platforms like IngramSpark and Amazon Kindle Direct Publishing (KDP). Allow us to assist you in realizing your idea and thriving in the cutthroat field of self-publishing.
                  </p>
                  {" "}
                  <ul className="c-list list-unstyled row row-cols-2">
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                    {" "}
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                  </ul>
                  {" "}
                  <a href="/self-publishing" className="btn">Explore More</a>
                </div>
                {" "}
                <div className="col-xl-5 col-md-5">
                  <div className="service-image">
                    <img className="lozad" alt="Self Publishing Services by The Ebook publisher" data-src="/assets/img/self-side.webp" />
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="tab-pane fade row" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                  <h3 className="f-40 clr-1 fw-700 mb-3">RAISE THE STATUS OF YOUR BOOK WITH DIGITAL PUBLISHING SERVICES</h3>
                  {" "}
                  <p>
                    {"Reach readers worldwide through the seamless digital publishing services offered by the ebook publishers.A proper digital publishing service is like an equation that completes the entire process of book publishing starting from writing the first manuscript to refining that manuscript for any errors and distributing it across top platforms like Apple Books,Amazon Books and Google Play Books. Whether it is creating an ebook, optimization of metadata or pricing strategies, we make sure that everything is taken care of and looked after for your e-book. We help your e-book reach its targeted audience while maximising sales. "}
                  </p>
                  {" "}
                  <ul className="c-list list-unstyled row row-cols-2">
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                    {" "}
                    <li>Professional Writers</li>
                    {" "}
                    <li>Time Management</li>
                    {" "}
                    <li>Extensive Research</li>
                    {" "}
                    <li>Structuring and Organization</li>
                  </ul>
                  {" "}
                  <a href="/digital-publishing" className="btn">Explore More</a>
                </div>
                {" "}
                <div className="col-xl-5 col-md-5">
                  <div className="service-image">
                    <img className="lozad" alt="Digitalized Publishing Service by The Ebook publisher" data-src="/assets/img/digital-side.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
      <WhyChooseUsSection />
      <ProcessSection3 />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqsSection />
    </>
  );
}
