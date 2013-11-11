echo 'clearing down existing results'
rm -r coverage

set -e

mkdir coverage

echo 'instrumenting ...'
jscoverage lib coverage/lib
jscoverage routes coverage/controllers
cp *.js coverage

export POI_COV=1

echo 'running server tests with coverage (html)'
./node_modules/mocha/bin/mocha --reporter html-cov test/*_test.js > coverage.html

echo 'running server tests with coverage (json)'
./node_modules/mocha/bin/mocha --reporter json-cov test/*_test.js > coverage.json

COVOUT=`grep '^  "coverage' coverage.json`

if [ "$COVOUT" = '  "coverage": 100,' ]
then
   echo "ya m3lam: $COVOUT"
   exit 0
fi

echo "lessa badry: $COVOUT"
exit 1
