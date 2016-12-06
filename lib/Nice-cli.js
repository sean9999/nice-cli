"use strict";

var fs = require('fs'),
    Command = require('./Command');

module.exports = function(scope) {
    var params = process.argv.slice(3);
    var pattern_option  = /^\-/;
    var isArgument      = function(param) { return !pattern_option.test(param); };
    var isOption        = function(param) { return  pattern_option.test(param); };
    scope.arguments     = params.filter(isArgument);
    scope.options       = params.filter(isOption);
    scope.commandName   = process.argv[2] || null;
    return {
        throw: function(err){
            return new CLIError(err);
        },
        factory: Command
    };
};
