$(document).ready(function () {
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  //appsSlider
  var appsSlider = new Swiper(".appsSlider", {
    spaceBetween: 10,
    // loop: true,
    // effect: "fade",
    speed: 1000,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 70,
      draggable: true,
      hide: false,
    },
    navigation: {
      nextEl: ".appsSliderNext",
      prevEl: ".appsSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      467: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  //feedbackSlider
  var feedbackSlider = new Swiper(".feedbackSlider", {
    spaceBetween: 16,
    // loop: true,
    // effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".feedbackSliderPagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".feedbackSliderNext",
      prevEl: ".feedbackSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  //ourInvestorsSlider
  var ourInvestorsSlider = new Swiper(".ourInvestorsSlider", {
    spaceBetween: 32,
    // loop: true,
    // effect: "fade",
    // grid: {
    //   rows: 2,
    // },
    speed: 1000,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".ourInvestorsSliderNext",
      prevEl: ".ourInvestorsSliderPrev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });


});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinner").fadeOut("slow");
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 150);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 700,
    // easing: "linear",
    once: true,
  });
});
