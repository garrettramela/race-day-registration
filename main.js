let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistrant = true;
let runnerAge = 18;

if (earlyRegistrant === true && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
}

if (earlyRegistrant === true && runnerAge > 18) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);
} else if (earlyRegistrant === false && runnerAge > 18) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);
} else {
  console.log("Please go see the registration desk.");
}
