var year = 2017;

var counter = 20;
var result = true;


while (counter >= 0) {

    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        result = true;
        console.log(year);
        year++;
        counter--;
    } else {
        year++;
    }
}