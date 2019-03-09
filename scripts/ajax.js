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

            var  table = "<tr><th>Name</th><th>Adress</th><th>Major</th><th>GPA</th></tr>";
            var i;
			for (i=0; i < students.lengh; i++)
			{
			   table += "<tr><td>" + students[i].first + " " + students[i].last + "</td><td>" + 
			   students[i].address.city + "-" + students[i].address.state + " " + 
			   students[i].address.zip + "</td><td>" + students[i].major + "</td><td>" + 
			   students[i].gpa + "</td></tr>"
			}
			document.getElementById("jsonout").innerHTML = table;
          }
	     }
	   xht.open("GET", fileName, true);
	   xht.send();
	} 
	