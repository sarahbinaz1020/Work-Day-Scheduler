// Setting time at the top of the page

// global variable for 
var currentDay = document.getElementById("#currentDay");

// Global variable date
var date = document.getElementById("#date");

// Set date format
var date = (moment().format('dddd Do YYY, h:mm a'));

// show date on page
document.getElementById("currentDay").innerHTML = date;

// Set interval on time to update every 1 minute
var timeUpdate = setInterval (date, 60000);

function date() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

// Setting up the scheduler

var scheduler = new p.Calendar(document.getElementById("container"));

scheduler.render();
