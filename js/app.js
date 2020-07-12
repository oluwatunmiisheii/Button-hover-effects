(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".source-carousel").owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
      }
    });
  })
})(jQuery);