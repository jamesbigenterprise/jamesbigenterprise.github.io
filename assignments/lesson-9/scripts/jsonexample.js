



var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/Austin.json', 'true');

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

var weatherObject2 = new XMLHttpRequest();

weatherObject2.open('GET', 'http://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/San_Antonio.json', 'true');

weatherObject2.send();

weatherObject2.onload = function()
{
	var weatherInfo2 = JSON.parse(weatherObject2.responseText);
	console.log(weatherInfo2);
	
	document.getElementById('2city').innerHTML = weatherInfo2.current_observation.display_location.city;
	document.getElementById('2cond').innerHTML = weatherInfo2.current_observation.weather;
	
	document.getElementById('2temp').innerHTML = weatherInfo2.current_observation.temperature_string;
	document.getElementById('2wind').innerHTML = weatherInfo2.current_observation.wind_string;
	document.getElementById('2img').src = weatherInfo2.current_observation.icon_url;
} // end of onload

var Object3 = new XMLHttpRequest();

Object3.open('GET', 'http://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/Dallas.json', 'true');

Object3.send();

Object3.onload = function()
{
	var Info3 = JSON.parse(Object3.responseText);
	console.log(Info3);
	
	document.getElementById('3city').innerHTML = Info3.current_observation.display_location.city;
	document.getElementById('3cond').innerHTML = Info3.current_observation.weather;
    document.getElementById('3wind').innerHTML = Info3.current_observation.wind_string;
	document.getElementById('3img').src = Info3.current_observation.icon_url;
	document.getElementById('3temp').innerHTML = Info3.current_observation.temperature_string;
	
} // end of onload


