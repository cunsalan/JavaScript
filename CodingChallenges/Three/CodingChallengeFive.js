const checkWinner = (avgDolphins,avgKoalas) => {

    debugger;

    let winnerTeam = 'No one';
    if (avgDolphins >= avgKoalas * 2){
        winnerTeam = 'Dolphins'
    }

    if(avgKoalas >= avgDolphins * 2) {
        winnerTeam = 'Koalas'
    }

    console.log(`And the winner is ${winnerTeam} `)
}



const calcAvg = (scoreOne,scoreTwo,scoreThree) => {
     return (scoreOne + scoreTwo + scoreThree) / 3
}


checkWinner(calcAvg(44,23,71),calcAvg(65,54,49));