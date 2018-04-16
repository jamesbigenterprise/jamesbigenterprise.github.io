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


var byuiinfo = new XMLHttpRequest();
byuiinfo.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', 'true');
byuiinfo.send();
byuiinfo.onload = function()
{
	var weatherInfo4 = JSON.parse(byuiinfo.responseText);
	console.log(weatherInfo4);
	//for the name of the page

    document.getElementById('2city').innerHTML = weatherInfo4.towns["1"].name;
	document.getElementById('secondcitytitle').innerHTML = weatherInfo4.towns["1"].name;
	document.getElementById('moto2').innerHTML = weatherInfo4.towns["1"].motto;
	document.getElementById('2founded').innerHTML = weatherInfo4.towns[1].yearFounded;
	document.getElementById('2pop').innerHTML = weatherInfo4.towns["1"].currentPopulation;
	document.getElementById('2rFall').innerHTML = weatherInfo4.towns["1"].averageRainfall;
		

} // end of onload

