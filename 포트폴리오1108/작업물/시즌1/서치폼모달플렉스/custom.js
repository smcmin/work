$(function () {
  // 해시태그
  $('.search .field input[type=search]').focus(function(){
    $(this).parent().next().css('display', 'block')
  }).blur(function(){
    $(this).parent().next().css('display', 'none')
  })

  // 서치 아이콘 클릭시 검색바 내려옴
  $('.open-search').click(function(){
    $('.modal-search').addClass('active')
  })
  $('.close-search').click(function(){
    $('.modal-search').removeClass('active')
  })
});
