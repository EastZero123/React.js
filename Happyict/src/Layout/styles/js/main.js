$(function() {
    if ($(document).scrollTop() > 99) {
        var chkSlide = true;
    } else {
        var chkSlide = false;
    }
    $(".section").each(function () {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            chkSlide = false;
            var boxMax = $(".section").length - 1;
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;

            if (delta < 0) {
                if($(this).index() < boxMax) {

                    if ($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                } else {
                    return false;
                }
            } else {
                if ($(this).index() > 0) {
                    if ($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                } else {
                    return false;
                }
            }


            $("html,body").stop().animate({
                scrollTop: moveTop - 90 + 'px'
            }, {
                duration: 800, complete: function () {
                    chkSlide = true;
                }
            });

        });
    });
    $(".section").eq(1).on("mouseenter", function(e) {
        $(".section").on("mousewheel DOMMouseScroll").unbind();
    });

    // 양쪽 슬라이드(web)
    $(".business_wrap > .pc > .list > li").on("mouseenter",function(e){
        if (chkSlide) {
            $(this).stop().addClass("active");
            $(".business_wrap").stop().addClass("active");
        }
    });
    $(".business_wrap > .pc > .list > li").on("mouseleave",function(e){
        $(this).removeClass("active");
        $(".business_wrap").removeClass("active");
    });
    // 양쪽 슬라이드(mobile_popup1)
    $('#pop_1').click(function(){
        var state = $('.pop_menu_1').css('display');
        if(state == 'none') {
            $('.pop_menu_1').show();
        } else {
            $('.pop_menu_1').hide();
        }
    });

    // 양쪽 슬라이드(mobile_popup2)
    $('#pop_2').click(function(){
        var state = $('.pop_menu_2').css('display');
        if(state == 'none') {
            $('.pop_menu_2').show();
        } else {
            $('.pop_menu_2').hide();
        }
    });
});