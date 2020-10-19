$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 2000);


    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });


    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    //************ Magnific Popup

    $('.video-play').magnificPopup({
        type: 'video',
    });

    $('.zoom,.zoom1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //************ Testimonial Carousel

    $('#testimonial-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });

    //*************** Isotope filter

    if( $("#img-filter").length>0 ) {
        var container = $('#img-filter');
        container.isotope({
            itemSelector: '.single-port',
            transitionDuration: '0.8s'
        });
        $(".img-filter").click(function(){
            $(".img-filter.active").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            container.isotope({
                filter: selector
            });
            return false;
        });

        $(window).resize(function(){
            setTimeout(function(){
                container.isotope();
            },1000);
        }).trigger('resize');
    }

    //*************** wow js

    new WOW().init();


    //****** groom carousel

    $('.groom-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    //***** bride carousel

    $('.bride-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    //***** bride carousel

    $('.event-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    //****** countdown clock js

    var deadline = 'Mar 13 2021';   /* Edit the date here*/

    function time_remaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
    }
    function run_clock(id,endtime){
        var clock = document.getElementById(id);

        // get spans where our clock numbers are held
        var days_span = clock.querySelector('.days');
        var hours_span = clock.querySelector('.hours');
        var minutes_span = clock.querySelector('.minutes');
        var seconds_span = clock.querySelector('.seconds');

        function update_clock(){
            var t = time_remaining(endtime);

            // update the numbers in each part of the clock
            days_span.innerHTML = t.days;
            hours_span.innerHTML = ('0' + t.hours).slice(-2);
            minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
            seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

            if(t.total<=0){ clearInterval(timeinterval); }
        }
        update_clock();
        var timeinterval = setInterval(update_clock,1000);
    }
    run_clock('clock-sec',deadline);


});



