

$(function(){
	
	
	var url = location.href;
	var tab = $(".page");
	var param = url.split("#page-");
	var page = tab[param[1]-1];
	
	
	if(param[1] === "" || param[1] === null || param[1] === undefined){
		$(tab).hide();
		$(tab[0]).show();
		
	}else {
		$(tab).hide();
		$(page).show();
	}

	$(".tab a").click(function() {

		$(".tab li").removeClass("active");

		$(this).parent().addClass("active");

		// a要素のデフォルト処理（リンク遷移）をキャンセルさせる。
		event.preventDefault();
	
		var index = $(".tab a").index(this);

		
		for(var i = 0; i < tab.length; i++){
			if(i === index){
				$('.page').eq(i).fadeIn();
			}
			else{
				$('.page').eq(i).hide();
			}
		}
	

	});


});


