

$(function(){
	setTimeout(function(){

		$("#fade").stop().animate({
			opacity:"0",
		},{duration: 1000 , easing: 'easeInQuad',});

		$("#fadelogo").stop().animate({
			opacity:"0",
		},{duration: 1000 , easing: 'easeInQuad',});

	}, 3000);
	setTimeout(function(){

		$("#fade,#fadelogo").css("display","none");

	}, 4000);




});


