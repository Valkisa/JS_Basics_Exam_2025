function sumAndProduct(input){
    for(let a = 1; a <= 9; a++){
        for(let b = 9; b >= a; b--){
            for(let c = 0; c <= 9; c++){
                for(let d = 9; d >= c; d--){
                    let sum = a + b + c + d;
                    let product = a * b * c * d;
                    let sbor = Math.floor(product / sum);

                    if(sum === product && input % 10 === 5){
                        console.log(`${a}${b}${c}${d}`);
                        return;                        
                    }

                    if(sum !== 0 && sbor === 3 && input % 3 === 0){
                        console.log(`${d}${c}${b}${a}`);
                        return;                       
                    }
                }
            }
        }
    }

    console.log("Nothing found");
}
sumAndProduct(123)