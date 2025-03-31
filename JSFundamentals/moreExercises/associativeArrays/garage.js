function garage (input) {
    let garageInfo = {};

    for (let data of input) {
        let tokens = data.split(' - ')
        let garageNum = tokens.shift();

        if (!garageInfo[garageNum]) {
            garageInfo[garageNum] = [];
        }

        let keyValuePairs = tokens.shift().split(', ')
        let carObj = {};

        for (let keyValuePair of keyValuePairs) {
            let [key, value] = keyValuePair.split(': ')
            carObj[key] = value;   
        }

        garageInfo[garageNum].push(carObj);
    }

    for (let garage in garageInfo) {
        console.log(`Garage № ${garage}`);
        for (let car of garageInfo[garage]) {
            let result = []
            for (let [key, value] of Object.entries(car)) {
                result.push(`${key} - ${value}`);
            }
            console.log('--- ' + result.join(', '));
            
        }
    }
}

garage(['1 - color: blue, fuel type: diesel',
     '1 - color: red, manufacture: Audi',
      '2 - fuel type: petrol',
       '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])