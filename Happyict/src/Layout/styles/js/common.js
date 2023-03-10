import $ from "jquery"

const Common = () => {
  $(function () {
    // INIT
    $.fn.device()

    scroll_flag()
    sticky()

    // ON LOAD
    $(window).load(function () {
      $("body").addClass("load")
    })

    // ON RESIZE
    $(window).resize(function () {
      $.fn.device()
      // 행복이야기 창 사이즈 변환시 1024 이하일때 멈춤
      if (window.outerWidth > 640) {
        fnSlick()
      } else {
        $(".img_slider").slick("unslick")
      }
    })

    // TOP FLOATING
    function scroll_flag() {
      var btnTopFlag = false

      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          if (!btnTopFlag) {
            $(".btn_top").stop(true).fadeIn(300)
          }
          btnTopFlag = true
        } else {
          if (btnTopFlag) {
            $(".btn_top").stop(true).fadeOut(300)
          }
          btnTopFlag = false
        }
      })
    }

    // STICKY
    function sticky() {
      var fixed_offset = $("#header").offset()

      $(window).on(
        "scroll",
        $.throttle(1000 / 15, function () {
          if ($(document).scrollTop() > fixed_offset.top) {
            $(".h_group").addClass("affix")
            $(".h_group").css("background", "#fff")
          } else {
            $(".h_group").removeClass("affix")
            if (!$(".h_group").hasClass("affix")) {
              $(".h_group").css("background", "transparent")
              $(".h_group.pf").css("background", "#fff")
            }
          }
        })
      )
    }

    // HOME (MAIN)
    if ($("body").hasClass("home")) {
      // 메인 비주얼 줌-아웃 효과
      $("#main_slide").on("init", function (event, slick) {
        $(".slick-slide").eq(0).addClass("active-item")
      })

      $("#main_slide").on("afterChange", function (event, slick, currentSlide) {
        $(".slick-slide").removeClass("active-item")
        $(this).find(".slick-slide").eq(currentSlide).addClass("active-item")
      })

      // 메인 비주얼
      $("#main_slide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
      })

      // 메인 비주얼 정지, 재생
      $(".visual_btn .btn_play").on("click", function () {
        var $pauseBtn = $(this)
        if ($pauseBtn.hasClass("on")) {
          $("#main_slide").slick("slickPlay")
          $(this).text("정지")
          $pauseBtn.removeClass("on")
        } else {
          $("#main_slide").slick("slickPause")
          $(this).text("재생")
          $pauseBtn.addClass("on")
        }
      })

      // 메인 롤링 다운
      $(".floating").on("click", function () {
        var nextSec = $(".section_scroll, .sub_contents").offset().top - 91
        var wHeight = $(window).height()

        $("html, body").animate(
          {
            scrollTop: nextSec,
          },
          400
        )
      })

      // 처음 접속시 width 체크
      if (window.outerWidth > 1024) {
        fnSlick()
      }
    }
  })

  // 행복이야기
  function fnSlick() {
    $(".img_slider").each(function (index, element) {
      if ($(element).hasClass("slick-initialized")) return
      $(element).slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1570,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              arrows: true,
            },
          },
        ],
      })
    })
  }

  // DEVICE CHK
  $.fn.device = function () {
    var size = $(window).width() + 17
    if (size <= 1200) {
      $("body").data("device", "mobile")
      /* } else if(size > 1024 && size < 1280) {
      $("body").data("device","tablet"); */
    } else {
      $("body").data("device", "pc")
    }
  }

  // NAV
  $(function () {
    $(".navbar_toggle p, .navbar_toggle .menu_bar").click(function () {
      $(".navbar_toggle").toggleClass("navbar_on")
      $("nav").slideToggle("1000")
      $("nav").removeClass("nav_hide")

      if ($(".navbar_toggle").hasClass("navbar_on")) {
        $(".nav nav").css("overflow-y", "hidden")
      } else {
        $(".nav nav").css("overflow-y", "hidden")
      }
    })
  })

  // ScollTop
  function scollTopStart() {
    $("html,body").stop().animate({ scrollTop: 0 }, 600)
  }

  // TabMenu(연혁)
  $(function () {
    $(".tab_content").hide()
    $(".tab_content:first").show()

    $("ul.tabs li").click(function () {
      $("ul.tabs li").removeClass("active").css("color", "#333")
      $(this).addClass("active").css("color", "#fff")
      $(".tab_content").hide()
      var activeTab = $(this).attr("rel")
      $("#" + activeTab).fadeIn()

      $("ul.tabs li").attr("title", "")
      $(this).children().attr("title", "현재 페이지")
    })
  })

  // TabMenu(상시채용)
  $(function () {
    $(".tab_content_recruit").hide()
    $(".tab_content_recruit:first").show()

    $("ul.tabs_recruit li").click(function () {
      $("ul.tabs_recruit li").removeClass("active").css("color", "#333")
      $(this).addClass("active").css("color", "#fff")
      $(".tab_content_recruit").hide()
      var activeTab = $(this).attr("rel")
      $("#" + activeTab).fadeIn()

      $("ul.tabs_recruit li").attr("title", "")
      $(this).children().attr("title", "현재 페이지")
    })
  })

  // TabMenu(채용공고)
  $(function () {
    $(".step_slide")
      .find(".btn > a")
      .on("click", function () {
        $(".step_slide > [class^='bg']").hide()
        var firstDiv = $(".step_slide > div").first().attr("class")
        var lastDiv = $(".step_slide > div").last().attr("class")
        var clkDiv = $(this).parent().parent().parent()

        if (lastDiv == clkDiv.attr("class")) {
          $(".step_slide > ." + firstDiv).fadeIn()
        } else {
          clkDiv.next().fadeIn()
        }
      })
  })

  // $(function () {
  //   var text_box = $(".recruit_wrap .text_box")

  //   $(".btn").on("click", function () {
  //     TweenLite.fromTo(
  //       text_box,
  //       1,
  //       { opacity: 0, y: -60 },
  //       { opacity: 1, y: 0, ease: Power3.easeOut, delay: 0.3 }
  //     )
  //   })
  // })

  $(function () {
    var typingBool = false
    var typingIdx = 0
    var typingTxt = $(".typing-txt").text()
    typingTxt = typingTxt.split("")
    if (typingBool == false) {
      typingBool = true

      var tyInt = setInterval(typing, 100)
    }

    function typing() {
      if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx])
        typingIdx++
      } else {
        clearInterval(tyInt)
      }
    }
  })

  // 고객사 모음
  $(function () {
    $(".client_area ul li p").click(function () {
      var state = $("div.hidden").css("display")
      if (state == "none") {
        $(this).removeClass("off").addClass("on")
        $("div.hidden").show()
      } else {
        $(this).removeClass("on").addClass("off")
        $("div.hidden").hide()
      }
    })
  })

  // 221014 시스템점검 팝업 추가
  $(function () {
    var appendthis = "<div class='modal_overlay js-modal_close'></div>"

    // 시스템 점검 안내 팝업 > ON LOAD
    var sdate = new Date("2022/10/17 09:20:01")
    var edate = new Date("2022/10/20 09:30:01")

    // 시스템 점검 안내 팝업
    if (Date.now() >= sdate && Date.now() <= edate) {
      $(window).load(function () {
        if (
          typeof getCookie("close") === "undefined" ||
          getCookie("close") != "Y"
        ) {
          $("body,html").animate({ scrollTop: 0 }, 1000)
          // $("body").append(appendthis);
          $(".modal_overlay").fadeTo(500, 0.6)
          $(".modal_overlay").css("height", $(document).height())

          $("div[id='warn_popup'][class='modal_box']").fadeIn($(this).data())
        }
      })
    }
  })

  /**
   * 쿠키가져오기
   */
  function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
      var offset = document.cookie.indexOf(search)
      if (offset != -1) {
        offset += search.length
        var end = document.cookie.indexOf(";", offset)
        if (end == -1) end = document.cookie.length
        return unescape(document.cookie.substring(offset, end))
      }
    }
  }

  /**
   * 쿠키생성
   */
  function setCookie(name, value, expiredays) {
    var todayDate = new Date()
    todayDate.setDate(todayDate.getDate() + expiredays)
    document.cookie =
      name +
      "=" +
      escape(value) +
      "; path=/; expires=" +
      todayDate.toUTCString() +
      ";"
  }

  // 팝업 닫기
  function couponClose() {
    if ($("input[name='chkbox']").is(":checked") == true) {
      setCookie("close", "Y", 1)
    }
    $("div[id='warn_popup'][class='modal_box'], .modal_overlay").fadeOut(
      700,
      function () {
        $(".modal_overlay").remove()
      }
    )
  }

  // //이미지 로딩시
  // var viewTimer = setTimeout(function() { $("body").show(); }, window.clearTimeout(viewTimer), 100);
}

export default Common
