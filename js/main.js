
!(function($) {
    "use strict";
  
    // Hero typed
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  
    // Init AOS
    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  
    // Porfolio isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
  
      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
        aos_init();
      });
  
      // Initiate venobox (lightbox feature used in portofilo)
      $('.venobox').venobox({
        'share': false
      });
  
      // Initiate aos_init() function
      aos_init();
  
    });
  
  
  })(jQuery);