function town (input) {
    for (let townInfo of input) {
        let tokens = townInfo.split(' | ');

        let town = tokens.shift();
        let latitude = Number(tokens.shift()).toFixed(2);
        let longitude = Number(tokens.shift()).toFixed(2);

        let townObject = { town, latitude, longitude}

        console.log(townObject);
    }
}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])