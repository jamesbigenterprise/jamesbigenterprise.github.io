
jQuery(document).ready(function($)
{

   //Hide all the panels
   var panels = $(".accordion > div").hide();

   //on click panel title
   $(".accordion > h2 > a").click(function(){
	   var $this = $(this);
	   
	   //Slide all othe panels
	   panels.slideUp();
	   
	   //slide Down the target panel
	   $this.parent().next().slideDown();
	   var name = $this.text();
	   
	   var $imgChange =  $(".buy > img");
	   if(name == "Karakoram 3.0")
	   {
			  $imgChange.attr("src","images/responsivebikes/smallshop2013_GT_Karakolam3.0_red.JPG");	  
		   console.log("Yey");
	   }
	   else if (name == "GT XCR - 1000")
	   {
		   $imgChange.attr("src","images/responsivebikes/smallshopGT_XCR_1000.jpg");
	   }
	   else
	   {
		   $imgChange.attr("src","images/responsivebikes/smallshop2012_GT_AVALANCHE_3.0_Green_Color.JPG");
	   }
	   
	   return false;
   })
})