	$(function(){
		// jQuery Code goes here
		var inputFields = $('input[type="text"]');
		var toggleStyle = function()
		{
			if($('input[type="text"]').css('background-color') === 'rgb(255, 0, 0)')
				{
					//set the background color to white
					inputFields.css('background-color', 'white');
				}
			else
				{
					//set it to red
					inputFields.css('background-color', 'red');
				}
	    }
		
		$('#ReqAQuoteBtn').click(toggleStyle);
		
		$('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>")
		$("<li><strong>This was created with the append to!</strong></li>").prependTo('.coreValues');
		
		var nameVal = $('input[name="nameVal"]');
		function FillEmpty()
		{
			if ( nameVal.val() == '')
				{
					nameVal.val('John Doe');
				}
		}
		$('#ReqAQuoteBtn').click(FillEmpty);
	})