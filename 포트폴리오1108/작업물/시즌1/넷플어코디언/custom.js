$(function () {
  // 어코디언 슬라이드
  $(".accordion .content").eq(0).show();
  $(".accordion .title").click(function () {
    $(this).siblings(".accordion .content").slideUp();
    $(this).next().stop().slideToggle(200);
    // 어코디언 타이틀 색
    $(this).toggleClass("active");
    $(this).siblings(".accordion .title").removeClass("active");
  });
});
