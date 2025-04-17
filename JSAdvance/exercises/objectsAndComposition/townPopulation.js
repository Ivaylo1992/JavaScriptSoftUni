function townPopulation (input) {
    let towns = {};
    let result = [];

    for (let el of input) {
        let [town, population] = el.split(' <-> ');
        if (!towns[town]) {
            towns[town] = 0;
        }

        towns[town] += Number(population);
    }

    for (let currentTown of Object.keys(towns)) {
        result.push(`${currentTown} : ${towns[currentTown]}`)
    }

    return result.join('\n')
}

console.log(townPopulation([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
);
