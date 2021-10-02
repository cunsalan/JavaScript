// five falsy values : 0 , '' , undefined , null, NaN

if (0) {
    console.log('0 is not a falsy value');
}else{
    console.log('0 is a falsy value');
}

if(''){
    console.log('\'\' is not a falsy value');
}else{
    console.log('\'\' is a falsy value');
}

if(undefined){
    console.log('undefined is not a falsy value');
}else{
    console.log('undefined is a falsy value');
}

if(null){
    console.log('null is not a falsy value');
}else{
    console.log('null is a falsy value');
}

if(NaN){
    console.log('NaN is not a falsy value');
}else{
    console.log('NaN is a falsy value');
}