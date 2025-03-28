function addresses (input) {
    let addressBook = {};

    for (let data of input) {
        let [name, address] = data.split(':');
        addressBook[name] = address;
    }

    let sortedAddresses = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of sortedAddresses) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

addresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])