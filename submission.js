// const args = process.argv.splice(2);

const fs = require("fs");

const data = fs.readFileSync("MOCK_DATA.json");
const arrayPeople = JSON.parse(data);





// const fs = require("fs");



// fileNames.forEach((fileName) => {
//   fs.readFile(fileName, "utf-8", (error, data) => {
//     if (error) throw error;
//     console.log(fileName, data);
//   });
// });

// const fileName = fileNames[0];
// console.log(fileName, fs.readFileSync(fileName, "utf-8"));

function femalesCount(listOfPeople) {
  const femalePersons = listOfPeople.filter(
    (person) => person.gender === "Female"
  );
  return femalePersons.length;
}

console.log("Number of females is: " + femalesCount(arrayPeople))

module.exports = femalesCount;
