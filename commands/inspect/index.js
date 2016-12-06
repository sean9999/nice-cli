"use strict";

const run = function(good,bad) {
    let scope = this;
    if ("commandName" in scope) {
        good(scope);
    } else {
        bad(Error('scope is the wrong thing'));
    }
    good(scope);
};

module.exports = function(Command,scope) {
    return new Command(scope, run );
};
