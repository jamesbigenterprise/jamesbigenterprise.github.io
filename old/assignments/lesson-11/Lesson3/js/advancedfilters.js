	$(function(){
		// All jQuery code goes here
		$('li:first-of-type').css('background-color','rgb(248,95,95)');
		$('li:only-of-type').css('background-color','rgb(238,32,54)');
		$('li:contains("Crush")').css('background-color','grey');
		$('li:empty').css('background-color','black');
		$('li:nth-child(3)').css('background-color','gold');
	})