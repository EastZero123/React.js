
//서브컨텐츠 자동 스크롤
$(function() {
    setTimeout(function() {
        fnBodyMove(".sub_contents");
    }, 1000);
});

function fnBodyMove(mArea) {
    var offset = $(mArea).offset();
    $('html, body').animate({scrollTop : offset.top - 88}, 700);
}
