function trekkingMania(groups){
    let musalaGroup = 0;
    let monblancGroup = 0;
    let kilimandjaroGroup = 0;
    let kTwoGroup = 0;
    let everestGroup = 0;
    let totalPeople = 0;

    for (let i = 1; i < groups.length; i++){
        let people = Number(groups[i])
        totalPeople += people

        if (people <= 5) {
            musalaGroup += people
        } else if (people <= 12) {
            monblancGroup += people
        } else if (people <= 25) {
            kilimandjaroGroup += people
        } else if (people <= 40) {
            kTwoGroup += people
        } else {
            everestGroup += people
        }
    }

    let musalaPercentage = (musalaGroup / totalPeople) * 100
    let monblancPercentage = (monblancGroup / totalPeople) * 100
    let kilimandjaroPercentage = (kilimandjaroGroup / totalPeople) * 100
    let kTwoPercentage = (kTwoGroup / totalPeople) * 100
    let everestPercentage = (everestGroup / totalPeople) * 100

    console.log(musalaPercentage.toFixed(2) + '%');
    console.log(monblancPercentage.toFixed(2) + '%');
    console.log(kilimandjaroPercentage.toFixed(2) + '%');
    console.log(kTwoPercentage.toFixed(2) + '%');
    console.log(everestPercentage.toFixed(2) + '%');
}

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
    
    ;