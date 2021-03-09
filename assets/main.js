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

// global variable for the current 
var currentHour = moment().format("H");

// Identify each hour block in textarea
$(".description").each(function(index) {
    // take off hour- in row time-block id
    var hour = $(this).parent().attr('id').split("-")[1];
    // compare if current hour is greater than div class id hour
    if (parseInt(hour) > parseInt(currentHour) ){
        // code to future css color
        $(this).addClass("future");
        // compare if current hour equals div class id hour (green)
    } else if (parseInt(hour) === parseInt(currentHour) ) {
        //  code to present css color (red)
        $(this).addClass("present");
    } else {
        // else make past css color (gray)
        $(this).addClass("past");
    }
})

// Set-up text input boxes to save info with page refresh 

// Pull the hour for local storage
$(".time-block").each(function() {
    // Get elements by id
    const id = $(this).attr("id");

    // Retrive data from local storage
    var storedDescription = localStorage.getItem(id);

    $(this).children("textarea").val(storedDescription);

})
// click on button and log input to local storage
$(".saveBtn").on("click", function () {
    // create variable and DOM traverse to parent of save button to the id identifier
    var id = $(this).parent().attr("id");
    // get the value from the input area
    var description = $(this).siblings("textarea").val();
    // store value from input area into local storage
    localStorage.setItem(id, description);
})