function GetDailySummary(json){
var DailySummary = json.daily.data[0].summary;
return DailySummary;
}