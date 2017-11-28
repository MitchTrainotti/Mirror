 function SecondsToTime(json){
  s = json.list[0].dt;

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  time = (hrs + ':' + mins + ':' + secs + '.' + ms);

  return time;
  
}

