// Declare variables to be used later in the script
// Timeblock form variables
var firstFEl = $('.oneForm');
var secondFEl = $('.twoForm');
var thirdFEl = $('.threeForm');
var fourthFEl = $('.fourForm');
var fifthFEl = $('.fiveForm');
var sixthFEl = $('.sixForm');
var seventhFEl = $('.sevenForm');
var eighthFEl = $('.eightForm');
var ninthFEl = $('.nineForm');

// Empty ul elements to add user input
var firstLi = $('.spot9');
var secondLi = $('.spot10');
var thirdLi = $('.spot11');
var fourthLi = $('.spot12');
var fifthLi = $('.spot13');
var sixthLi = $('.spot14');
var seventhLi = $('.spot15');
var eighthLi = $('.spot16');
var ninthLi = $('.spot17');

// each timeblock set into table section variables
var nine = $('.9am');
var ten = $('.10am');
var eleven = $('.11am');
var twelve = $('.12am');
var one = $('.1pm');
var two = $('.2pm');
var three = $('.3pm');
var four = $('.4pm');
var five = $('.5pm');
var today = moment();

// get the current day from moment.js
$("#currentDay").text(today.format("[Today is] dddd MMM DD, YYYY"));

// check past/present/future timeblocks to display accurate coloring
function checkTime() {
    var format = 'hh'

    var time = moment();
    var time9 = moment('09', format); 
    var time10 = moment('10', format);
    var time11 = moment('11', format);
    var time12 = moment('12', format);
    var time13 = moment('13', format);
    var time14 = moment('14', format);
    var time15 = moment('15', format);
    var time16 = moment('16', format);
    var time17 = moment('17', format);
    var time18 = moment('18', format);

    // 9am time coloring
    if (time.isBetween(time9, time10)) {
        nine.addClass('present');
    } else if (time.isBefore(time9)) {
        nine.addClass('future');
    } else if (time.isAfter(time9)) {
        nine.addClass('past')
    }

    // 10am table coloring
    if (time.isBetween(time10, time11)) {
        ten.addClass('present');
    } else if (time.isBefore(time10)) {
        ten.addClass('future');
    } else if (time.isAfter(time10)) {
        ten.addClass('past')
    }

    // 11am coloring
    if (time.isBetween(time11, time12)) {
        eleven.addClass('present');
    } else if (time.isBefore(time11)) {
        eleven.addClass('future');
    } else if (time.isAfter(time11)) {
        eleven.addClass('past')
    }

    // 12 noon coloring
    if (time.isBetween(time12, time13)) {
        twelve.addClass('present');
    } else if (time.isBefore(time12)) {
        twelve.addClass('future');
    } else if (time.isAfter(time12)) {
        twelve.addClass('past')
    }

    // 1pm coloring
    if (time.isBetween(time13, time14)) {
        one.addClass('present');
    } else if (time.isBefore(time13)) {
        one.addClass('future');
    } else if (time.isAfter(time13)) {
        one.addClass('past')
    }

    // 2pm coloring
    if (time.isBetween(time14, time15)) {
        two.addClass('present');
    } else if (time.isBefore(time14)) {
        two.addClass('future');
    } else if (time.isAfter(time14)) {
        two.addClass('past')
    }

    // 3pm coloring
    if (time.isBetween(time15, time16)) {
        three.addClass('present');
    } else if (time.isBefore(time15)) {
        three.addClass('future');
    } else if (time.isAfter(time15)) {
        three.addClass('past')
    }

    // 4pm coloring
    if (time.isBetween(time16, time17)) {
        four.addClass('present');
    } else if (time.isBefore(time16)) {
        four.addClass('future');
    } else if (time.isAfter(time16)) {
        four.addClass('past')
    }

    // 5pm coloring
    if (time.isBetween(time17, time18)) {
        five.addClass('present');
    } else if (time.isBefore(time17)) {
        five.addClass('future');
    } else if (time.isAfter(time17)) {
        five.addClass('past')
    }
}

// check the time every ten seconds to update the colors of the table
checkTime()
check = setInterval(function(){
    checkTime()
},10000)

