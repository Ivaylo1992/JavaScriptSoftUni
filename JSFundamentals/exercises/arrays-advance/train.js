function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(arr.shift());

    for (let el of arr) {
        tokens = el.split('Add');
        let currentPassengers;
        
        if (tokens.includes('')) {
            currentPassengers = Number(tokens[1]);
            wagons = addWagon(wagons, currentPassengers);
        } else {
            currentPassengers = Number(tokens[0])
            wagons = addPassengers(wagons, currentPassengers, maxWagonCapacity);
        }
    }

    function addWagon(wagonsArr, passengers) {
        wagonsArr.push(passengers);

        return wagonsArr;
    }

    function addPassengers (wagonsArr, passengers, maxCapacity) {
        for (let wagonPassengers of wagonsArr) {
            if (passengers + wagonPassengers <= maxCapacity){
                let index = wagonsArr.indexOf(wagonPassengers);
                wagonsArr[index] += passengers;
                break;
            }
        }

        return wagonsArr
    }

    return wagons.join(' ')
    
}
