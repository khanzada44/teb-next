gsap.to(".bannerbooks",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".bannerbooks",start:"top center",end:"bottom top",scrub:!0}}),ScrollTrigger.create({trigger:".fixed-element",start:"top top",endTrigger:".service-item.last",end:()=>"bottom top+="+document.querySelector(".fixed-element").offsetHeight,pin:!0});
// home489a.js (or in a small inline <script> **after** your home489a.js)
// const smoother = ScrollSmoother.get();
// if (smoother) {
//   // completely disable the eased “smooth” motion:
//   smoother.smooth(0);
//   // optionally, if you want to freeze it entirely (no transform at all):
//   // smoother.paused(true);
//   console.log("ScrollSmoother disabled for this page — native scroll only.");
// }
