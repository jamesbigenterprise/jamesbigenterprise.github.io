var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/austin.json', 'true');
weatherObject.send();
weatherObject.onload = function()
{
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	

	document.getElementById('1cond').innerHTML = weatherInfo.current_observation.weather;
	
	document.getElementById('1temp').innerHTML = weatherInfo.current_observation.temperature_string;
	document.getElementById('1wind').innerHTML = weatherInfo.current_observation.wind_string;
	document.getElementById('1img').src = weatherInfo.current_observation.icon_url;
} // end of onload



var byuiinfo = new XMLHttpRequest();
byuiinfo.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', 'true');
byuiinfo.send();
byuiinfo.onload = function()
{
	var weatherInfo4 = JSON.parse(byuiinfo.responseText);
	console.log(weatherInfo4);
	//for the name of the page
	document.getElementById('firstcitytitle').innerHTML = weatherInfo4.towns["0"].name;
	document.getElementById('firstcity').innerHTML = weatherInfo4.towns["0"].name;
	document.getElementById('moto1').innerHTML = weatherInfo4.towns["0"].motto;
	document.getElementById('1founded').innerHTML = weatherInfo4.towns[1].yearFounded;
	document.getElementById('1pop').innerHTML = weatherInfo4.towns["0"].currentPopulation;
	document.getElementById('1rFall').innerHTML = weatherInfo4.towns["0"].averageRainfall;
	

} // end of onload

