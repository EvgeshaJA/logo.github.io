

// Burger

$(".hamburger").on("click", function() {
  $(this).toggleClass("is-active");
  $(".navigation-mobile").toggleClass("open");
});



// Mobile menu list

$('.hamburger').click(function(){
$('.navigation-mobile').toggleClass('menu-active');
});

$(".navigation__link-mobile").click(function () {
  $(".hamburger").trigger("click");
});

$('.navigation-link-mobile').click(function() {

$('.navigation-mobile').removeClass('menu-active');

});


// Slider


  $(".certificate").slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 1000,
    speed: 500,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
  });

  $(".lessons-slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: 1000,
    speed: 500,
    responsive: [{
        breakpoint: 1430,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 950,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });


//Zoom sertificate
$(function () {
  $(".minimized").click(function (event) {
    var i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
      i_path +
      '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();

    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});


AOS.init();