function UpdateImage(Weather, json){

//I updated the images in the folder to be the how the weather is descriped in the API.
//I simply make the path be dependant on the description.
var path = "Images/"+Weather+".png";

//We then must calculate the current time and see if it is past sunset time and sunrise time.
var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var time = hour + minutes/60;

s = json.daily.data[0].sunsetTime;
day = s/86400;
day = Math.floor(day);
s = s - day*86400;
sunsetTime = s/3600 - 5; 
//We need to subtract 5 hours in order to account for the fact that the current time is given
//in terms of English time. (Time 0+).  Should we change the city, we must also change this part of the code

s = json.daily.data[0].sunriseTime;
day = s/86400;
day = Math.floor(day);
s = s - day*86400;
sunriseTime = s/3600 - 5;

//If our time is after sunset or before sunrise that means the sun is not out and our images
//should contain the moon instead of the sun.  In the images file each weather condition has 2 files, one for day time
//and one for night time.
if(time>sunsetTime || time<sunriseTime){
	path = "Images/"+Weather+" Night.png";
}

//We return the path so we can update our image.
return path;
}