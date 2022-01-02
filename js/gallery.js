$(function(){
	//이미지 갤러리 위에 마우스 오버시 
	//이미지 타이틀 색상 자주색이 나타난다
	
	$('.galleryBtn').on({
		mouseenter:	function(){
			$(this).find('.galleryImgTitleBg').addClass('addGallery');
		},
		mouseleave:	function(){
			$(this).find('.galleryImgTitleBg').removeClass('addGallery');
		}
	});
	
	
	
});//gallery.js