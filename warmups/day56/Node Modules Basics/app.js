var readline = require("readline-sync");
var operations = require("./operations.js");
var num1 = readline.question("insert the first number");
var num2 = readline.question("insert the second number");
var op = readline.question("insert the operations(sum, mult, sub, div, pow):");
if (op == "sum") {
    console.log(operations.add(parseInt(num1), parseInt(num2)));

} else if (op == "mult") {
    console.log(operations.add(parseInt(num1), parseInt(num2)));
} else if (op == "sub") {
    console.log(operations.add(parseInt(num1), parseInt(num2)));
} else if (op == "div") {
    console.log(operations.add(parseInt(num1), parseInt(num2)));
} else if (op == "pow") {
    console.log(operations.add(parseInt(num1), parseInt(num2)));
} else {
    console.log("wrong choice.......... goodbye):");
}