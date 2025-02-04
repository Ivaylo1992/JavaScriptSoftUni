function accountBalance(input){
    let i = 0;
    let totalBalance = 0;

    while (input[i] !== 'NoMoreMoney') {
        let moneyToAdd = Number(input[i]);
        if (moneyToAdd >= 0){
            console.log(`Increase: ${moneyToAdd.toFixed(2)}`);
            totalBalance += moneyToAdd
        } else {
            console.log("Invalid operation!");
            break;
        }
        i++
    }

    
    console.log("Total: " + totalBalance.toFixed(2));
    
}

accountBalance(["120",
    "45.55",
    "-150"])
    
    