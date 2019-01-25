		$(function () {
			// All jQuery code goes here

			$('#alcoveLogo').css('opacity', 0.4);
            $('#alcoveLogo').next().css('background-color', 'rgba(255,0,0,0.)');
			$('.servicesBtn').css('color', '#FFF');
			
			$('.box1').nextAll().css('background-color','gold');
			$('.header').children().css('background-color','gold');
			$("ul.navigation >li:eq(2)").parent().css('opacity', '0.3');
			$('.servicesBtn').closest('div').css('background-color','red');
		})