function getPredicition(json){
	var timeNow = json.list[0].dt;
	alert(timeNow);
	var TemperatureHi = json.list[0].main.temp_max;
	
	
	
	
	
	
	var TemperatureHi = json.list[0].main.temp_max;
	TemperatureHi = (TemperatureHi + '&#8457');
	
	var TemperatureLow = json.list[0].main.temp_min;
	TemperatureLow = (TemperatureLow + '&#8457');
	
	var Prediction_Text = (TemperatureLow + " " + TemperatureHi);
	
return Prediction_Text;
}