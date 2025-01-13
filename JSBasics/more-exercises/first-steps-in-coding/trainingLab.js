function trainingLab(widthInMeters, heightInMeters){
    let coridorInCm = 100;
    let blockedWorkPlaces = 3;

    let freeRows = Math.floor((heightInMeters * 100 - coridorInCm) / 70);
    let freeColumns = Math.floor(widthInMeters * 100 / 120);

    let freeWorkPlaces = freeColumns * freeRows - blockedWorkPlaces;
    
    console.log(freeWorkPlaces);
    
}

trainingLab(8.4, 5.2);