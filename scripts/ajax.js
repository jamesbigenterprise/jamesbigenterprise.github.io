function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText.split("\n");
			var data [];
			for (ii = 0; i < cities.length; ii++)
			{
			   data[ii] += cities[ii].split(" ");
			}
			console.log(cities[0]);
            var  table ="<tr><th>City</th><th>Population</th></tr>";
            for (i = 0; i < data.length; i++)
            {
               table += "<tr><td>" +
               data[i] +	"</td><td>" + data[++i] + "</td></tr>";		   
            }
			document.getElementById("input").innerHTML = table;
          }
	     }
	   xht.open("GET", country, true);
	   xht.send();
	   
	   console.log(country);
	} 