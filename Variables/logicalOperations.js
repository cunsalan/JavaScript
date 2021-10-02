const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);

console.log(hasDriversLicence || hasGoodVision);

console.log(!hasDriversLicence);

console.log(!hasGoodVision);

const shoulDrive = hasDriversLicence && hasGoodVision;

console.log(shoulDrive);

if(shoulDrive){
    console.log('Sarah is able to drive')
}else{
    console.log('Someone should drive')
}

