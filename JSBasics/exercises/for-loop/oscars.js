function oscars(input){
    let actor = input[0];
    let points = Number(input[1]);
    let juryCount = input[2];
    let totalPoints = 0;

    for (let i = 4; i < input.length; i += 2){
        let juryMemberName = input[i - 1]
        let pointsGiven = input[i]
        points += (juryMemberName.length * pointsGiven) / 2
        
    }

}

oscars();