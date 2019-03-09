function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText;
		
			console.log(cities[0]);
            var  table ="<pre>" + cities + "</pre>";
            
			document.getElementById("input").innerHTML = table;
          }
	     }
	   xht.open("GET", country, true);
	   xht.send();
	   
	   console.log(country);
	} 
	
function getStudents(file)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var students = JSON.parse(xht.responseText);
		
			console.log(students[0]);
            var  outHtml ="<pre>" + cities + "</pre>";
            
			document.getElementById("jsonout").innerHTML = outHtml;
          }
	     }
	   xht.open("GET", file, true);
	   xht.send();
	   
	   console.log(country);
	} 