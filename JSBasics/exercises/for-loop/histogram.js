function histogram(input){
    let numCount = input[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++){
        if (input[i] < 200){
            p1 += 1
        } else if (input[i] >= 200 && input[i] <= 399){
            p2 += 1
        } else if (input[i] >= 400 && input[i] <= 599){
            p3 += 1
        } else if (input[i] >= 600 && input[i] <= 799){
            p4 += 1
        } else {
            p5 += 1
        }
    }

    let p1Percentage = p1 / numCount * 100;
    let p2Percentage = p2 / numCount * 100;
    let p3Percentage = p3 / numCount * 100;
    let p4Percentage = p4 / numCount * 100;
    let p5Percentage = p5 / numCount * 100;

    console.log(p1Percentage.toFixed(2) + '%');
    console.log(p2Percentage.toFixed(2) + '%');
    console.log(p3Percentage.toFixed(2) + '%');
    console.log(p4Percentage.toFixed(2) + '%');
    console.log(p5Percentage.toFixed(2) + '%');
    
}

histogram([14,
    53,
    7,
    56,
    180,
    450,
    920,
    12,
    7,
    150,
    250,
    680,
    2,
    600,
    200])
    
    ;