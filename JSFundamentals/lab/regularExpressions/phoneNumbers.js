function matchPhoneNumbers (phones) {
    let validPhones = [];
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g

    let validPhone = pattern.exec(phones.join(', '));

    while (validPhone != null) {
        validPhones.push(validPhone[0]);
        validPhone = pattern.exec(phones);
    }

    console.log(validPhones.join(', '));
    
}
