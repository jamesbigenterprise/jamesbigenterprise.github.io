var Object3 = new XMLHttpRequest();
Object3.open('GET', 'https://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/Dallas.json', 'true');
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

var byuiinfo = new XMLHttpRequest();
byuiinfo.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', 'true');
byuiinfo.send();
byuiinfo.onload = function()
{
	var weatherInfo4 = JSON.parse(byuiinfo.responseText);
	console.log(weatherInfo4);
	document.getElementById('thirdcitytitle').innerHTML = weatherInfo4.towns["3"].name;
	document.getElementById('3city').innerHTML = weatherInfo4.towns["3"].name;
	document.getElementById('moto3').innerHTML = weatherInfo4.towns["3"].motto;
	document.getElementById('3founded').innerHTML = weatherInfo4.towns["3"].yearFounded;
	document.getElementById('3pop').innerHTML = weatherInfo4.towns["3"].currentPopulation;
	document.getElementById('3rFall').innerHTML = weatherInfo4.towns["3"].averageRainfall;
	

} // end of onload