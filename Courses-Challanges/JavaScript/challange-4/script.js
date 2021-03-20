"use strict";
////////////////////////////////Array///////////////////////////////////////////////////

// const years = [2000, 2010, 34999, 54636, 636363];
// const friends = ["mariam", "hadeer"];
// const myData = ["Hajar", ...friends, years[0], years[years.length - 1]];

// const calcAge = (birthDate) => {
//   const age = 2030 - birthDate;
//   return age;
// };

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const ages = [age1, age2, age3, age4];
// console.log(myData, "\n", ...ages);

// myData.push("studing js", "Full Stack Developer");

// console.log(myData);

// const popeData = myData.pop();
// console.log(`My name is ${myData[0]} and my career is ${popeData}`);

// const params = myData.includes("Hajar");
// if (params) {
//   alert(`welcome to our page ${myData[0]}`);
//   console.log(params);
// }

/////////////////////////////////////////////////////  objects //////////////////////////////////////////

///the intersted part in objects

// const userAnswer = prompt("what you want to know about me");
// console.log(userAnswer);
// console.log(userData[userAnswer]);

// const userData = {
//   firstName: "Hajar",
//   lastName: "Shalby",
//   phoneNumber: 333363747,
//   birthDate: 1996,
//   friends: ["Mariam", "Hadeer"],
//   calcAge: function () {
//     this.age = 2021 - this.birthDate;
//     return this.age;
//   },
// };
// console.log(userData["calcAge"]());
// console.log(userData.age);

// console.log(
//   `${userData.firstName} has ${userData.friends.length} friends, and her best firend is ${userData.friends[0]}`
// );

// //chalange

// const newUserData = {
//   firstName: "Hajar",
//   lastName: "Shalby",
//   phoneNumber: 333363747,
//   carrer: "Full stack developer",
//   birthDate: 1996,
//   friends: ["Mariam", "Hadeer"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     this.age = 2021 - this.birthDate;
//     return this.age;
//   },

//   getProfileSummery: function () {
//     console.log(
//       `${this.firstName} is a ${this.calcAge()} years old, she is a ${
//         this.carrer
//       }, and has ${this.hasDriverLicense ? " a licecscs" : "no licences"}  `
//     );
//   },
// };

// newUserData.getProfileSummery();
// console.log(newUserData.calcAge());

// /////////////////////////////////////////////////// For Loop ////////////////////////////////////////////////

// const friends = ["mariam", "hadeer"];
// const array = [];

// for (let index = 0; index < friends.length; index++) {
//   array.push(friends[index]);
//   // array[index] = friends[index]
//   console.log(array);
// }
// console.log(array);

// const years = [2000, 2010, 2003, 2002, 2001];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//   if (2021 - years[index] >= 32) {
//     ages.push(years[index]);
//     console.log(ages);
//     continue;
//   }
// }

// /// how to reverse an array
// for (let index = years.length - 1; index >= 0; index--) {
//   ages.push(years[index]);
//   console.log(ages);
// }

// for (let exersice = 1; exersice < 5; exersice++) {
//   console.log(`----------- exscrise ${exersice} will start now`);

//   for (let repeted = 1; repeted < 6; repeted++) {
//     console.log(` ${repeted} will repeted now`);

//     if (exersice == 3 || exersice == 4) break;
//   }
// }

/////////////////////////////////////////////while /////////////////////////////////////////////////////////////////
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////