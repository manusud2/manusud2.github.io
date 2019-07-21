getDate();
function getDate() 
{
    // get day formated
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[d.getDay()];
    
    var monthname = new Array(12);
    monthname[0] = "January";
    monthname[1] = "February";
    monthname[2] = "March";
    monthname[3] = "April";
    monthname[4] = "May";
    monthname[5] = "June";
    monthname[6] = "July";
    monthname[7] = "August";
    monthname[8] = "September";
    monthname[9] = "October";
    monthname[10] = "November";
    monthname[11] = "December";
    var month = monthname[d.getMonth()];
    
    document.getElementById("currentDate").innerHTML = day + ", " + d.getDate() + " " + month +  " " + d.getFullYear();
}