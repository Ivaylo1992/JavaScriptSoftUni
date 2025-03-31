function leadersOfArmies (input) {
    let armies = {};

    for (let data of input) {
        if (data.includes('arrives')) {
            let [leader , _] = data.split(' ');
            armies[leader] = {};

        } else if (data.includes('+')) {
            let [armyName, countToAdd] = data.split(' + ');
            for (let leader of Object.keys(armies)) {
                if (armies[leader].hasOwnProperty(armyName)) {
                    let currentArmyCount = armies[leader][armyName];
                    let newArmyCount = currentArmyCount + Number(countToAdd);
                    armies[leader][armyName] = newArmyCount;
                }
            }

        } else if (data.includes('defeated')) {
            let [leader , _] = data.split(' ');
            if (armies[leader]) {
                delete armies[leader];
            }

        } else {
            let [leader , armyInfo] = data.split(': ');
            if (armies[leader]) {
                let [armyName, armyCount] = armyInfo.split(', ');
                armies[leader][armyName] = Number(armyCount);
            }
        }
    }

    for (let leader of Object.keys(armies)) {
        let armyCount = Object.values(armies[leader]).reduce((count, value) => count + value);
        armies[leader]['totalArmyCount'] = armyCount;
    }

    let sortedArmies = Object.fromEntries(
        Object.entries(armies).sort(([, a], [, b]) => b.totalArmyCount - a.totalArmyCount)
    );

    


    for (let leader of Object.keys(sortedArmies)) {
        console.log(`${leader}: ${armies[leader]['totalArmyCount']}`);
        delete armies[leader]['totalArmyCount'];

        for (let [army, armyCount] of Object.entries(sortedArmies[leader])) {
            console.log(`>>> ${army} - ${armyCount}`);   
        }
    }
    
}

leadersOfArmies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']
);