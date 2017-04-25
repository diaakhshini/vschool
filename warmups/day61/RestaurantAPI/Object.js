var uuid = require("uuid");
var menu = [
    {
        id: uuid.v4(),
        name: "knafa",
        Cost: 2500,
        type: "dessert",
    },
    {
        id: uuid.v4(),
        name: "mlokhea",
        Cost: 10000,
        type: "main course",
    },
    {
        id: uuid.v4(),
        name: "ftoosh",
        Cost: 12000,
        type: "appetizer",

    }
    ];

module.exports = menu;