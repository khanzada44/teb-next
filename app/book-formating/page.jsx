import CounterSection from '@/components/sections/CounterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CtaSection from '@/components/sections/CtaSection';
import ProcessSection2 from '@/components/sections/ProcessSection2';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqsSection from '@/components/sections/FaqsSection';

export const metadata = { title: "Book Formatting" };

export default function BookFormatingPage() {
  return (
    <>
      <section className="banner lozad bg">
        <div className="overlay py-5 position-relative">
          <img className="lozad sub-ban-left" alt="Book Editing servcies by The Ebook publisher" data-src="/assets/img/editing-before.webp" />
          <img className="lozad sub-ban-right" alt="Book Editing servcies by The Ebook publisher" data-src="/assets/img/editing-after.webp" />
          {" "}
          <div className="container-xl py-5 mt-5">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-12">
                <h1 className="f-55 clr-1 fw-700 mt-4">
                  {"PROFESSIONAL "}
                  <span className="d-block mt-3"><span className="bg-1 clr-l px-2">FORMATTING SERVICES FOR</span></span>
                  {"E-BOOKS AND PRINT "}
                </h1>
                {" "}
                <p className="">
                  {"No matter how beautifully you have written your content, without proper formatting it would become difficult to follow and readers may eventually stop reading it altogether. To save you from this situation, professionals at the e-book publisher are here to help. Whether you’re planning to get your book printed or publish it digitally, our team ensures that your book is clean, consistent and reader friendly. From margins and typography to page designs, we give your book the professional touch it deserves. "}
                </p>
                {" "}
                <button className="w-100 pkg_btn" data-bs-toggle="modal" data-sku="Get Started" data-bs-target="#quote">Get Started</button>
              </div>
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
        <div className="py-5">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                <h3 className="f-40 clr-1 fw-700 mb-3">E-BOOK FORMATTING SERVICES FOR ALL PLATFORMS</h3>
                {" "}
                <p>
                  {"Formatting for ebook platforms and physical platforms are two completely different processes, formatting experts at our editing firm excel in both, ensuring that your book is suitable and properly formatted for Kindle,Apple books and other e-book platforms. Our manuscript formatting specializes in meeting the requirements of both, e-book and print book formats. "}
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
              <div className="col-xl-5 col-md-5">
                <div className="service-image">
                  <img className="lozad" alt="Book Editing Service by The Ebook publisher" data-src="/assets/img/book-formating-2.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterSection />
      <WhyChooseUsSection />
      <CtaSection />
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-md-5">
              <div className="service-image">
                <img className="lozad" alt="Book Editing Service by The Ebook publisher" data-src="/assets/img/book-formating-3.webp" />
              </div>
            </div>
            {" "}
            <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
              <h3 className="f-40 clr-1 fw-700 mb-3">WHY HIRE E-BOOK PUBLISHER FOR YOUR BOOK FORMATTING SERVICES?</h3>
              {" "}
              <p>
                By selecting our book formatting specialists, you're collaborating with experts who recognize the value of flawless presentation. Whether it's for print or digital distribution, we provide painstaking attention to detail to guarantee that your book's layout is reliable, error-free, and aesthetically pleasing. We provide excellent formatting services for all genres thanks to our years of experience and creative eye.
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
          </div>
        </div>
      </section>
      <ProcessSection2 />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqsSection />
    </>
  );
}
