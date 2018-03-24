		$(function(){
		// jQuery Code goes here
		var box1 = $('.box1');
		var box2 = $('.box2');
		
		function LeftToRight()
		{
			if (box2.html() == '')
				{
					//get from box 1 to 2 and empty 1
					box2.html(box1.html());
					box1.html('');
				}
		}
		
		function RighToLeft()
		{
			if (box1.html() == '')
				{
					//get from box 1 to 2 and empty 1
					box1.html(box2.html());
					box2.html('');
				}
		}
		$('#LeftToRight').click(LeftToRight);
		$('#RightToLeft').click(RighToLeft);
	})