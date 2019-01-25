	$(function(){
		// All jQuery code goes here
		$('.navigation > li').hover(
			function(){
			//when the mouse enters
			$(this).addClass('openSesame')
		},
		function(){
			//when the mouse leaves
			$(this).removeClass('openSesame')
		})
	})