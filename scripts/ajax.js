function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText;//.split("\n");
		
			console.log(cities[0]);
            var  table ="<pre>" + cities + "</pre>";
            
			document.getElementById("input").innerHTML = table;
          }
	     }
	   xht.open("GET", country, true);
	   xht.send();
	   
	   console.log(country);
	} 