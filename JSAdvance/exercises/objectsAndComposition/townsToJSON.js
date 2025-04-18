function townsToJSON (input) {
    let towns = [];
    for (info of input.slice(1, input.length)) {
        let [Town, Latitude, Longitude] = info.split(' | ')
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude.slice(0, Longitude.length - 2)).toFixed(2));
        Town = Town.slice(2, Town.length)

        let townObj = {
            Town,
            Latitude,
            Longitude
        }

        towns.push(townObj)
    }

    return JSON.stringify(towns);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',

    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    
    '| Monatevideo | 34.50 | 56.11 |']));
