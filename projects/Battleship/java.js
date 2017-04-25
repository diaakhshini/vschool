/**
 * Created by User on 3/1/2017.
 */

var names =[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

var size=5;
var Done=false;//to change the value of size
if(prompt("start PC")=='y' ) {

    while (true) {

        if (Done === true) {
            if (size === 3)break;
            else {
                size--;
                Done = false;
            }
        }


        var a = parseInt(prompt("Enter A"));

        var b = parseInt(prompt("Enter B"));
        var string = "";

        //right
        if (size <= (10 - b) + 1) {
            var c = 0;
            for (var i = 0; i < size; i++) {
                if (names[a][b + i] == 0) c++;
                else break;
                if (c == size) {
                    names = fill(names, size, a, b, 'R');
                    Done = true;
                }


            }


        }


        //left
        if (size <= b + 1) {
            var c = 0;
            for (var i = 0; i < size; i++) {
                if (names[a][b - i] == 0) c++;
                else break;
                if (c == size) {
                    names = fill(names, size, a, b, 'L');
                    Done = true;
                }


            }
        }


        //Down
        if (size <= (10 - a) + 1) {
            var c = 0;
            for (var i = 0; i < size; i++) {
                if (names[a + i][b] == 0) c++;
                else break;
                if (c == size) {
                    names = fill(names, size, a, b, 'D');
                    Done = true;
                }


            }
        }


        //Up
        if (size <= a) {
            var c = 0;
            for (var i = 0; i < size; i++) {
                if (names[a - i][b] == 0) c++;
                else break;
                if (c == size) {
                    names = fill(names, size, a, b, 'U');
                    Done = true;
                }


            }
        }


        var string = "";
        for (var i = 0; i < 10; i++) {
            string = " "
            for (var j = 0; j < 10; j++)
                string = string + names[i][j] + " ";
            console.log(string);

        }
        console.log("---------------------------------------------------------------");
    }

    console.log("user user user user user user user user user user user ");
    var counter = 0;
    while (true) {
        var a = parseInt(prompt("Enter Y Enter Y Enter Y Enter Y Enter Y Enter Y Enter Y Enter Y "));

        var b = parseInt(prompt("Enter X Enter X Enter X Enter X Enter X Enter X Enter X Enter X "));

        if (names[a][b] == 1) {
            names[a][b] = 8;
            counter++;
        }


        var string = "";
        for (var i = 0; i < 10; i++) {
            string = " "
            for (var j = 0; j < 10; j++)
                string = string + names[i][j] + " ";
            console.log(string);

        }
        console.log("---------------------------------------------------------------");

        if (counter == 12)break;
        else if (check(names) === true)break;

    }
}else console.log("prog close");
function fill(name,size,a, b,dir) {
 switch(dir){
     case 'U': for( var i=0; i<size;  i++)
                    { name[a-i][b]=1;}break;

     case 'D': for( var i=0; i<size;  i++)
     { name[a+i][b]=1;}break;

     case 'L': for( var i=0; i<size;  i++)
     { name[a][b-i]=1;}break;

     case 'R': for( var i=0; i<size;  i++)
     { name[a][b+i]=1;}break;

     default:break;

 }
 return name
}

function check(name) {
    var check= false;
    for( var i=0; i<size;  i++) {
        for (var j = 0; j < size; j++) {
            if (name[i][j] === 0 ||name[i][j]===8 ){check= check & true;}
            else check=false;
        }

    }

}






