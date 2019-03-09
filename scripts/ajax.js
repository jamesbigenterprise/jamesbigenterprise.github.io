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
			var json = xht.responseText;
			var students = JSON.parse(json);
			
			var second = JSON.parse(json);
			
			printJson(second);
          }
	     }
	   xht.open("GET", fileName, true);
	   xht.send();
	} 
function printJson(data)
{
	console.log(data);
			console.log(data.first);
   var  table = "<tr><th>Name</th><th>Adress</th><th>Major</th><th>GPA</th></tr>";
   var i;
   for (i=0; i < second.length; i++)
	{
	  table += "<tr><td>" + second[i].first + " " + second[i].last + "</td><td>" + 
	  second[i].address.city + "-" + second[i].address.state + " " + 
	  second[i].address.zip + "</td><td>" + second[i].major + "</td><td>" + 
	  second[i].gpa + "</td></tr>";
	}
	document.getElementById("jsonout").innerHTML = table;
}		