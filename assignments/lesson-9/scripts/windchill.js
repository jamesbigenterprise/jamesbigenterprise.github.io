//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16 

function windchill()
{
	//Get the numbers and convert the to numbers
	var p1 = document.getElementById("high");
	var text1 = p1.textContent;
	var p2 = document.getElementById("low");
	var text2 = p2.textContent;
    var averageTemp = (Number(text1) + Number(text2)) / 2;
	
	var p3 = document.getElementById("windspeed");
	var text3 = p3.textContent;
	var windspeed = Number(text3);
	//windchill formula
	var f = 35.74 + averageTemp * 0.6215 - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * Math.pow(averageTemp, 0.16);
	//save with two decimal places
	var windchill = f.toFixed(2);
    document.getElementById("windchill").innerHTML = windchill;

}