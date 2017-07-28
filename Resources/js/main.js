var day_hour;
function date_time(date_time)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        if(d>3 && d<21) { d = d+'th';}
          switch (d % 10) {
            case 1:  d=d+"st";
            case 2:  d=d+"nd";
            case 3:  d=d+"rd";
        default: d=d+"th";
    }
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        day_hour = [days[day], h];
        document.getElementById('date_time').innerHTML = result;
        setTimeout('date_time("'+date_time+'");','1000');
        return day_hour;
}

function open_closed(day_hour)
{
        openDays = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');
        openTimes = new Array('09', '10', '11', '12', '14', '15', '16');
        var message = "Office is ";
        var openColor = 0;
        if (day_hour[1] == openDays && day_hour[2] == openTimes )
        {
            openColor = '#208000';
            message = message+"Open";
        }
        else if (day_hour[1] == openDays && day_hour[2] == '13' )  {
          openColor = '#FF9867';
          message = message+"Closed for Lunch";
        }
        else {
            openColor = '#FF4545';
            message = message+ "Closed";
        }
        document.getElementById('open_closed').innerHTML = message;
        setTimeout('open_closed("'+day_hour+'");','1000');
        document.getElementById('open_closed').style.color = openColor;
        return true;

}
'use strict';
var docStyle = document.documentElement.style;
var aElem = document.querySelector('a');
var boundingClientRect = aElem.getBoundingClientRect();
aElem.onmousemove = function (e) {
    var x = e.clientX - boundingClientRect.left;
    var y = e.clientY - boundingClientRect.top;
    var xc = boundingClientRect.width / 2;
    var yc = boundingClientRect.height / 2;
    var dx = x - xc;
    var dy = y - yc;
    docStyle.setProperty('--rx', dy / -1 + 'deg');
    docStyle.setProperty('--ry', dx / 10 + 'deg');
};
aElem.onmouseleave = function (e) {
    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
    docStyle.setProperty('--ry', '0');
};
aElem.onmousedown = function (e) {
    docStyle.setProperty('--tz', '-25px');
};
document.body.onmouseup = function (e) {
    docStyle.setProperty('--tz', '-12px');
};