// default list items by local storage
function defaultStorage(){
    if(localStorage.getItem("9am")){
        var stored9am = [localStorage.getItem("9am")];
        firstLi.append('<li class="list-group-item">' + stored9am + '</li>');
        
    }
    if(localStorage.getItem("10am")){
        var stored10am = localStorage.getItem("10am");
        secondLi.append('<li class="list-group-item">' + stored10am + '</li>');
    }
    if(localStorage.getItem("11am")){
        var stored11am = localStorage.getItem("11am");
        thirdLi.append('<li class="list-group-item">' + stored11am + '</li>');
    }
    if(localStorage.getItem("12am")){
        var stored12am = localStorage.getItem("12am");
        fourthLi.append('<li class="list-group-item">' + stored12am + '</li>');
    }
    if(localStorage.getItem("1pm")){
        var stored1pm = localStorage.getItem("1pm");
        fifthLi.append('<li class="list-group-item">' + stored1pm + '</li>');
    }
    if(localStorage.getItem("2pm")){
        var stored2pm = localStorage.getItem("2pm");
        sixthLi.append('<li class="list-group-item">' + stored2pm + '</li>');
    }
    if(localStorage.getItem("3pm")){
        var stored3pm = localStorage.getItem("3pm");
        seventhLi.append('<li class="list-group-item">' + stored3pm + '</li>');
    }
    if(localStorage.getItem("4pm")){
        var stored4pm = localStorage.getItem("4pm");
        eighthLi.append('<li class="list-group-item">' + stored4pm + '</li>');
    }
    if(localStorage.getItem("5pm")){
        var stored5pm = localStorage.getItem("5pm");
        ninthLi.append('<li class="list-group-item">' + stored5pm + '</li>');
    }
}

defaultStorage();
// ALL THE BUTTONS FOR EACH TIMEBLOCK
// number 1
firstFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event1"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("9am", eventAdd);
    var stored9am = localStorage.getItem("9am");

    // print to the page
    firstLi.append('<li class="list-group-item">' + stored9am + '</li>');

    // clear the input
    $('textarea[name="event1"]').val('')
});

// number 2
secondFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event2"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("10am", eventAdd);
    var stored10am = localStorage.getItem("10am");

    // print to the page
    secondLi.append('<li class="list-group-item">' + stored10am + '</li>');

    // clear the input
    $('textarea[name="event2"]').val('')
});

// number 3
thirdFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event3"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("11am", eventAdd);
    var stored11am = localStorage.getItem("11am");

    // print to the page
    thirdLi.append('<li class="list-group-item">' + stored11am + '</li>');

    // clear the input
    $('textarea[name="event3"]').val('')
});

// number 4
fourthFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event4"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("12am", eventAdd);
    var stored12am = localStorage.getItem("12am");

    // print to the page
    fourthLi.append('<li class="list-group-item">' + stored12am + '</li>');

    // clear the input
    $('textarea[name="event4"]').val('')
});

// number 5
fifthFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event5"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("1pm", eventAdd);
    var stored1pm = localStorage.getItem("1pm");

    // print to the page
    fifthLi.append('<li class="list-group-item">' + stored1pm + '</li>');

    // clear the input
    $('textarea[name="event5"]').val('')
});

// number 6
sixthFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event6"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("2pm", eventAdd);
    var stored2pm = localStorage.getItem("2pm");

    // print to the page
    sixthLi.append('<li class="list-group-item">' + stored2pm + '</li>');

    // clear the input
    $('textarea[name="event6"]').val('')
});

// number 7
seventhFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event7"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("3pm", eventAdd);
    var stored3pm = localStorage.getItem("3pm");

    // print to the page
    seventhLi.append('<li class="list-group-item">' + stored3pm + '</li>');

    // clear the input
    $('textarea[name="event7"]').val('')
});

// number 8
eighthFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event8"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("4pm", eventAdd);
    var stored4pm = localStorage.getItem("4pm");

    // print to the page
    eighthLi.append('<li class="list-group-item">' + stored4pm + '</li>');

    // clear the input
    $('textarea[name="event8"]').val('')
});

// number 9
ninthFEl.on('submit', function handleFormSubmit(event) {
    // form submissions to add list elements to events
    event.preventDefault();
    var eventAdd = $('textarea[name="event9"]').val();
    
    // if nothing in form dont print
    if (!eventAdd) {
        console.log('No event items were filled out!');
        return;
    }
    // local storage addition on click
    localStorage.setItem("5pm", eventAdd);
    var stored5pm = localStorage.getItem("5pm");

    // print to the page
    ninthLi.append('<li class="list-group-item">' + stored5pm + '</li>');

    // clear the input
    $('textarea[name="event9"]').val('')
});