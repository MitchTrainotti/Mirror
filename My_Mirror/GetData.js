function GetData(){
url = 'https://api.darksky.net/forecast/f8e0a1d7b2b6dcff1976aa1292e48d82/43.0409388,-87.9261466?exclude=minutely';
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send(null);
	
	StringResponse = xmlHttp.responseText;
	
	var json = JSON.parse(StringResponse);
return json;


setTimeout(GetData, 900000);


//This function can only be called once every 90 seconds or it will exceed the API limit!
}






