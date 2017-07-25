	
$(function(){
	
	var windowWidth = $(window).width();
	var windowSm = 1500;
	var pageTop = false;
	var pageBottom = false;
	if (windowWidth <= windowSm) {
		var Top = 140;
		
	}else {
		var Top = 170;
	}
	$('#cy_nav').css("top",Top);

	jQuery(window).scroll(function(){
		
		var scrollTop = $('.jsheight').offset().top + $('.jsheight').innerHeight();
		var cy_top = jQuery(document).scrollTop();

		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();
	
		if(cy_top >= scrollTop) {
			$('#cy_nav').css("z-index","9999");
			$('#cy_nav').css("top","0");
			$('#cy_nav').css("background-color","#FFF");
			$('#cy_nav').css("padding","20px 0 20px");
			$('#cy_nav').css("box-shadow","0 5px 5px #aaa");
			$('#m_logo').css("display","block");
			$('#m_tel').css("display","block");
			$('#m_tel').css("display","block");
			
			if(pageTop === false) {
				pageTop = true;
				$("#pagetop2").stop().animate({
					opacity: '1',
				},{duration: 300 , easing: 'easeInQuad',});	
			}
		}
		if(cy_top <= scrollTop - 20) {
			$('#cy_nav').css("z-index","100");
			$('#cy_nav').css("top",Top);
			$('#cy_nav').css("background-color","transparent");
			$('#cy_nav').css("padding","0");
			$('#cy_nav').css("box-shadow","0 0 0 transparent");
			$('#m_logo').css("display","none");
			$('#m_tel').css("display","none");
			
			if(pageTop === true) {
				pageTop = false;
				$("#pagetop2").stop().animate({
					opacity: '0',
				},{duration: 300 , easing: 'easeInQuad',});	
			}
		}

		if ( (scrollHeight - scrollPosition) / scrollHeight <=  0.1) {
			if(pageBottom === false) {
				pageBottom = true;
				$("#pagetop2").stop().animate({
					opacity: '0',
				},{duration: 300 , easing: 'easeInQuad',});	
			}

		} else {
			if(pageBottom === true) {
				pageBottom = false;
				$("#pagetop2").stop().animate({
					opacity: '1',
				},{duration: 300 , easing: 'easeInQuad',});	
			}

		}
				
	});


});
	
