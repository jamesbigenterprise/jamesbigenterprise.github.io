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
			
			var second = JSON.parse(xht.responseText);
			console.log(second[0]);
			printJson(second);
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


var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}
