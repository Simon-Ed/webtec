let Mustache = require('mustache')

let result = Mustache.render("Hi, {{first}} {{last}}!", { 
    first: "Bob", 
    last: "Iger"
});

console.log(result);