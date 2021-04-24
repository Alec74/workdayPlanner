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

    if (time.isAfter(time9)) {

        console.log('is between')

    } else {

        console.log('is not between')

    }
}
checkTime()