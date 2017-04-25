var lower = function (a, b) {
    if (b < a){
    console.log(b)
    } 
    else {
    console.log(a)}
};

var monkeyTrouble = function (aSmile, bSmile) {
    if (aSmile == true && bSmile == true) {
        return true;
    } else if(aSmile == false && bSmile == false) {
        return true;
    } else {
        return false;
    }
};
    
console.log(lower(7, 6)) ;
console.log(monkeyTrouble(true, true))  ;  