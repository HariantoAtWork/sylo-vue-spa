set -e

projectname=generated-project
if [ -n "$1" ]; then
  projectname=$1
fi

if [ -z $UPDATE_ONLY]; then
    rm -rf $projectname
fi
yes "" | ./node_modules/.bin/vue init . $projectname

cd $projectname
yarnbin=/usr/local/bin/yarn
if [ -f $yarnbin ]; then
    yarn
else
    npm install
fi
npm test
test_result=$?
npm run build
exit $test_result