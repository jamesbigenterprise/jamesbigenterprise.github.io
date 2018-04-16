var Object3 = new XMLHttpRequest();
Object3.open('GET', 'https://jamesbigenterprise.github.io/FinalProject/json/prices.json', 'true');
Object3.send();
Object3.onload = function()
{
	var Info3 = JSON.parse(Object3.responseText);
	console.log(Info3);
	
	document.getElementById('3cond').innerHTML = Info3.current_observation.weather;
    document.getElementById('3wind').innerHTML = Info3.current_observation.wind_string;
	document.getElementById('3img').src = Info3.current_observation.icon_url;
	document.getElementById('3temp').innerHTML = Info3.current_observation.temperature_string;
	
} // end of onload

