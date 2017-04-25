var uuid = require("uuid");
var bounties = [
    {
        id: uuid.v4(),
        firstName: "jameel",
        lastName: "edlbi",
        living: true,
        bountyAmount: 50,
        type: "sith"
    },
    {
        id: uuid.v4(),
        firstName: "ahmed",
        lastName: "khaled",
        living: false,
        bountyAmount: 100,
        type: "jedi"
    },
    {
        id: uuid.v4(),
        firstName: "ali",
        lastName: "noor",
        living: true,
        bountyAmount: 20,
        type: "jedi"
    }
];
module.exports = bounties;