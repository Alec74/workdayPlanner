var firstFEl = $('.oneForm');
var secondFEl = $('.twoForm');
var thirdFEl = $('.threeForm');
var fourthFEl = $('.fourForm');
var fifthFEl = $('.fiveForm');
var sixthFEl = $('.sixForm');
var seventhFEl = $('.sevenForm');
var eighthFEl = $('.eightForm');
var ninthFEl = $('.nineForm');
var firstLi = $('.spot9');
var secondLi = $('.spot10');
var thirdLi = $('.spot11');
var fourthLi = $('.spot12');
var fifthLi = $('.spot13');
var sixthLi = $('.spot14');
var seventhLi = $('.spot15');
var eighthLi = $('.spot16');
var ninthLi = $('.spot17');
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
var dayPass = today.format('MM-DD-YY');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');

$("#currentDay").text(today.format("[Today is] dddd"));

// check past/present/future blocks
console.log(dayPass)
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

    // 9am time coloring
    if (time.isSame(time9)) {
        nine.addClass('table-primary');
    } else if (time.isBefore(time9)) {
        nine.addClass('table-success');
    } else if (time.isAfter(time9)) {
        nine.addClass('table-warning')
    }

    // 10am table coloring
    if (time.isSame(time10)) {
        ten.addClass('table-primary');
    } else if (time.isBefore(time10)) {
        ten.addClass('table-success');
    } else if (time.isAfter(time10)) {
        ten.addClass('table-warning')
    }

    // 11am coloring
    if (time.isSame(time11)) {
        eleven.addClass('table-primary');
    } else if (time.isBefore(time11)) {
        eleven.addClass('table-success');
    } else if (time.isAfter(time11)) {
        eleven.addClass('table-warning')
    }

    // 12 noon coloring
    if (time.isSame(time12)) {
        twelve.addClass('table-primary');
    } else if (time.isBefore(time12)) {
        twelve.addClass('table-success');
    } else if (time.isAfter(time12)) {
        twelve.addClass('table-warning')
    }

    // 1pm coloring
    if (time.isSame(time13)) {
        one.addClass('table-primary');
    } else if (time.isBefore(time13)) {
        one.addClass('table-success');
    } else if (time.isAfter(time13)) {
        one.addClass('table-warning')
    }

    // 2pm coloring
    if (time.isSame(time14)) {
        two.addClass('table-primary');
    } else if (time.isBefore(time14)) {
        two.addClass('table-success');
    } else if (time.isAfter(time14)) {
        two.addClass('table-warning')
    }

    // 3pm coloring
    if (time.isSame(time15)) {
        three.addClass('table-primary');
    } else if (time.isBefore(time15)) {
        three.addClass('table-success');
    } else if (time.isAfter(time15)) {
        three.addClass('table-warning')
    }

    // 4pm coloring
    if (time.isSame(time16)) {
        four.addClass('table-primary');
    } else if (time.isBefore(time16)) {
        four.addClass('table-success');
    } else if (time.isAfter(time16)) {
        four.addClass('table-warning')
    }

    // 5pm coloring
    if (time.isSame(time17)) {
        five.addClass('table-primary');
    } else if (time.isBefore(time17)) {
        five.addClass('table-success');
    } else if (time.isAfter(time17)) {
        five.addClass('table-warning')
    }
}

// check the time every ten seconds to update the colors of the table
checkTime()
check = setInterval(function(){
    checkTime()
},10000)

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

    // print to the page
    firstLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    secondLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    thirdLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    fourthLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    fifthLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    sixthLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    seventhLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    eighthLi.append('<li class="list-group-item">' + eventAdd + '</li>');

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

    // print to the page
    ninthLi.append('<li class="list-group-item">' + eventAdd + '</li>');

    // clear the input
    $('textarea[name="event9"]').val('')
});