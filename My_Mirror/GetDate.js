function GetDate(){
				var today = new Date();

				var year = today.getFullYear();
				var month = today.getMonth();
				var day = today.getDate();

						switch (month){

							case 0:
								month = "January";
								break;
							case 1:
								month = "February";
								break;
							case 2:
								month = "March";
								break;
							case 3:
								month = "April";
								break;
							case 4:
								month = "May";
								break;
							case 5:
								month = "June";
								break;
							case 6:
								month = "July";
								break;
							case 7:
								month = "August";
								break;
							case 8:
								month = "September";
								break;
							case 9:
								month = "October";
								break;
							case 10:
								month = "November";
								break;
							case 11:
								month = "December";
								break;
						}
			
				//Adding suffix to day
				var j = day % 10,
					k = day % 100;
				if (j == 1 && k != 11) {
					day = day + "st";
				}
				else if (j == 2 && k != 12) {
					day = day + "nd";
				}
				else if (j == 3 && k != 13) {
					day = day + "rd";
				}
				else day = day + "th";
				//end of suffix adding
				
				
var fullDate = (month + " " + day + ", " + year); 
return fullDate;
}