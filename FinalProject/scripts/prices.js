var Object3 = new XMLHttpRequest();
Object3.open('GET', 'https://jamesbigenterprise.github.io/FinalProject/json/prices.json', 'true');
Object3.send();
Object3.onload = function()
{
	var Info3 = JSON.parse(Object3.responseText);
	console.log(Info3);
	
	document.getElementById('s1').innerHTML = Info3.services["0"].name;
	document.getElementById('p1').innerHTML= Info3.services["0"].price;

	document.getElementById('s2').innerHTML = Info3.services["1"].name;
	document.getElementById('p2').innerHTML= Info3.services["1"].price;

	document.getElementById('s3').innerHTML = Info3.services["2"].name;
	document.getElementById('p3').innerHTML= Info3.services["2"].price;

	document.getElementById('s4').innerHTML = Info3.services["3"].name;
	document.getElementById('p4').innerHTML= Info3.services["3"].price;

	document.getElementById('s5').innerHTML = Info3.services["4"].name;
	document.getElementById('p5').innerHTML= Info3.services["4"].price;

	document.getElementById('s6').innerHTML = Info3.services["5"].name;
	document.getElementById('p6').innerHTML= Info3.services["5"].price;

	
} // end of onload

