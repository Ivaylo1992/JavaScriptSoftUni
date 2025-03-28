function phoneBook (data) {
    let phoneBookObj = {}
    for (let el of data) {
        let [name, number] = el.split(' ');
        phoneBookObj[name] = number;
    }

    for (let [name, number] of Object.entries(phoneBookObj)) {
        console.log(`${name} -> ${number}`);
        
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])