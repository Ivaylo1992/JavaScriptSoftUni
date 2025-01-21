function harvest(fieldInSqM, grapesPerSqM, neededLiters, workersCount){
    let harvestForWine = fieldInSqM * 0.4;
    let grapesKg = grapesPerSqM * harvestForWine;

    let litersWine = grapesKg / 2.5;

    let diff = Math.abs(litersWine - neededLiters)

    if (litersWine >= neededLiters) {
        let leftWinePerWorker = Math.ceil(diff / workersCount)
        console.log(`Good harvest this year! Total wine: ${Math.ceil(litersWine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${leftWinePerWorker} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }
}

harvest(1020,
    1.5,
    425,
    4
    
    );
