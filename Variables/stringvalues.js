const firstName = 'Can';

const job ='Software Developer';

const canNew = `I'am ${firstName} and i am a ${job}`;
console.log(canNew);

let interloop = 0;

for(let i =0; i< 10;i++){

    console.log(interloop);
    interloop++;
}


const age = 17;
const isOldEnough =  age >=18;

if(isOldEnough){
    console.log("He/She is old enough");
}else {
    console.log("He/She is not old enough");
}
let century;
const birthyear = 1999;
if(birthyear<= 2000){
     century = 20;
}else{
     century = 19;
}
console.log(century);

const inputYear = '1991';
//type conversion
console.log(Number(inputYear) + 18, inputYear);
console.log(typeof inputYear);
console.log(inputYear + 18);
console.log(Number('Can'));
//type coersion

console.log('I am ' + 23 + ' years old');
console.log('12' + '12' + 3);
console.log('12' - '12' - 3);

console.log(Number('12') + 12);







