function workout(input) {
    let trainingDays = Number(input[0]);
    let kmFirstDay = Number(input[1]);
    let totalKm = kmFirstDay;

    for (let i = 2; i < trainingDays + 2; i++) {
        let percentIncrease = Number(input[i]) / 100;
        kmFirstDay += kmFirstDay * percentIncrease;
        totalKm += kmFirstDay;
    }

    let neededKm = 1000 - totalKm;

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } 
    else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(neededKm)} more kilometers`);
    }
}

workout([5, 30, 10, 15, 20, 5, 12]);  

