// Setting time at the top of the page

// global variable for 
var currentDay = document.getElementById("#currentDay");

// Global variable date
var date = document.getElementById("#date");

// Set date format
var date = (moment().format('dddd Do YYY, H:mm a'));

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
// var hourEl = $('.hour');

// var descriptionEl = $('.description');
// console.log(descriptionEl);
// color code the time blocks - text area - past/current/future time colors

var currentHour = moment().format("H");
console.log(currentHour);


// Identify each hour block in textarea
$(".description").each(function(index) {
    console.log(index);
    console.log($(this).parent().attr('id'));
    var hour = $(this).parent().attr('id').split("-")[1];
    if (parseInt(hour) > parseInt(currentHour) ){
        $(this).addClass("future");
    } else if (parseInt(hour) === parseInt(currentHour) ) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }

})


// Set-up text input boxes to save info with page refresh 

    // set-up click on save button

    // save text input data with page refresh-capturing text

    // set-up local storage to save 