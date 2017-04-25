function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var array=["hello", "how are you", "excellent", "good", "bad", "worse"];

$(document).ready(function() {

$("#btn").click(function() {
    var index = getRandomInt(0,array.length-1);
    var myTrash = array[index];
    var name = $("#myName").val();
var game = $("#game").val();
var myDate = $("#date").val();
var highScore = $("#highScore").val();
    if($("#trash").is(':checked')) {
        $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td><td>' + myTrash + '</td></tr>');
    } else {
         $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td></tr>');
    }
    
});
} );

//"<td>" game "</td>" "<td>" myDate "</td>" "<td>" highScore "</td>"