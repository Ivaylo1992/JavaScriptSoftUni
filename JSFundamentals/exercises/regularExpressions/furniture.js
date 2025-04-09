function furniture (input) {
    let pattern = />>(?<product>[A-Z]{1}[A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;
    let totalPrice = 0;

    console.log('Bought furniture:');

    let command = input.shift();

    while (command != 'Purchase') {
        let info = pattern.exec(command);

        if (info) {
            console.log(info.groups.product);
            totalPrice += Number(info.groups.price) * Number(info.groups.qty)
        }

        command = input.shift();
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',
    
    '>Invalid<<!5',
    
    '>>TV<<300.21314!20',
    
    '>>Invalid<!5',
    
    '>>TV<<30.21314!5',
    
    '>>Invalid<<!!5',
    
    'Purchase'])