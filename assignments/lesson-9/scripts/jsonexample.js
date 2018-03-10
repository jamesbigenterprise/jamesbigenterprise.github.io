var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/austin.json', 'true');
weatherObject.send();
weatherObject.onload = function()
{
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	
	document.getElementById('firstcity').innerHTML = weatherInfo.current_observation.display_location.city;
	document.getElementById('1cond').innerHTML = weatherInfo.current_observation.weather;
	
	document.getElementById('1temp').innerHTML = weatherInfo.current_observation.temperature_string;
	document.getElementById('1wind').innerHTML = weatherInfo.current_observation.wind_string;
	document.getElementById('1img').src = weatherInfo.current_observation.icon_url;
} // end of onload

