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
        else {
            openColor = '#FF4545';
            message = message+ "Closed";
        }
        document.getElementById('open_closed').innerHTML = message;
        setTimeout('open_closed("'+day_hour+'");','1000');
        document.getElementById('open_closed').style.color = openColor;
        return true;

}
