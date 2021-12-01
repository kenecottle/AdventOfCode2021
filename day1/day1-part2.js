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
//convert array value from string to int
sonarArray = sonarArray.map(value => {
  return parseInt(value);
});
// console.log(sonarArray);

let depthIncreaseCount = 0;

let lastReading = 0;
let nextReading = 0;

//iterate from first triplet through last possible triplet
for (let i = 0; i < sonarArray.length -2; i++) {
  nextReading = sonarArray[i] + sonarArray[i +1] + sonarArray[i +2];
  // console.log(nextReading);
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
console.log(lastReading);
console.log('Depth increased: ' + depthIncreaseCount);