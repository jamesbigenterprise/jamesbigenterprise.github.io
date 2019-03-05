

function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        document.getElementById("input").innerHTML = xht.responseText;
	     }
	   };
	   xht.open("GET", country, true);
	   xht.send();
	   
	   console.log(country);
	}