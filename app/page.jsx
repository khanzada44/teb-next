import FeatureSliderSection from '@/components/sections/FeatureSliderSection';
import CounterSection from '@/components/sections/CounterSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CtaSection from '@/components/sections/CtaSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqsSection from '@/components/sections/FaqsSection';

export default function HomePage() {
  return (
    <>
      <section className="py-5 banner position-relative banner-section">
        <video className="lozad position-absolute" data-poster="/assets/img/video-poster.webp" autoPlay muted playasline="" loop><source data-src="/assets/img/banner.mp4" type="video/mp4" /></video>
        {" "}
        <div className="container-xl content-section">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-12 col-md-12 col-xl-11 text-white text-center pt-5 content-clmn">
              <h2 className="f-20 first-head"><strong>Best Book Publishers Services For First Time Authors</strong></h2>
              {" "}
              <h2 className="fw-700 f-36">{" Become a Top-Selling Author with THE EBOOK PUBLISHER "}</h2>
              {" "}
              <h1 className="fw-700 f-36">{"The Top Book Self Publishing Company in USA "}</h1>
              {" "}
              <div className="d-flex justify-content-center -tel:(833) 206-5993center mt-3">
                <button className="me-2 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                <a className="btn mb-2 btn-2" href="tel:(312) 278-2359">(312) 278-2359</a>
              </div>
              {" "}
              <ul className="list-unstyled row row-cols-sm-6 justify-content-center row-cols-2 px-5 mt-3">
                <li className="col">
                  <img className="lozad" data-src="/assets/img/banner-seal-white-4.webp" alt="The Ebook publisher" />
                </li>
                {" "}
                <li className="col">
                  <img className="lozad" data-src="/assets/img/banner-seal-white-3.webp" alt="The Ebook publisher" />
                </li>
                {" "}
                <li className="col">
                  <img className="lozad" data-src="/assets/img/banner-seal-white-2.webp" alt="The Ebook publisher" />
                </li>
                {" "}
                <li className="col">
                  <img className="lozad" data-src="/assets/img/banner-seal-white-1.webp" alt="The Ebook publisher" />
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="row d-none d-md-block slider-row">
            <div className="container">
              <img className="lozad" data-src="/assets/img/ban-grp.png" alt="The Ebook publisher" />
            </div>
          </div>
        </div>
      </section>
      <section className="short-intro">
        <div className="container black-btn">
          <div className="row">
            <div className="col-lg-6 snd-img-clmn">
              <img className="lozad read-img" data-src="/assets/img/book-reading.webp" />
            </div>
            {" "}
            <div className="col-lg-6 snd-cont-clmn">
              <h2 className="f-40 clr-1">
                {" Looking for Book Marketing Solutions to Leave a Literacy Benchmark? "}
              </h2>
              {" "}
              <h2 className="f-40 clr-1 subhead">
                {" Keep Your Readers Hooked with the Exceptional Book Publication Services at THE EBOOK PUBLISHER "}
              </h2>
              {" "}
              <p>
                {"Our expert team of ebook writers is here to help bring your vision into reality with their gripping story telling skills. Skilled book writing experts at our publication company make sure that your notions are being heard and understood. Be it big or small, a dream seen with open eyes or closed ones whatever is on your mind we can bring that in the form of a book and digital book, article or a blog post. Your readers will be absolutely inspired and captivated, that's our promise to you! "}
              </p>
              <button className="pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <FeatureSliderSection />
      <section className="services position-relative stick-clmn">
        <div className="cut bg-1">
          <div className="container-xl mt-5 clr-l text-md-start text-center">
            <div className="row wrapper justify-content-between">
              <div className="col-xl-5 col-md-6 fixed-element">
                <div className="row h-100">
                  <div className="col-12 align-self-center stick">
                    <h2 className="f-40">
                      {"From Editing and Proofreading Services to Book Design and Illustration we’ve got it all "}
                    </h2>
                    {" "}
                    <p>
                      {"The EBOOK PUBLISHERS has got you covered for its best publishing tactics also known as the premier book publishers in the USA for first time authors!! In our unique ways, nudge us and we shall serve! "}
                    </p>
                    <button className="pkg_btn" data-sku="Get Started" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-xl-5 col-md-6">
                <div className="services-list">
                  <div className="service-item pb-5">
                    <div className="service-image">
                      <img className="lozad" alt="Best Ghostwritings services By The Ebook publisher" data-src="/assets/img/new/01.webp" />
                    </div>
                    {" "}
                    <div className="servcie-text pt-3">
                      <h3 className="f-24">{"Professional Ghostwriting Services "}</h3>
                      {" "}
                      <p>
                        {"At Ebook Publisher we aim to turn your vision into reality. So what’s the wait about? Sign up now and we shall summon you up with a team to turn you into the Best selling author, right beside you from the time you curate till the end. "}
                      </p>
                      {" "}
                      {" "}
                      <a href="#" className="link" aria-label="Read more about ghostwriting services by The Ebook publisher">Find Out More</a>
                    </div>
                  </div>
                  {" "}
                  <div className="service-item pb-5">
                    <div className="service-image">
                      <img className="lozad" alt="Best Book Publishing services By The Ebook publisher" data-src="/assets/img/new/2.jpg" />
                    </div>
                    {" "}
                    <div className="servcie-text pt-3">
                      <h3 className="f-24">Book Publishing Services</h3>
                      {" "}
                      <p>
                        {"Our expert writers at THE EBOOK PUBLISHER are just a click away, ready to help you craft your next masterpiece. "}
                      </p>
                      {" "}
                      {" "}
                      <a href="#" className="link" aria-label="Read more about book publishing services by The Ebook publisher">Find Out More</a>
                    </div>
                  </div>
                  {" "}
                  <div className="service-item pb-5">
                    <div className="service-image">
                      <img className="lozad" alt="Best Editing and Formating services By The Ebook publisher" data-src="/assets/img/book-editing.png" />
                    </div>
                    {" "}
                    <div className="servcie-text pt-3">
                      <h3 className="f-24">Editing And Proofreading Services</h3>
                      {" "}
                      <p>
                        {"Worried about any final or last minute changes,formatting,better clarity and flow having no time in your hands?look no further! THE EBOOK PUBLISHER provides professional editors to proofread your manuscript no matter the genre. "}
                      </p>
                      {" "}
                      {" "}
                      <a href="#" className="link" aria-label="Read more about editing and formating services by The Ebook publisher">Find Out More</a>
                    </div>
                  </div>
                  {" "}
                  <div className="service-item pb-5">
                    <div className="service-image">
                      <img className="lozad" alt="Best Book Marketing services By The Ebook publisher" data-src="/assets/img/book-marketing.jpeg" />
                    </div>
                    {" "}
                    <div className="servcie-text pt-3">
                      <h3 className="f-24">Book Marketing Services</h3>
                      {" "}
                      <p>
                        {"Failing to give your book the hype it deserves, what if it lacks the marketing that gives it the boom. With our exceptional marketing services, target audiences are met abruptly! "}
                      </p>
                      {" "}
                      {" "}
                      <a href="#" className="link" aria-label="Read more about book marketing services by The Ebook publisher">Find Out More</a>
                    </div>
                  </div>
                  {" "}
                  <div className="service-item last pb-5">
                    <div className="service-image">
                      <img className="lozad" alt="Best Book and author's Branding services By The Ebook publisher" data-src="/assets/img/new/branding2.jpg" />
                    </div>
                    {" "}
                    <div className="servcie-text pt-3">
                      <h3 className="f-24">Book Branding/Design Services</h3>
                      {" "}
                      <p>
                        {"We all know no matter how intriguing the text can be without visuals and an eye catching design it can sometimes get really boring. That is why we offer branding and design services that grab attention to your book and bring your book to life. Dodge those boring text books and come to us for an appealing design. "}
                      </p>
                      {" "}
                      {" "}
                      <a href="#" className="link" aria-label="Read more about Book and author's Branding services by The Ebook publisher">Find Out More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="lozad cup" alt="Best book writing compnay in USA" data-src="/assets/img/cup.webp" />
      </section>
      <section className="py-5 lozad banner text-md-start text-center">
        <div className="container-xl mb-5 mb-lg-0">
          <div className="col-xl-8 col-lg-8 col-md-10 col-12">
            <h1 className="f-55 clr-1 fw-700">
              <span className="px-2"><span className="bg-1 clr-l px-2">{" The Ebook publisher, "}</span></span>
              {"USA’s E-BOOK COMPANY OFFERING AN EXTENSIVE GUIDE FOR SUCCESSFUL PUBLISHING "}
            </h1>
            {" "}
            <p>
              {"Get started with your journey to literary excellence with THE EBOOK PUBLISHER,your ultimate guide to high quality publishing services. We are expert publishing firms for a plethora of services including writing, editing and appealing designing of book covers. "}
            </p>
          </div>
        </div>
        {" "}
        <div className="container-fluid banner-books">
          <div className="d-flex flex-nowrap bannerbooks" id="bannerbook">
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/1.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/2.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/3.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/4.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/5.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/6.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/7.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/8.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/9.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/10.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/11.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/12.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/13.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/14.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/15.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/16.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/17.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/18.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/19.webp" /></div>
            </div>
            {" "}
            <div className="item">
              <div className="bannerbook"><img className="lozad" data-src="/assets/img/mock/20.webp" /></div>
            </div>
          </div>
        </div>
      </section>
      <CounterSection />
      <WhyChooseUsSection />
      <CtaSection />
      <section className="process py-5 my-5 position-relative lozad left-logo" data-background-image="/assets/img/logo-lite.webp">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11 col-xxl-9 col-xl-10">
              <h2 className="f-40 fw-700 mb-4">
                {"Our Process at "}
                <span className="clr-1">The Ebook publisher</span>
              </h2>
            </div>
          </div>
          {" "}
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-8">
              <div className="row align-items-center mb-5 slideright">
                <div className="col-md-9 order-2 order-lg-1">
                  <div className="box bg-3 p-3">
                    <h3 className="f-24">Laying the Groundwork for Your Story</h3>
                    {" "}
                    <p>
                      {"We begin by crafting a clear, structured draft to ensure your story flows naturally. Our ghostwriters work closely with you to shape your ideas, understand your vision, and align the narrative with the right publishing path. "}
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
                    <h3 className="f-24">Formulating engaging content that captures your ideas</h3>
                    {" "}
                    <p>
                      {"As per your plans, expert ghostwriters at the ebook publisher create your content. We help you ensure that your book is truly based on your own thoughts,working to get noticed among the publishing houses. "}
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
                    <h3 className="f-24">{"Meticulous and qualitative proofreading guranted "}</h3>
                    {" "}
                    <p>
                      {"Quality is our key point.Our affordable book editors read through the story,re-checking if there are any mistakes present,and raising it up to our high quality publishing services. "}
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
                    <h3 className="f-24">{"Proficient Publishing and Formatting services "}</h3>
                    {" "}
                    <p>
                      We handle the formatting and publishing processes,making sure that your book reaches the best book publishing platforms. The team handles all the tasks so that your book gets professionalized and contains more knowledge to impress the readers and markets.
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
              <img className="mobile-hid lozad w-100" alt="Book writing process by The Ebook publisher" data-src="/assets/img/process-after.webp" />
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
