!function (a) { a.fn.isOnScreen = function (b) { var c = this.outerHeight(), d = this.outerWidth(); if (!d || !c) return !1; var e = a(window), f = { top: e.scrollTop(), left: e.scrollLeft() }; f.right = f.left + e.width(), f.bottom = f.top + e.height(); var g = this.offset(); g.right = g.left + d, g.bottom = g.top + c; var h = { top: f.bottom - g.top, left: f.right - g.left, bottom: g.bottom - f.top, right: g.right - f.left }; return "function" == typeof b ? b.call(this, h) : h.top > 0 && h.left > 0 && h.right > 0 && h.bottom > 0 } }(jQuery);


AOS.init({
  duration: 1500,
});







//===========careers page=============
var slider1 = $('.slider1');
slider1.owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 2 },
    480: { items: 2.2 },
    600: { items: 2 },
    960: { items: 3 },
    1200: { items: 4 }

  }
});





//========about us page=========

Fancybox.bind("[data-fancybox]", {
  Toolbar: false,
  dragToClose: false,
  fullScreen: {
    autoStart: true,
  },
  Video: {
    autoplay: true,
    ratio: 100 / 200,
    fullScreen: true,
  },
});

var slider2 = $('.slider2');
slider2.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 1 },
    960: { items: 1 },
    1200: { items: 1 }

  }
});


var brandlogo = $('.brandlogo');
brandlogo.owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 3 },
    480: { items: 3 },
    600: { items: 3 },
    960: { items: 4 },
    1200: { items: 5 }

  }
});


var Homeslider = $('.Homeslider');
Homeslider.owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 450,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 20,
  responsive: {
    320: { items: 1 },
    480: { items: 1 },
    600: { items: 2 },
    960: { items: 2 },
    1200: { items: 1 }

  }
});




