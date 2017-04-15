// • As a best practice, sketch the architecture of your application _before_ you start writing code.

// • For this exercise, start by describing what your application does. Do this in a bullet list.

// • Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them? Would you write one module for each bullet list? Something else? Be sure to justify your decision.

// • Finally, draw a diagram describing the relationships between your modules. Each arrow should describe a dependency—that is, an arrow from module A to module B indicates that module A uses module B.

let argv = require('argv');
let admin = require('./WeatherAdmin.js');
let UserSearch = require('./UserSearch.js');

let args = argv.run().targets;

let zip = 0;
let username = '';

let newUserSearch = admin.newUserSearch;
let displayAdminLog = admin.displayAdminLog;

for (var i = 0; i < args.length; i++) {
    if (args[i].toLowerCase() === 'admin') {
        if (args.length === 1) {
            displayAdminLog();
        } else {
            for (var i = 0; i < args.length; i++) {
                args.splice(i, 1);
                for (var i = 0; i < args.length; i++) {

                    if (isNaN(args[i])) {
                        username = args[i];
                        args.splice(i, 1);
                    }
                }
            }
            zip = args[0];
        	newUserSearch(username,zip);
        }


    } else if (args[i].toLowerCase() === 'user') {
        args.splice(i, 1);
        for (var i = 0; i < args.length; i++) {

            if (isNaN(args[i])) {
                username = args[i];
                args.splice(i, 1);
            }
        }
        zip = args[0];
        // console.trace(username, zip);
        let x = new UserSearch(username, zip);
        x.getWeather();
    }

}
