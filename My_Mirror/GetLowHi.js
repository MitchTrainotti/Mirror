function GetLowHi(json){	

	var TemperatureHi = json.hourly.data[0].temperature;
	var TemperatureLow = json.hourly.data[0].temperature;

	//When the API returns the Hi's and Low's they are not updated throughout the day.
	//If the high for the day is 80 degrees that occurs at 11AM and it is now 1PM, the 
	//high will still read 80 degrees.  This for loop is used to compare the temperature
	//to what the predicted output for the next 10 hoursto get a better indicator for the
	//high and low for the forseeable future.
	
	for(i = 0; i<=9; i++){
	NewTemperature = json.hourly.data[i].temperature;
	
		if (TemperatureHi < NewTemperature){
			TemperatureHi = NewTemperature;}
		
		if (TemperatureLow > NewTemperature){
			TemperatureLow = NewTemperature;}

	}
	
	
	TemperatureHi = Math.round(TemperatureHi);
	TemperatureHi = (TemperatureHi + '&#8457'); //Adding the degrees F to the end.
	
	TemperatureLow = Math.round(TemperatureLow);
	TemperatureLow = (TemperatureLow + '&#8457');
	
	//adding arrows below.
	var Prediction_Text = (TemperatureLow + "&#8681" + " " + TemperatureHi + "&#8679");
	
return Prediction_Text;
}