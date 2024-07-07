$(function () {
  // type it - welcome 타이핑 쳐지는 라이브러리
  $("#typing").typeIt({
    strings: ["Comunity.", "Creative Idea."], // 타이핑 텍스트 입력
    speed: 300, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
});
// 스크롤시 헤더 색 변경
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});
// 아코디언
$(function () {
  $(".faq-desc").eq(0).show();
  $(".faq-title").click(function () {
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children(".faq-desc").stop().slideUp();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  });
});
// 슬릭 슬라이더 -review
$(function () {
  $(".review-slider").slick({
    isFinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // 모바일 반응형 헤더 햄버거메뉴
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $('.gnb').toggleClass('active')
  });
  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
});
