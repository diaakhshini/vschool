var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];


function sendTextCallback(name){
    console.log("Your text send" + name );
}

function dontCallCallback(name){
    console.log("Dont Call -" + name );
}

function callCallback(name){
    console.log("I am Call him :" + name );
}



function attempCall(names, call, dontCall, sendText) {
for(var i=0; i< names.length; i++){
    if(names[i].length % 2 === 0){
        call(names[i])
    }
    else if(names[i].length % 2 === 1){
        dontCall(names[i]);
    }

}
}

   
attempCall(names, callCallback, dontCallCallback, sendTextCallback);