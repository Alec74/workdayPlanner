var nine = $('.9am');
var ten = $('.10am');
var eleven = $('.11am');
var twelve = $('.12am');
var one = $('.1pm');
var two = $('.2pm');
var three = $('.3pm');
var four = $('.4pm');
var five = $('.5pm');
var times = [nine, ten, eleven, twelve, one, two, three, four, five];
var today = moment();
var dayPass = today.format('MM-DD-YY');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');

$("#currentDay").text(today.format("[Today is] dddd"));

// check past/present/future blocks
console.log(dayPass)
function checkTime() {
    var format = 'hh:mm:ss'

    var time = moment();
    var time9 = moment('09:00:00', format);
    var time10 = moment('10:00:00', format);
    var time11 = moment('11:00:00', format);
    var time12 = moment('12:00:00', format);
    var time13 = moment('13:00:00', format);
    var time14 = moment('14:00:00', format);
    var time15 = moment('15:00:00', format);
    var time16 = moment('16:00:00', format);
    var time17 = moment('17:00:00', format);

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
checkTime()