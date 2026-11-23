// custom489a.js

// 1) Register both GSAP plugins up front
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 2) Create the smoother—but set `smooth: 0` so it simply proxies native scroll.
//    We leave the wrapper/content in place so your sliders still find their container.
ScrollSmoother.create({
  smooth: 0,            // ← NO smoothing
  effects: true,        // keep any [data-speed] or [data-lag] effects if you had them
  normalizeScroll: true // optional, if you were normalizing scroll
});

// 3) Your counter animations (fires on scroll into view)
document.addEventListener("DOMContentLoaded", function(){
    
  gsap.utils.toArray(".counter").forEach(function(el){
    const obj = { value: 0 };
    const endVal = parseInt(el.getAttribute("data-count"), 10) || 0;
    function animateCount(){
      obj.value = 0;
      gsap.to(obj, {
        value: endVal,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          el.textContent = Math.floor(obj.value);
        }
      });
    }
    ScrollTrigger.create({
      trigger: ".counter-section",
      start: "top center",
      onEnter: animateCount,
      onEnterBack: animateCount
    });
  });
});

// 4) All of your Slick carousel inits
$(document).ready(function(){
  $(".platforms .slider").slick({
    dots: false,
    arrows: false,
    lazyLoad: "ondemand",
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint:  480, settings: { slidesToShow: 3, slidesToScroll: 1 } }
    ]
  });

//   $(".portfolio-slider").slick({
//     dots: false,
//     infinite: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     cssEase: "linear",
//     speed: 1000,
//     slidesToShow: 7,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1025, settings: { slidesToShow: 6 } },
//       { breakpoint:  920, settings: { slidesToShow: 5 } },
//       { breakpoint:  769, settings: { slidesToShow: 4 } },
//       { breakpoint:  600, settings: { slidesToShow: 3 } },
//       { breakpoint:  480, settings: { slidesToShow: 2 } }
//     ]
//   });

  $(".reviews-silder").slick({
    dots: true,
    infinite: false,
    arrows: false,
    autoplay: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, infinite: true, dots: true } },
      { breakpoint:  600, settings: { slidesToShow: 2 } },
      { breakpoint:  480, settings: { slidesToShow: 1 } }
    ]
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   if (document.body.classList.contains("book-writing")) {
//     const smoother = ScrollSmoother.get();
//     if (smoother) {
//       // kills the plugin, un‑fixes the wrappers, removes inline heights/transforms
//       smoother.kill();

//       // just in case: clear out any leftover inline styles on the wrappers
//       document.getElementById("smooth-wrapper")?.removeAttribute("style");
//       document.getElementById("smooth-content")?.removeAttribute("style");
//     }
//   }
// });
gsap.registerPlugin(ScrollSmoother), ScrollSmoother.create({
    smooth: 2,
    effects: !0
}), document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger), gsap.utils.toArray(".counter").forEach(function(e) {
        let o = {
                value: 0
            },
            s = parseInt(e.getAttribute("data-count"), 10);

        function i() {
            o.value = 0, gsap.to(o, {
                value: s,
                duration: 2,
                ease: "power1.out",
                onUpdate: function() {
                    e.textContent = Math.floor(o.value)
                }
            })
        }
        ScrollTrigger.create({
            trigger: ".counter-section",
            start: "top center",
            onEnter: i,
            onEnterBack: i
        })
    })
}), $(document).ready(function() {
    $(".platforms .slider").slick({
        dots: !1,
        arrows: !1,
        lazyLoad: "ondemand",
        infinite: !0,
        autoplay: !0,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, ]
    }), 
     $(".reviews-silder").slick({
        dots: !0,
        infinite: !1,
        arrows: !1,
        autoplay: !0,
        speed: 3e3,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    })
});
$(document).ready(function () {
    if ($(".portfolio-slider").length) {
      $(".portfolio-slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1025, settings: { slidesToShow: 6 } },
          { breakpoint: 920, settings: { slidesToShow: 5 } },
          { breakpoint: 769, settings: { slidesToShow: 4 } },
          { breakpoint: 600, settings: { slidesToShow: 3 } },
          { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]
      });
    }
  });
  
$('.pkg_btn').click(function() { var gettitle = $(this).attr('data-sku');$(".pkg_nme").val(gettitle);console.log(gettitle);});
//Change width and time on your desire

initMarquee(190, 27)

function initMarquee(boxWidth, time) {
    const boxElement = $('.box-slid-1');
    const boxLength = boxElement.length;
    const wrapperWidth = boxWidth * boxLength;
    const windowWidth = $(window).width();

    boxElement.parent().css('left', '-' + boxWidth + 'px');
    boxElement.css('width', boxWidth + 'px');

    gsap.set(".box-slid-1", {
        x: (i) => i * boxWidth
    });

    gsap.to(".box-slid-1", {
        duration: time,
        ease: "none",
        x: "-=" + wrapperWidth,
        modifiers: {
            x: gsap.utils.unitize(
                function (x) {
                    return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
                }
            )
        },
        repeat: -1
    });

}
