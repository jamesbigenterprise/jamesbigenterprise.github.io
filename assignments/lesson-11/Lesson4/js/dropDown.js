	$(function(){
		// All jQuery code goes here
		/*$('.dropdownMenu > li').hover(function(){
			//mouse over
			$(this).children('ul').slideDown(200);
		},function(){
			//mouse out
			$(this).children('ul').slide(200);
		})
		*/
		
		$('.dropdownMenu > li').hover(function(){
			$(this).children('ul').slideToggle(200);
		})
	})