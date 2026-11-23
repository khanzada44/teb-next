import CounterSection from '@/components/sections/CounterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CtaSection from '@/components/sections/CtaSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqsSection from '@/components/sections/FaqsSection';

export const metadata = { title: "Book Proofreading" };

export default function BookProfreadingPage() {
  return (
    <>
      <section className="banner lozad bg">
        <div className="overlay py-5 position-relative">
          <img className="lozad sub-ban-left" alt="Book Profreading servcies by The Ebook publisher" data-src="/assets/img/editing-before.webp" />
          <img className="lozad sub-ban-right" alt="Book Profreading servcies by The Ebook publisher" data-src="/assets/img/editing-after.webp" />
          {" "}
          <div className="container-xl py-5 mt-5">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-12">
                <h1 className="f-55 clr-1 fw-700 mt-4">
                  {"PROFESSIONAL BOOK "}
                  <span className="d-block mt-3"><span className="bg-1 clr-l px-2">PROOFREADING SERVICES</span></span>
                </h1>
                {" "}
                <p className="">
                  {"Choose professional book proofreading services by the e-book publishers to make sure your e-book is error free. Experts at our team pay meticulous attention to detail guaranteeing that your e-book is free from grammatical mistakes, typos or additional punctuation marks making it of the highest quality. We ensure that you receive a flawless book ready for publication by conducting line by line proof reading. "}
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
                <h3 className="f-40 clr-1 fw-700 mb-3">{" COMPREHENSIVE SERVICES ACROSS ALL GENRES "}</h3>
                {" "}
                <p>
                  One of the biggest advantages of our manuscript proofreading services is that we cater to all genres, whether fiction or non fiction and e-book or print format . Our team of experts specialize in handling each with care and precision. Whether you’re writing a draft for submission or self publishing it, our thorough proofreading services focus on making your book error free.
                </p>
                {" "}
                <div className="row">
                  <div className="col-md-4 col-6">
                    <button className="w-100 pkg_btn" data-bs-toggle="modal" data-sku="Get Started" data-bs-target="#quote">Get Started</button>
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
                  <img className="lozad" alt="Book Profreading Service by The Ebook publisher" data-src="/assets/img/proofreading-2.webp" />
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
                <img className="lozad" alt="Book Profreading Service by The Ebook publisher" data-src="/assets/img/proofreading-3.webp" />
              </div>
            </div>
            {" "}
            <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
              <h3 className="f-40 clr-1 fw-700 mb-3">
                {" WHY CHOOSE E-BOOK PUBLISHERS PROOFREADING SERVICES FOR YOUR MASTERPIECE?"}
              </h3>
              {" "}
              <p>
                {"With a sharp eye for detail and extensive knowledge of grammar, punctuation, and style, our seasoned proofreaders ensure your content meets the highest standards. Professionals at our team have years of experience working with writers from different backgrounds giving them the insight needed to take your manuscript to the next level. We work closely with you to understand your needs, get in touch with us today to bring your dream into reality. "}
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
      <section className="process py-5 my-5 position-relative lozad left-logo" data-background-image="/assets/img/logo-lite.webp">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11 col-xxl-9 col-xl-10">
              <h4 className="f-40 fw-700 mb-4">
                BOOK PUBLISHING PROCESS BY
                <span className="clr-1">{"THE EBOOK PUBLISHER "}</span>
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
      <PortfolioSection />
      <TestimonialsSection />
      <FaqsSection />
    </>
  );
}
