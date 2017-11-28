function GetWeather(json){
var weather = json.currently.summary;

weather = titleCase(weather);
return weather;
}

//Title case is used to change the output from all lowercase to a more appealing look of
//capitalizing the first letter of each word. Eg. titlecase(it iS ClOudY) => It Is Cloudy
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}