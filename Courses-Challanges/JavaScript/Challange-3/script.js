//challang-3 {Np: Kindly uncomment the parts you gonna test}

// // Dolphins Data
// const dolphinFirstScore = 96;
// const dolphinFecondScore = 108;
// const dolphinFhirdScore = 89;
// const dolphinAvarageScore =
//   (dolphinFirstScore + dolphinFecondScore + dolphinFhirdScore) / 3;

// //Koalas Data
// const KoalasFirstData = 88;
// const koalasSecondData = 91;
// const koalasThirdData = 110;
// const koalasAvarageScore =
//   (KoalasFirstData + koalasSecondData + koalasThirdData) / 3;

// if (dolphinAvarageScore > koalasAvarageScore) {
//   console.log(
//     `The winner is Dolphine! becoause its Avarage Score is: (${dolphinAvarageScore}) and koalas is: (${koalasAvarageScore})`
//   );
// } else if (koalasAvarageScore > dolphinAvarageScore) {
//   console.log(
//     `The winner is koalas! becoause its Avarage Score is: (${koalasAvarageScore}) and Dolphine is: (${dolphinAvarageScore})`
//   );
// } else {
//   console.log("Both Dolphins and koalas win! Hohoo");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bonus - 1;

// // Dolphin Data
// const dolphinFirstScore = 97;
// const dolphinFecondScore = 112;
// const dolphinFhirdScore = 101;
// const dolphinAvarageScore =
//   (dolphinFirstScore + dolphinFecondScore + dolphinFhirdScore) / 3;

// //Koalas Data
// const KoalasFirstData = 109;
// const koalasSecondData = 95;
// const koalasThirdData = 123;
// const koalasAvarageScore =
//   (KoalasFirstData + koalasSecondData + koalasThirdData) / 3;

// if (dolphinAvarageScore > koalasAvarageScore && dolphinAvarageScore >= 100) {
//   console.log(
//     `The winner is Dolphine! becoause its Avarage Score is: (${dolphinAvarageScore}) -it's higher than 100 points- and koalas is: (${koalasAvarageScore})`
//   );
// } else if (
//   koalasAvarageScore > dolphinAvarageScore &&
//   koalasAvarageScore >= 100
// ) {
//   console.log(
//     `The winner is koalas! becoause its Avarage Score is: (${koalasAvarageScore}) -and it's higher than 100 points- and Dolphine is: (${dolphinAvarageScore})`
//   );
// } else {
//   console.log(`Both win the competition!😀`);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bounus-2

// //Dolphine Data
// const dolphinFirstScore = 97;
// const dolphinFecondScore = 112;
// const dolphinFhirdScore = 101;
// const dolphinAvarageScore =
//   (dolphinFirstScore + dolphinFecondScore + dolphinFhirdScore) / 3;

// //Koalas Data
// const KoalasFirstData = 109;
// const koalasSecondData = 95;
// const koalasThirdData = 106;
// const koalasAvarageScore =
//   (KoalasFirstData + koalasSecondData + koalasThirdData) / 3;

// if (
//   dolphinAvarageScore === koalasAvarageScore &&
//   dolphinAvarageScore >=100 &&
//   koalasAvarageScore >= 100
// ) {
//   console.log(`Both win the trophy`);
// } else {
//   console.log(`Nethier Dolphine Nor Koalas won this competition!`);
// }

//////////////////////////////// Challang-1 part-2////////////////////////////////////////////////////////////////

const calcAverage = (score1, score2, score3) => {
  const AvarageScore = (score1 + score2 + score3) / 3;
  return AvarageScore;
};
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolhins, avgKoalas) => {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolhins win( ${avgDolhins} vs ${avgKoalas})`);
  } else {
    console.log(`Koalas win( ${avgKoalas} vs ${avgDolhins})`);
  }
};
checkWinner (avgDolhins,avgKoalas );


/////////////////////////////// task 3///////////////////////////////////////////////////////

const calcTip = (value) => {
  if (value >= 50 && value <= 300) {
    const corrspondingTip = value * 0.15;
    return corrspondingTip;
  } else {
    const corrspondingTip = value * 0.2;
    return corrspondingTip;
  }
};
const testValue = calcTip(100);

const arrValues = [125, 555, 44];

const tipValue1 = calcTip(arrValues[0]);
const tipValue2 = calcTip(arrValues[1]);
const tipValue3 = calcTip(arrValues[arrValues.length - 1]);
const tips = [tipValue1, tipValue2, tipValue3];


const totallBill = (a, b) => {
  return tips[a] + arrValues[b];
};

const totallPayment1 = totallBill(0, 0);
const totallPayment2 = totallBill(1, 1);
const totallPayment3 = totallBill(2, 2);
const totallPayments = [totallPayment1, totallPayment2, totallPayment3];

console.log(...tips);
console.log(...totallPayments);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


