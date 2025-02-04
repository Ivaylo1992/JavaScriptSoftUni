function graduation(input){
    let name = input[0];

    let hasFailed = false;
    let i = 1;
    let counter = 1;
    let fails = 0;
    let gradesSum = 0;

    while (true){
        let grade = Number(input[i])
        if (grade < 4){
            fails += 1
            if (fails === 2){
                gradesSum += grade
                hasFailed = true
                break;
            }
        } else {
            counter += 1
            gradesSum += grade
            if (counter === 13){
                break;
            }
        }
        i++
    }

    if (hasFailed) {
        console.log(`${name} has been excluded at ${counter} grade`);
    } else {
        let avgGrade = gradesSum / (counter - 1)
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);   
    }

}

graduation(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
    
    