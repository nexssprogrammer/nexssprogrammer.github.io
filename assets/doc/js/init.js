$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});

var smoothScroll = function() {
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var trigger = this;
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          window.location.href = trigger.href;
        });
      }
    }
  })
}
var toTop = function() {
  'use strict'; 
    if ($(window).scrollTop() > 500) {
     $('.to-top').css('display' , 'inline-block');
    } else {
      $('.to-top').css('display' , 'none');
    }
}
var toTopScroll = function() {
  'use strict'; 
    $('.to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    })
}
$(document).ready(function() {
	smoothScroll();
	toTop();
	toTopScroll();
});