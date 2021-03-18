/* eslint-disable no-undef */
const submission = require('./submission');

const listOfPeople = [
  {
    id: 7,
    first_name: 'Minne',
    last_name: 'MacGilfoyle',
    email: 'mmacgilfoyle6@amazon.gov.jp',
    gender: 'Female',
    ip_address: '12.246.212.112',
    age: 54,
  },
  {
    id: 8,
    first_name: 'Purcell',
    last_name: 'Learns',
    email: 'pmearns7@chicagotribunegov.com',
    gender: 'Male',
    ip_address: '60.16.88.134',
    age: 24,
  },
  {
    id: 9,
    first_name: 'Amanda',
    last_name: 'Gownge',
    email: 'agowngov8@t.co',
    gender: 'Female',
    ip_address: '246.160.41.135',
    age: 95,
  },
  {
    id: 10,
    first_name: 'Lybie',
    last_name: 'Tille',
    email: 'ttille9@cargocollective.gov',
    gender: 'Female',
    ip_address: '82.56.248.7',
    age: 30,
  },
];

test('femalesCount should count correct number of females', () => {
  expect(submission.femalesCount(listOfPeople)).toBe(3);
});

test('fullNameOfAllPeopleOver35 should return first and last name of people over 35', () => {
  // eslint-disable-next-line no-undef
  expect(submission.fullNameOfAllPeopleOver35(listOfPeople)).toEqual([
    'Minne MacGilfoyle',
    'Amanda Gownge',
  ]);
});

test('ageSum should return sum of all ages', () => {
  expect(submission.ageSum(listOfPeople)).toBe(203);
});

test('avaregeAge should return average age of all people', () => {
  expect(submission.averageAge(listOfPeople)).toBe(50.75);
});

test("fullNameOfAllPeopleOver22Under45FirstOrLastWithL should return first and last name of people over 22, under 45 and who's first or last name starts with 'L'", () => {
  expect(
    submission.fullNameOfAllPeopleOver22Under45FirstOrLastWithL(listOfPeople),
  ).toEqual(['Purcell Learns', 'Lybie Tille']);
});

test('peopleWithGovEmail should return first, last name and ip address of people with gov email ', () => {
  expect(
    submission.peopleWithGovEmail(listOfPeople),
  ).toEqual(['Minne MacGilfoyle 12.246.212.112', 'Lybie Tille 82.56.248.7']);
});
