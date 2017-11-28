function GetRainChance(json){
var RainChance = json.daily.data[0].precipProbability * 100;
RainChance = Math.round(RainChance);
article = 'a';

//I need to update the phrase just incase the article is incorrect. For example 
//'There is a 8% change of percipitation', needs to update its article to 'an'.
if ((RainChance == 8) || (RainChance == 11) || (RainChance == 18)){
		article = 'an';
}	

//The if statement is repeated in order to make the code easier to read.  This is not a
//good practice if we want to make the code more efficient, but is fine for this project.
if ((RainChance>=80)&&(RainChance<90)){
	article = 'an';
}

RainChance = "There is " + article + " " + RainChance + "%" + " chance of Precipitation";
return RainChance;
}