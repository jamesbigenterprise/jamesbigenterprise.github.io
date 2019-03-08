var usa = document.getElementById("us");
var mexico = document.getElementById("mexico");
var canada = document.getElementById("canada");
var russia = document.getElementById("russia");
usa.addEventListener("click", getCities('usa.txt'));
mexico.addEventListener("click", getCities('mexico.txt'));
canada.addEventListener("click", getCities('canada.txt'));
russia.addEventListener("click", getCities('russia.txt'));

function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText.split(" ");
			console.log(cities[0]);
            var i;
            var table ="<tr><th>City</th><th>Population</th></tr>";
            for (i = 0; i < cities.length; i++)
            {
               table += "<tr><td>" +
               cities[i] +	"</td><td>" + cities[i++] + "</td></tr>";		   
            }
			document.getElementById("input").innerHTML = table;
          }
	     }
	   xht.open("GET", country, true);
	   xht.send();
	   
	   console.log(country);
	} 