import CtaSection from '@/components/sections/CtaSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = { title: "About Us" };

export default function AboutUsPage() {
  return (
    <>
      <section className="py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-7 col-md-10 col-12">
              <h1 className="f-60 clr-1 fw-700">
                {"About "}
                <span className="bg-1 clr-l px-2">{"The Ebook publisher "}</span>
                {" Expert Guidance for Every Author’s Journey"}
              </h1>
              {" "}
              <p className="f-14">
                At The Ebook Publisher, our skilled team is committed to guiding authors through every step of the publishing process. From the first idea to the final launch and beyond, we offer custom-tailored services in writing, editing, formatting, design, and marketing. Backed by industry expertise, we ensure your manuscript becomes a refined, compelling book ready to leave its mark in the literary world.
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
              <img className="lozad banside" data-src="/assets/img/about-ban.webp" alt="The Ebook publisher" />
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
              <div className="col-xl-5 col-md-5">
                <div className="service-image">
                  <img className="lozad" alt="About The Ebook publisher" data-src="/assets/img/about.webp" />
                </div>
              </div>
              {" "}
              <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                <h3 className="f-40 clr-1 fw-700 mb-3">{" Our Expertise in Helping Authors Succeed "}</h3>
                {" "}
                <p>
                  At The Ebook Publisher, our dedicated team supports authors through every phase of their publishing journey. From the first spark of an idea to the final launch and beyond, we provide customized services in writing, editing, formatting, design, and marketing. With deep industry expertise, we make sure your book is refined, compelling, and positioned to leave a lasting impression on readers.
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
            </div>
          </div>
        </div>
      </section>
      <section className="right-logo lozad purpose" data-background-image="/assets/img/right-logo.webp">
        <div className="container py-5">
          <div className="row row-cols-md-3 row-cols-1">
            <div className="col">
              <img className="lozad" alt="Purpose Of The Ebook publisher" data-src="/assets/img/purpose.png" />
              {" "}
              <h3 className="f-24">Our Purpose</h3>
              {" "}
              <p>
                {"We’re here to empower authors. We believe every writer has the ability to create something remarkable, and our purpose is to help them succeed in making that vision a reality. "}
              </p>
            </div>
            {" "}
            <div className="col">
              <img className="lozad" alt="Values of The Ebook publisher" data-src="/assets/img/value.png" />
              {" "}
              <h3 className="f-24">Our Values</h3>
              {" "}
              <p>
                Our foundation is built on values that shape our work: dedication, innovation, originality, professionalism, and deep publishing expertise.
              </p>
            </div>
            {" "}
            <div className="col">
              <img className="lozad" alt="Vision of The Ebook publisher" data-src="/assets/img/vision.png" />
              {" "}
              <h3 className="f-24">Our Vision</h3>
              {" "}
              <p>
                We aim to be the leading creative partner for authors and businesses around the world—respected for our bold solutions and steadfast support in an ever-evolving market.
              </p>
            </div>
          </div>
        </div>
        {" "}
        <div className="py-5">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 mt-4 mt-md-0 text-center text-md-start">
                <h3 className="f-40 clr-1 fw-700 mb-3">{" Why Choose The Ebook publisher?"}</h3>
                {" "}
                <p>
                  Authors trust us because of our dedication to quality, detail, and personalized care. Whether you're a debut author or an experienced writer, we offer insight and creativity that help your book shine. Our team ensures your work aligns with industry benchmarks while leaving a lasting impression on readers—setting you up for lasting success.
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
                  <img className="lozad" alt="Why Choose The Ebook publisher" data-src="/assets/img/contact-min.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
