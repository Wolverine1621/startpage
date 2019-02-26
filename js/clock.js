window.onload = init;

function init() {
    startTime();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);
    
    document.getElementById('clock').innerHTML =
    h + ":" + m
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {  
        i = "0" + i
    }  // add zero in front of numbers < 10

    return i;
  }