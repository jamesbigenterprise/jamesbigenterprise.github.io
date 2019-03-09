function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText;
            var  table ="<pre>" + cities + "</pre>";
            
			document.getElementById("input").innerHTML = table;
          }
	     }
	   xht.open("GET", country, true);
	   xht.send();
	} 
	
function getStudents()
{
	var fileName = document.getElementById("file").value;
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
			var students = JSON.parse(xht.responseText);
			console.log(fileName);
            var  outHtml ="<pre>" + cities + "</pre>";
            
			document.getElementById("jsonout").innerHTML = outHtml;
          }
	     }
	   xht.open("GET", "json.txt", true);
	   xht.send();
	   
	   console.log(fileName);
	} 