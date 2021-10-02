const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;
let bmiMark;
let bmiJoh;

bmiMark = markWeight / (markHeight ** 2);
bmiJohn = johnWeight /( johnHeight ** 2);

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBmi = bmiMark> bmiJohn;

console.log(markHigherBmi);

console.log( `Marks Bmi is higher than johns ${markHeight}`)