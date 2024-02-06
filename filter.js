  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

//Filter met5hod alwayys return the array, even it's only the array of one element.


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
// how to searcj for people older than 21
const oldEnough = people.filter(person => person.age >= 21)
console.log(oldEnough)

//how to used filter method to filter that array down to just Paul  
const paul = people.filter(p => p.name === 'Paul')[0]  // [0] gave first and only the first element of resulting array
console.log(paul)


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// find the student who'sskills years of experience is more than 5 years
// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// })
// console.log(candidates)


//All we've done is take what was inside the parenteses and assign it to a variable
//This isolates tge callback functiion and makes it easier to reuse

// const hasStrongSkills = (student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//   return strongSkills.length > 0;
// })

// const candidates = students.filter(hasStrongSkills)
// console.log(candidates)


//in that case i can write 
const hasFiveYearsExperience = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(hasFiveYearsExperience).length > 0;
const candidates = students.filter(hasStrongSkills)

console.log(candidates)

//Bow I can use the map() to get just the names of candidates who's experience > 5 years
const men = candidates.map(student => student.name);
console.log(men)