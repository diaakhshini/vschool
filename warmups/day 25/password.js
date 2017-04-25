document.getElementById("btn").addEventListener("click", randowmPassword);


function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




function randowmPassword(){
    var str="";
    var passwordLength =randNumber(8,16);
    
    for(var i=0; i<passwordLength; i++){
   str = str +  String.fromCharCode(randNumber(33,122));
}
   alert(str + "      the length of it : " + passwordLength);
}