function everestClimb(input) {
    let days = 1;
    let currentHeight = 5364;

    for (let i = 0; i < input.length; i += 2) {
        let rest = input[i]; 
        if (rest === "Yes"){
           days++;
        }    

        if (days > 5 || input[i] === "END") {
            console.log("Failed!");
            console.log(currentHeight);
            return;
        }

        let meters = Number(input[i + 1]);
        currentHeight += meters;

        if (currentHeight >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            return;
        }
    }

    console.log("Failed!");
    console.log(currentHeight);
}

everestClimb([
    "Yes", "535",
    "Yes", "849",
    "Yes", "499",
    "Yes", "400",
    "Yes", "500"
]);
