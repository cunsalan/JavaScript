let teamDolphinScoreOne = 96;
let teamDolphinScoreTwo = 108;
let teamDolphinScoreThree = 89;

let teamKoalasScoreOne = 90;
let teamKoalasScoreTwo = 93;
let teamKoalasScoreThree = 112;

let teamDolphinAvgScore = (teamDolphinScoreOne + teamDolphinScoreTwo + teamDolphinScoreThree) / 3;


let teamKoalasAvgScore = (teamKoalasScoreOne + teamKoalasScoreTwo + teamKoalasScoreThree) / 3;

console.log( 'The Average Score of the team Dolphins is ' + teamDolphinAvgScore);

console.log('The Average score of the team Koalas is ' + teamKoalasAvgScore);


if(teamKoalasAvgScore > teamDolphinAvgScore) {
    console.log("Hurra and the winner team is Team Koalas")
}else if (teamKoalasAvgScore ===teamDolphinAvgScore ){
    console.log("What the hell it is a draw. ")
}
else{
    console.log("Hurra and the winner team is Team Dolphins")
}