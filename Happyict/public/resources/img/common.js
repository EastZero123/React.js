$(function() {

	// INIT
	$.fn.device();

	scroll_flag();
	sticky();
	title_motion();

	// ON LOAD
    $(window).load(function() {

		$('body').addClass('load');

	});

	// ON RESIZE
	$(window).resize(function() {

		$.fn.device();

	});

	// TOP FLOATING
	function scroll_flag() {

		var btnTopFlag = false;

		$(window).scroll( function() {

			if($(window).scrollTop() > 100) {

				if(!btnTopFlag) {
					$('.btn_top').stop(true).fadeIn(300);
				}
				btnTopFlag = true;

			} else {

				if(btnTopFlag) {
					$('.btn_top').stop(true).fadeOut(300);
				}
				btnTopFlag = false;
			}

		});

	}

	// STICKY
	function sticky() {

		var fixed_offset = $('#header').offset();

		$(window).on('scroll', $.throttle(1000 / 15, function() {

			if ( $(document).scrollTop() > fixed_offset.top ) {
				$('.h_group').addClass('affix');
				$('.h_group').css("background","#fff ");
			} else {
				$('.h_group').removeClass('affix');
				if(!$(".h_group").hasClass('sub')) {
					$('.h_group').css("background","transparent");
				}
			}

		}));
	}

	// HOME (MAIN)
	if( $('body').hasClass('home') ) {

		// 메인 비주얼 줌-아웃 효과
		$('.visual').on('init', function(event, slick) {
			$(".slick-slide").eq(0).addClass("active-item");
		});

		$('.visual').on('afterChange', function(event, slick, currentSlide){
			$(".slick-slide").removeClass("active-item");
			$(this).find(".slick-slide").eq(currentSlide).addClass("active-item")
		});

		// 메인 비주얼
		$('.visual').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

		// 메인 비주얼 정지, 재생
		$('.visual_btn .btn_play').on('click', function(){
			var $pauseBtn = $(this);
			if ($pauseBtn.hasClass('on')){
				$(".visual").slick('slickPlay');
				$(this).text("정지");
				$pauseBtn.removeClass('on');
			} else {
				$(".visual").slick('slickPause');
				$(this).text("재생");
				$pauseBtn.addClass('on');
			}
		});

		// 메인 롤링 다운
		$('.floating').on('click', function(){
			var wHeight = $(window).height();

			$('html, body').animate({
				scrollTop : nextSec
				}, 400
			);
		});

		//
		$('.img_slider').slick({
		  dots: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});

	}

	// TITLE MOTION
	function title_motion() {

		if( !$('body').hasClass('home') ) {

			var tl = new TimelineLite({delay:0.5});

			if($('.sub-banner .inner p').length > 0 ) {
				var title = new SplitText($('.sub-banner .inner p'), {type:"chars"});
				var title_chars = title.chars;

				tl.staggerFrom(title_chars, 1.2, motion({force3D:true, autoAlpha:0, y:10, ease:Back.easeOut,onComplete:function() {
						$('.sub-banner .inner p').addClass('completed');
					}
				}), 0.02, "+=0")
			}
		}
	}
});

// DEVICE CHK
$.fn.device = function() {

	var size = $(window).width() + 17;

	if(size <= 1200) {
		$("body").data("device","mobile");
	/* } else if(size > 1024 && size < 1280) {
		$("body").data("device","tablet"); */
	} else {
		$("body").data("device","pc");
	}

}


// NAV
$(function(){
    $('.navbar_toggle').click(function(){
        $('.navbar_toggle').toggleClass('navbar_on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav_hide');
    });

	// 각 메뉴 오버시
	$("#gnb > ul > li > p").on("mouseenter", function() {
		$("#gnb > ul > li > ul").stop().slideUp('slow');
		$(this).siblings("ul").stop().slideDown('fast');
	});
});

