
// const dataSourceArray = process.argv.slice(2);

// const dataSource = dataSourceArray[0];

// const fs = require("fs");

// const dataFromFile = fs.readFileSync(dataSource);

// let personData = JSON.parse(dataFromFile);

function femalesCount(listOfPeople) {
  const femalePersons = listOfPeople.filter(
    (person) => person.gender === "Female"
  );
  return femalePersons.length;
}

function fullNameOfAllPeopleOver35(listOfPeople) {
  const peopleOver35 = listOfPeople.filter((person) => person.age > 35);
  return peopleOver35.map(
    (person) => person.first_name + " " + person.last_name
  );
}

function ageSum(listOfPeople) {
  return listOfPeople.reduce((total, value) => total + value.age, 0)
}

// console.log("Number of females is: " + femalesCount(personData));
// console.log("Full name of people over 35 are: " + fullNameOfAllPeopleOver35(personData));
// console.log("The sum of all ages is: " + ageSum(personData));

module.exports = {femalesCount: femalesCount, fullNameOfAllPeopleOver35: fullNameOfAllPeopleOver35, ageSum: ageSum }
