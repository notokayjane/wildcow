const info = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
        text: `Hi my name is "${info.name}" from "${info.campus}`
    }));