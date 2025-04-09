function calculateIncome (input) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let totalIncome = 0;

    let command = input.shift();

    while (command != 'end of shift') {

        let info = pattern.exec(command);
        if (info) {
            let totalPrice = Number(info.groups.count) * Number(info.groups.price);
            totalIncome += totalPrice;
            console.log(`${info.groups.customer}: ${info.groups.product} - ${totalPrice.toFixed(2)}`);
        }
            
        
        command = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}

calculateIncome(['%InvalidName%<Croissant>|2|10.3$',

    '%Peter%<Gum>1.3$',
    
    '%Maria%<Cola>|1|2.4',
    
    '%Valid%<Valid>valid|10|valid20$',
    
    'end of shift']);