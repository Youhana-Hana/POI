set -e
./node_modules/istanbul/lib/cli.js test ./node_modules/mocha/bin/_mocha --spec ./test/*.js

