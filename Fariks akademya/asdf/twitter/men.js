$(document).ready(function(){
    $("nav").addClass("animated bounce");
    $("button").addClass("animated shake");
    $(".jumbotron").addClass("animated swing");
    $("h1").addClass("animated fadeIn");
    $("img").addClass("animated fadeIn");
  });
  // Scroll Function
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  