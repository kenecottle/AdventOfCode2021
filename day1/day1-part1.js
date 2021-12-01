'use strict'
const fs = require('fs');

let filename = './day1-input';

let newLineCount = 0;

const data = fs.readFileSync(filename, (err, data) => {
	if (err) {
		console.log(err);
		throw err;
	}
});

const fileContents = data.toString();
let sonarArray = fileContents.split('\n');
console.log(sonarArray);

let depthIncreaseCount = 0;
let lastReading = 0;
let nextReading = 0;
for (let nextReadingStr of sonarArray) {
  nextReading = parseInt(nextReadingStr);
  console.log(typeof nextReading);
  if (lastReading === 0) {
    //ignore first iteration
    console.log(lastReading + ' - ' + nextReading);
  } else if (nextReading > lastReading) {
    depthIncreaseCount++;
    //console.log(lastReading + ' - ' + nextReading);
  }
  //console.log('update lastReading to ' + nextReading);
  lastReading = nextReading;
}
console.log('Depth increased: ' + depthIncreaseCount);