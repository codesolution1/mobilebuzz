/**
*
* ---------------------------------------------------------------------------
*
* Template Name: MobileBuzz | One Page - Responsive HTML5 Business Template
* Template URI:	http://hiknik.com/mobilebuzz
* Author : themewarehouse
* Description: This is One Page Responsive HTML5 business Template
* Version : 1.0
*
* --------------------------------------------------------------------------- 
*
*/

/*  ==================================
 *           js content
 *    ==================================
 *
 *   1. Scroll Menu Background Color
 *   2. Smooth scroll
 *   2. mobile menu
 *   3. Search box popup
 *   4. Owl Carousel
 *   5. Accordion
 *   6. WOW js
 *   7. Google Map
 *   8. Scroll Up
 *   9. preloader
 *   10. parallax
 *   11. Isotope 
 *
 *	================================== */


(function ($) {
    'use strict';

    /*  ======================================
            Scroll Menu Background Color
        ====================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu-area').addClass('fixed-menu');
        } else {
            $('.menu-area').removeClass('fixed-menu');
        }
    });

    /*  ======================================
            Smooth scroll
        ====================================== */
    var Smooth = $('a.smooth-scroll');

    Smooth.on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*  ======================================
            Search box popup
        ====================================== */
    var search_btn = $('a.search-icon i.fa-search');
    var search_box = $('#search-box');
    search_btn.on('click', function () {
        search_box.addClass('open');
    });
    
    var search_close = $('body #search-box .close');
    search_close.on('click', function () {
        search_box.removeClass('open');
    });

    /*  ======================================
            Owl Carousel
        ====================================== */
    var slider = $(".slider-content");
    slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: false,
        mouseDrag: true,
        touchDrag: false,
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    var products = $('.products-box');
    products.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        margin: 10,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    // Owl Carousel Animation
    slider.on("translate.owl.carousel", function () {
        $(".single-slider h2").removeClass("animated fadeInDown").css("opacity", "0");
        $(".single-slider p").removeClass("animated flipInX").css("opacity", "0");
        $(".single-slider .slider-btn").removeClass("animated fadeIn").css("opacity", "0");
    });
    slider.on("translated.owl.carousel", function () {
        $(".single-slider h2").addClass("animated fadeInDown").css("opacity", "1");
        $(".single-slider p").addClass("animated flipInX").css("opacity", "1");
        $(".single-slider .slider-btn").addClass("animated fadeIn").css("opacity", "1");
    });

    /*  ======================================
            Accordion
        ====================================== */
    $(function () {
        $("#accordion")
            .accordion({
                header: "> div > h3"
            })
            .sortable({
                axis: "y",
                handle: "h3",
                stop: function (event, ui) {
                    // IE doesn't register the blur when sorting
                    // so trigger focusout handlers to remove .ui-state-focus
                    ui.item.children("h3").triggerHandler("focusout");

                    // Refresh accordion to handle new order
                    $(this).accordion("refresh");
                }
            });
    });

    /*  ======================================
            Google Map
        ====================================== */
    var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

    function initialize() {
        var mapProp = {
            zoom: 16,
            center: myCenter,
            scrollwheel: false,

            styles: [{
                "stylers": [{
                        "hue": "tan"
                }, {
                        saturation: -110
                },
                    {
                        gamma: 2
                }]
        }],
            mapTpeIdy: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);

        //add your location marker here 
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-33.7654872, 150.9103569),
            map: map,
            draggable: false
        });


    }
    google.maps.event.addDomListener(window, 'load', initialize);

    /*  ======================================
		    Scroll Up
		====================================== */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    $(window).on('load', function () {

        /*  ======================================
                preloader
            ====================================== */
        var preload = $('#cupcake');
        preload.fadeOut('500');

        /*  ======================================
                parallax
            ====================================== */
        var parallax = $(window);
        parallax.paroller();

        /*  ======================================
                Isotope
            ====================================== */
        // init Isotope
        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            isotope_nav.removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            isotope_content.isotope({
                filter: selector
            });
            return false;
        });
    });

}(jQuery));
