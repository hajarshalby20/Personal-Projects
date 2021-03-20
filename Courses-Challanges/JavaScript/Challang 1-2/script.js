//challange-1 code
//BMI = mass / height ** 2 = mass / (height * height)

//Mark
// const markMass = 78;
// const markHeight = 1.69;
// const markBMI = markMass / markHeight ** 2;

// //john
// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBMI = johnMass / johnHeight ** 2;

// // challang-2
// if (markBMI > johnBMI) {
//   console.log(`markBMI is heigher than johnBMI with (${markBMI - johnBMI}) `);
// } else {
//   console.log(`johnBMI is heigher than markBMI with (${johnBMI - markBMI} )`);
// }

//////////////////////////////////////////////////////////////////// challange-3 "OBJECTS" ////////////////////////////////////////////

// calcBMI = (mass, height) => {
//   const BMI = mass / height ** 2;
//   return BMI;
// };

// const johnData = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 78,
//   height: 1.96,
// };

// const markData = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 92,
//   height: 1.95,
// };

// const markBMI = calcBMI(markData.mass, markData.height);
// const johnBMI = calcBMI(johnData.mass, johnData.height);

// console.log(markBMI, johnBMI);
// if (markBMI > johnData) {
//   console.log(`markBMI is heigher than johnBMI with (${markBMI - johnBMI}) `);
// } else {
//   console.log(`johnBMI is heigher than markBMI with (${johnBMI - markBMI} )`);
// }

////////////////////////////////////////// another solution//////////////////////////////

const johnData = {
  firstName: "John",
  lastName: "Smith",
  mass: 78,
  height: 1.96,

  calcJohnBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const markData = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 92,
  height: 1.95,
  calcMarkBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

markData.calcMarkBMI();
johnData.calcJohnBMI();

if (markData.BMI > johnData.BMI ){
  console.log(`markBMI is heigher than johnBMI with (${markData.BMI -  johnData.BMI}) `);
}else {
  console.log(`johnBMI is heigher than markBMI with (${ johnData.BMI - markData.BMI} )`);
}

