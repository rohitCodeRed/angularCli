#!/usr/bin/env sh

#Run the angular project on port 4200
set -x
npx -p @angular/cli@11.1.0 ng serve &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:4200 to see your angular CLi login page application in action.'