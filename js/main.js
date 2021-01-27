$(document).ready(function () {
  "use strict";

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 2000);

  $(window).on("scroll", function () {
    var menu_area = $(".nav-area");
    if ($(window).scrollTop() > 200) {
      menu_area.addClass("sticky_navigation");
    } else {
      menu_area.removeClass("sticky_navigation");
    }
  });

  $(document).on("click", ".navbar-collapse.in", function (e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
      $(this).collapse("hide");
    }
  });

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 195,
  });

  $("a.smooth-menu").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        1000
      );
  });

  new WOW().init();

  $(".event-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  var deadline = "Mar 13 2021";

  function time_remaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function run_clock(id, endtime) {
    var clock = document.getElementById(id);

    var days_span = clock.querySelector(".days");
    var hours_span = clock.querySelector(".hours");
    var minutes_span = clock.querySelector(".minutes");
    var seconds_span = clock.querySelector(".seconds");

    function update_clock() {
      var t = time_remaining(endtime);

      days_span.innerHTML = t.days;
      hours_span.innerHTML = ("0" + t.hours).slice(-2);
      minutes_span.innerHTML = ("0" + t.minutes).slice(-2);
      seconds_span.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    update_clock();
    var timeinterval = setInterval(update_clock, 1000);
  }
  run_clock("clock-sec", deadline);
});
