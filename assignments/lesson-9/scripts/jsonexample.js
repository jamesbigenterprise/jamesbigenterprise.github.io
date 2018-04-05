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


var weatherObject2 = new XMLHttpRequest();
weatherObject2.open('GET', 'https://api.wunderground.com/api/9e1b0ca9eddf1934/conditions/q/TX/San_Antonio.json', 'true');
weatherObject2.send();
weatherObject2.onload = function()
{
	var weatherInfo2 = JSON.parse(weatherObject2.responseText);
	console.log(weatherInfo2);
	

	document.getElementById('2cond').innerHTML = weatherInfo2.current_observation.weather;
	
	document.getElementById('2temp').innerHTML = weatherInfo2.current_observation.temperature_string;
	document.getElementById('2wind').innerHTML = weatherInfo2.current_observation.wind_string;
	document.getElementById('2img').src = weatherInfo2.current_observation.icon_url;
} // end of onload


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
	document.getElementById('firstcity').innerHTML = weatherInfo4.towns["0"].name;
	document.getElementById('moto1').innerHTML = weatherInfo4.towns["0"].motto;
	document.getElementById('1founded').innerHTML = weatherInfo4.towns[1].yearFounded;
	document.getElementById('1pop').innerHTML = weatherInfo4.towns["0"].currentPopulation;
	document.getElementById('1rFall').innerHTML = weatherInfo4.towns["0"].averageRainfall;
	
	var weatherInfo4 = JSON.parse(byuiinfo.responseText);
	console.log(weatherInfo4);
	document.getElementById('2city').innerHTML = weatherInfo4.towns["1"].name;
	document.getElementById('moto2').innerHTML = weatherInfo4.towns["1"].motto;
	document.getElementById('2founded').innerHTML = weatherInfo4.towns[1].yearFounded;
	document.getElementById('2pop').innerHTML = weatherInfo4.towns["1"].currentPopulation;
	document.getElementById('2rFall').innerHTML = weatherInfo4.towns["1"].averageRainfall;
	
	var weatherInfo4 = JSON.parse(byuiinfo.responseText);
	console.log(weatherInfo4);
	document.getElementById('3city').innerHTML = weatherInfo4.towns["3"].name;
	document.getElementById('moto3').innerHTML = weatherInfo4.towns["2"].motto;
	document.getElementById('3founded').innerHTML = weatherInfo4.towns[2].yearFounded;
	document.getElementById('3pop').innerHTML = weatherInfo4.towns[2].currentPopulation;
	document.getElementById('3rFall').innerHTML = weatherInfo4.towns["2"].averageRainfall;
	

} // end of onload