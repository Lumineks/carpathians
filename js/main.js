$(function () {
  $('.header__title').addClass('active');
  $('.about__slider, .trip__slider').slick({
    autoplay: 3000,
    responsive: [{
        breakpoint: 501,
        settings: {
          arrows: false
        }
      }

    ]
  });


  $(".header__menu").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  wow = new WOW({
    animateClass: 'animate__animated'

  })
  wow.init();


 
});