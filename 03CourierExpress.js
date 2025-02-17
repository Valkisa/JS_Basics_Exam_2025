function courierExpress(weight, serviceType, distance) {
    let pricePerKm = 0;

    if (weight <= 1) {
        pricePerKm = 0.03;
    } 
    else if (weight <= 10) {
        pricePerKm = 0.05;
    } 
    else if (weight <= 40) {
        pricePerKm = 0.10;
    } 
    else if (weight <= 90) {
        pricePerKm = 0.15;
    } 
    else {
        pricePerKm = 0.20;
    }

    let totalCost = pricePerKm * distance;

    if (serviceType === "express") {
        let nacenkaNaKm = 0;

        if (weight <= 1) {
            nacenkaNaKm = 0.8 * pricePerKm * weight;
        } 
        else if (weight <= 10) {
            nacenkaNaKm = 0.4 * pricePerKm * weight;
        } 
        else if (weight <= 40) {
            nacenkaNaKm = 0.05 * pricePerKm * weight;
        } 
        else if (weight <= 90) {
            nacenkaNaKm = 0.02 * pricePerKm * weight;
        } 
        else {
            nacenkaNaKm = 0.01 * pricePerKm * weight;
        }

        let expressSurcharge = nacenkaNaKm * distance;
        totalCost += expressSurcharge;
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalCost.toFixed(2)} lv.`);
}
courierExpress(1.5, "standard", 100)
