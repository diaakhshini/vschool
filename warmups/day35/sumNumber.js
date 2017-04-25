var array= [1,2,3,4,5];
var sum=0;
function sunNumber(num){
    for(var i=0; i<array.length; i++){
     
        sum=sum+array[i];
        
    }
  
    console.log("the sum of elemint in array is :" + sum);
}


sunNumber(array);