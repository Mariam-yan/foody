 AOS.init({
  duration: 800,
  easing: 'slide-up',
  once: true
 });
 
(function($) {

	// home slider

  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin: 30,
    smartSpeed: 1000,
    dots: true,
    responsive:{
      600:{
        items: 2
      },
      900:{
        items: 3
      }
    }
  });

  $('.centernonloop2').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
  });

})(jQuery);