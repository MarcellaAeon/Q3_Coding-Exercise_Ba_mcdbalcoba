function velocityAnswer(){
    var miles = prompt("Enter Distance in Miles");
    var minutes = prompt("Enter Time in Minutes");
    var meters = parseInt(miles)*1609.34;
    var seconds = parseInt(minutes)*60;
    var speed = parseInt(meters)/parseInt(seconds);
    document.getElementById("distance").innerHTML = miles + " miles";
    document.getElementById("time").innerHTML = minutes + " minutes";
    document.getElementById("answer").innerHTML = speed + " m/s";
}