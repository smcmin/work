$(function(){
    // slick slider
    $('.slideshow').slick({
        inFinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        pauseOnHover: false,
    });
    
})

// popup

//popupOpen
function popupOpen(name){
	var popBox = '#' + name;

	if( $('.layerMask').length>0 ){ popupClose(); }
	$('body').addClass('stop');
	$('body').append('<div class="layerMask"></dv>')
	$(popBox).show();

}

//popupClose
function popupClose(){
	$('body').removeAttr('class');
	$('.layerMask').remove();
	$('.popup').hide().removeAttr('style');
}
//popupNotice
function noticeOpen(name){
	var popBox = '#' + name;
	$('body').append('<div class="noticeMask"></dv>');
	$(popBox).show();
}
//popupClose-Cover
function noticeClose(){
	$('.popup.notice').hide().removeAttr('style');
	$('.noticeMask').remove();
}

//popupHealth-Open
function popupHealth(sort){
	var popBox = '#' + sort;
	$(popBox).addClass('active');
	$(popBox).find('.agree-inner .inq-btn').eq(0).addClass('on');
	$(popBox).find('.agree-inner .inq-btn').eq(0).addClass('active');

	$('body').addClass('stop');
	$('body').append('<div class="layerMask"></dv>');
	$('#layerHealth').show();
}

//건강자료
var chkTreat = $(popBox).hasClass('submit');
if( chkTreat==true ){
    $(popBox).find('.infoBox .list').eq(0).addClass('active');
    $(popBox).find('.vaccine').eq(0).addClass('active');

    var stdHgt = $(window).height() - 420;
    var boxHgt = $(popBox).find('.infoBox').height();
    var hasScroll = $(popBox).find('.infoBox').hasClass('scroll');
    if( stdHgt<boxHgt && hasScroll==false ){
        $(popBox).find('.infoBox').addClass('scroll');
        $(popBox).find('.infoBox').mCustomScrollbar();
    }
}


