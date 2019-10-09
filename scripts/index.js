$(document).ready(function () {

    // partners logo slider
    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                autoplay: true,
                autoplaySpeed: 5000
            }
        }]
    });

    // hamburger toggle
    $('.hamburger').on('click', function () {
        // open the nav
        $('nav').toggleClass('active');
        // switch the hamburger to an X
        $('.ham-top, .ham-bot').toggleClass('d-none');
        $('.ham-mid-one').toggleClass('x-bar-one');
        $('.ham-mid-two').toggleClass('x-bar-two');

        $('body').toggleClass('nav-open');
    });

    $('.nav-menu ul li').on('click', function () {
        $('nav').removeClass('active');
        $('.ham-top, .ham-bot').removeClass('d-none');
        $('.ham-mid-one').removeClass('x-bar-one');
        $('.ham-mid-two').removeClass('x-bar-two');
        $('.nav-open').removeClass('nav-open');
    });

    // Initialize AOS
    AOS.init({
        offset: 0
    });

});