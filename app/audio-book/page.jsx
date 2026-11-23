import CounterSection from '@/components/sections/CounterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CtaSection from '@/components/sections/CtaSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqsSection from '@/components/sections/FaqsSection';

export const metadata = { title: "Audio Book" };

export default function AudioBookPage() {
  return (
    <>
      <section className="banner lozad bg">
        <div className="overlay py-5 position-relative">
          <img className="lozad sub-ban-left" alt="Audio Book servcies by The Ebook publisher" data-src="/assets/img/publishing-before.webp" />
          <img className="lozad sub-ban-right" alt="Audio Book servcies by The Ebook publisher" data-src="/assets/img/publishing-after.webp" />
          {" "}
          <div className="container-xl py-5 mt-5">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-12">
                <h1 className="f-55 clr-1 fw-700 mt-4">
                  {"Transform Your Book into "}
                  <span className="d-block mt-3">
                    <span className="bg-1 clr-l px-2">{" SOUND WITH PROFESSIONAL "}</span>
                  </span>
                  {" AUDIOBOOK PRODUCTION SERVICES"}
                </h1>
                {" "}
                <p className="">
                  {"Audio book services at the e-book publishers provide top-quality audio services consisting of voiceover narration, distribution and editing. Whatever marketing goals you have for your e-book business whether it is increasing your audience and reach or delivering alternate formats, our skilled team of experts thrive in creating an audiobook that reflects your voice and notions. Get in touch with our audiobook experts today to take your book to the next level. "}
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
                <h3 className="f-40 clr-1 fw-700 mb-3">{" EMERGENCE OF AUDIOBOOKS IN THE DIGITAL ERA"}</h3>
                {" "}
                <p>
                  {"Audiobooks have gained popularity in the past few years, due to the evolution of technology,and the emergence of platforms like Audible and Google Play books. People always opt for convenience ,they tune into the audiobook of your e-book while on the go as they’re easily available on google play books and Audible. One of many advantages of audiobooks is they make content more accessible to people with physical impairments. Authors should ensure that their books are available in all formats whether it be printed,digital e-books or an audiobook. "}
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
                  <img className="lozad" alt="Audio Book Service by The Ebook publisher" data-src="/assets/img/audio-book-side.webp" />
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
                <img className="lozad" alt="Audio Book Service by The Ebook publisher" data-src="/assets/img/article-side.webp" />
              </div>
            </div>
            {" "}
            <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
              <h3 className="f-40 clr-1 fw-700 mb-3">{" PROCESS OF CREATING AUDIOBOOKS"}</h3>
              {" "}
              <p>
                {"There are several important steps that have to be carried out when turning your page into sound. The first of them is hiring an expert narrator who can engage readers and capture the tone of your book. After this step comes the editing part, this is where the magic happens. Any unnecessary pauses and mistakes are removed from the recorded audio to ensure high quality sound with no disturbances. Sound effects may be incorporated into your audiobook depending on where they’re needed. Finally, it is ready for publication and launched on platforms like Apple Books,audible and other audiobook platforms. "}
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
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqsSection />
    </>
  );
}
