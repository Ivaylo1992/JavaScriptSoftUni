function carFactory (carObj) {
    let enginesAvailable = {
        'small': { 'power': 90, 'volume': 1800},
        'normal': { 'power': 120, 'volume': 2400},
        'monster': { 'power': 200, 'volume': 3500 }
    }

    newCar = {};

    function createNewCar () {
        setName();
        setEngine();
        setCarriage();
        setWheels();
    }

    createNewCar();

    return newCar;

    function setName () {
        newCar.model = carObj.model;
    }

    function setEngine () {
        for (let engine of Object.values(enginesAvailable)) {
            if (carObj.power <= engine.power) {
                newCar.engine = engine
                break;
            }
        }
    }

    function setCarriage () {
        newCar.carriage = { type: carObj.carriage, color: carObj.color }
    }

    function setWheels () {
        if (carObj.wheelsize % 2 == 0) {
            carObj.wheelsize -= 1;
        }

        neededWheelSize = carObj.wheelsize
        newCar.wheels = [neededWheelSize, neededWheelSize, neededWheelSize, neededWheelSize]
    }
}

console.log(carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }));
