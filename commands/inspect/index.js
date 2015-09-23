"use strict";

module.exports = function(Command,scope) {
    return new Command(scope, function() {
        return 'wow!';
    });
};
