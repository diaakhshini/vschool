var array=[];
function divideNumber(num){
    var myNum = num.toString();
    for(var i=0; i<myNum.length; i ++){
    array.push(parseInt(myNum[i]));
    }
    console.log(array);
}
divideNumber(1881);