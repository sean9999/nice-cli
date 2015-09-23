"use strict";

/**
 * An example CLI
 */

var scope = {
    config: require('./config.json')
};

var myCli = new require('./lib/Nice-cli')(scope);

var command = require('./commands/' + process.argv[2] )(myCli.factory,scope);

//  do
command.then(console.log).catch(console.error);
