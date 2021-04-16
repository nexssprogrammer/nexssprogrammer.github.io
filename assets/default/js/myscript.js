"use strict";

var customScript = function() {
  /* menuToggle */
  var menuToggle = function() {
    $(".menu_toggle").click(function() {
      if ($(this).hasClass("act")) {
        $(this).removeClass("act");
        $(".phone_nav").slideUp();
        $(".phone_nav ul ul").slideUp();
        $(".phone_nav .sub").removeClass("act");
      } else {
        $(this).addClass("act");
        $(".phone_nav").slideDown();
      }
    });
    $(".phone_nav .sub").click(function() {
      if ($(this).hasClass("act")) {
        $(this).removeClass("act");
        $(this)
          .next()
          .slideUp();
      } else {
        $(this).addClass("act");
        $(this)
          .next()
          .slideDown();
      }
    });
  };

  /* fix menuToggle */

  var fixMenuToggle = function() {
    $(".menu_toggle").removeClass("act");
    $(".phone_nav").slideUp();
    $(".phone_nav ul ul").slideUp();
    $(".phone_nav .sub").removeClass("act");
  };

  /* tabs */
  var tabs = function() {
    if ($(".projects .tabs").length < 1) {
      return false;
    }
    var addDataIndex = function(elem) {
      var i = 1;
      elem.each(function() {
        $(this).attr("data-index", i);
        i++;
      });
    };
    addDataIndex($(".projects .tabs__nav ul li"));
    addDataIndex($(".projects .tabs__content .article"));

    $(".projects .tabs__nav ul li").click(function() {
      if ($(this).hasClass("act")) {
        return false;
      }

      var i = $(this).attr("data-index");
      $(".projects .tabs__nav ul li").removeClass("act");
      $(".projects .tabs__content .article").removeClass("act");
      $(this).addClass("act");
      $(".projects .tabs__content .article[data-index=" + i + "]").addClass(
        "act"
      );
    });
  };

  /* faq */
  var faq = function() {
    $(".faq .item__title").click(function() {
      if (
        $(this)
          .parent()
          .hasClass("act")
      ) {
        // $(this).parent().removeClass('act');
        // $(this).next().slideUp();
        return false;
      } else {
        $(".faq .item").removeClass("act");
        $(".faq .item__descr").slideUp();
        $(this)
          .parent()
          .addClass("act");
        $(this)
          .next()
          .slideDown();
      }
    });
  };

  /* remove placeholder */
  var removePlaceholder = function() {
    $("input,textarea")
      .focus(function() {
        $(this)
          .data("placeholder", $(this).attr("placeholder"))
          .attr("placeholder", "");
      })
      .blur(function() {
        $(this).attr("placeholder", $(this).data("placeholder"));
      });
  };

  /* smooth scroll to anchors */
  var smoothScroll = function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  };

  $(document).ready(function() {
    removePlaceholder();
    smoothScroll();
    tabs();
    faq();
    menuToggle();
    fixMenuToggle();
    new WOW().init();
  });

  $(window).load(function() {
    $(".owl_sponsors").owlCarousel({
      items: 12,
      nav: true,
      navText: [
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816C52.942,116.507,52.942,124.327,57.633,129.007z"/><g></svg>',
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve"><g><path d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"/><g></svg>'
      ],
      responsive: {
        0: {
          items: 4
        },
        768: {
          items: 6
        },
        1150: {
          items: 12
        }
      }
    });

    $(".owl_testimonials").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  });

  $(window).resize(function() {
    fixMenuToggle();
  });
};

customScript();
