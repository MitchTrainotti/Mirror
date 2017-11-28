function GetTemperature(json){
	var Temperature = json.currently.temperature;
	Temperature = Math.round(Temperature);
	Temperature = (Temperature + '&#8457');
	
return Temperature;
}






