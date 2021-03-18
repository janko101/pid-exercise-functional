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
  return listOfPeople.reduce((total, value) => total + value.age, 0);
}

function averageAge(listOfPeople) {
  return ageSum(listOfPeople) / listOfPeople.length;
}

function fullNameOfAllPeopleOver22Under45FirstOrLastWithL(listOfPeople) {
  const youngerThan43OlderThan22 = listOfPeople.filter(
    (person) => person.age > 22 && person.age < 45
  );
  const firstOrLastNameStartWithL = youngerThan43OlderThan22.filter(
    (person) =>
      person.first_name.charAt(0) === "L" || person.last_name.charAt(0) === "L"
  );
  return firstOrLastNameStartWithL.map(
    (person) => person.first_name + " " + person.last_name
  );
}

function peopleWithGovEmail(listOfPeople) {
  const arrayOfPeopleWtihGovEmail = listOfPeople.filter(
    (person) =>
      person.email.slice(person.email.length - 3) === "gov" ||
      person.email.includes(".gov.")
  );
  return arrayOfPeopleWtihGovEmail.map(
    (person) =>
      person.first_name + " " + person.last_name + " " + person.ip_address
  );
}

// console.log("Number of females is: " + femalesCount(personData));
// console.log("Full name of people over 35 are: " + fullNameOfAllPeopleOver35(personData));
// console.log("The sum of all ages is: " + ageSum(personData));
// console.log("The average age is: " + averageAge(personData));
// console.log("Full name of people over 22, under 45 and first or last name starts with 'L': " + fullNameOfAllPeopleOver22Under45FirstOrLastWithL(personData));
// console.log("Full name and ip address of people with government email: " + peopleWithGovEmail(personData));

module.exports = {
  femalesCount: femalesCount,
  fullNameOfAllPeopleOver35: fullNameOfAllPeopleOver35,
  ageSum: ageSum,
  averageAge: averageAge,
  fullNameOfAllPeopleOver22Under45FirstOrLastWithL: fullNameOfAllPeopleOver22Under45FirstOrLastWithL,
  peopleWithGovEmail: peopleWithGovEmail,
};
