function GetUVIndex(json){
var UV = json.daily.data[0].uvIndex;
UV = ("UV Index = " + UV);
return UV;
}