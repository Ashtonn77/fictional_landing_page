$(document).ready(function () {

    /*sticky nav*/
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px'
    });


    /*scroll effect*/

    /*scroll btns*/
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1500);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1500);
    })


    //nav scroll
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({
            scrollTop: $('#features').offset().top
        }, 1500);
    })

    $('.js--scroll-to-works').click(function () {
        $('html, body').animate({
            scrollTop: $('#works').offset().top
        }, 1500);
    })

    $('.js--scroll-to-cities').click(function () {
        $('html, body').animate({
            scrollTop: $('#cities').offset().top
        }, 1500);
    })

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('#plans').offset().top
        }, 1500);
    })



});