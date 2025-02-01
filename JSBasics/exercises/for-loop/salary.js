function salary(input){
    let salary = input[1]
    for (let tab = 2; tab < input.length; tab++){
        if (input[tab] === 'Facebook') {
            salary -= 150
        } else if (input[tab] === 'Instagram') {
            salary -= 100
        } else if (input[tab] === 'Reddit') {
            salary -= 50
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            
            break;
        }
    }

    if (salary > 0){
        console.log(salary);
    }

}

salary([3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])
    
    ;