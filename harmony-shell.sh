#!/bin/bash

#   Bash-fu by Dave Dopson
#   http://stackoverflow.com/questions/59895/can-a-bash-script-tell-what-directory-its-stored-in
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do
    CLI_ROOT="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$CLI_ROOT/$SOURCE"
done
export CLI_ROOT="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

exe="$(command -v node || command -v nodejs)"

$exe --harmony --use-strict $CLI_ROOT/cli.js $@
