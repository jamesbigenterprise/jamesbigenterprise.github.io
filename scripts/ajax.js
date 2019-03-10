function getCities(country)
	{
	   var xht = new XMLHttpRequest();
	   xht.onreadystatechange = function(){
	     if(this.readyState == 4 && this.status == 200)
	     {
	        //document.getElementById("input").innerHTML = xht.responseText;
			var cities = xht.responseText;
            var  table ="<pre id=\"head\">City               Population</pre><pre id=\"body\">" + cities + "</pre>";
            
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
			printJson(students.students);
          }
		  if(this.readyState == 4 && this.status == 404)
		  {
		    document.getElementById("jsonout").innerHTML = "<th> File " + fileName + " not found</th>";   
		  }
	     }
	   xht.open("GET", fileName, true);
	   xht.send();
	}
	
function printJson(data)
{
	
   var  table = "<tr><th>Name</th><th>Adress</th><th>Major</th><th>GPA</th></tr>";
   var i;
   for (i=0; i < data.length; i++)
	{
	  table += "<tr><td>" + data[i].first + " " + data[i].last + "</td><td>" + 
	  data[i].address.city + "-" + data[i].address.state + " " + 
	  data[i].address.zip + "</td><td>" + data[i].major + "</td><td>" + 
	  data[i].gpa + "</td></tr>";
	}
	document.getElementById("jsonout").innerHTML = table;
}		

