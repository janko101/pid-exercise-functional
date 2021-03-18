const submission = require("./submission");

const listOfPeople = [
  {
    id: 7,
    first_name: "Minne",
    last_name: "MacGilfoyle",
    email: "mmacgilfoyle6@amazon.co.jp",
    gender: "Female",
    ip_address: "12.246.212.112",
    age: 54,
  },
  {
    id: 8,
    first_name: "Purcell",
    last_name: "Mearns",
    email: "pmearns7@chicagotribune.com",
    gender: "Male",
    ip_address: "60.16.88.134",
    age: 24,
  },
  {
    id: 9,
    first_name: "Amanda",
    last_name: "Gownge",
    email: "agownge8@t.co",
    gender: "Female",
    ip_address: "246.160.41.135",
    age: 95,
  },
  {
    id: 10,
    first_name: "Tybie",
    last_name: "Tille",
    email: "ttille9@cargocollective.com",
    gender: "Female",
    ip_address: "82.56.248.7",
    age: 30,
  },
];

test("femalesCount should count correct number of females", () => {
  expect(submission.femalesCount(listOfPeople)).toBe(3);
});

test("fullNameOfAllPeopleOver35 should return first and last name of people over 35", () => {
  expect(submission.fullNameOfAllPeopleOver35(listOfPeople)).toEqual([
    "Minne MacGilfoyle,Amanda Gownge",
  ]);
});

test("ageSum should return sum of all ages", () => {
  expect(submission.ageSum(listOfPeople)).toBe(203);
});
