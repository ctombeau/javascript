
var event = document.getElementById("event");
event.innerHTML = "26-07-2023 10:00:00";

setInterval(differenceDate,1000);

function differenceDate()
{
    var today = new Date();

    var eventDay = new Date("2023-7-26 10:00:00");

    var delta =Math.abs(eventDay - today)/1000;

    var day = Math.floor(delta/86400);

    delta -= day * 86400;

    var hour = Math.floor(delta/3600) % 24;

    delta -= hour * 3600;

    var minute = Math.floor(delta/60) % 60;

    delta -= minute * 60;

    var seconde = Math.floor(delta % 60);

    document.getElementById("day").innerHTML=day;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("seconde").innerHTML=seconde;
}



 var message = "Il nous reste "
                // + month + " mois " 
                 + day + " jours " + hour + 
                " heures " + minute + " minutes " +  seconde + " secondes ";
        

//alert(eventDay);
//alert(message);
//alert(today.getMonth());



