function autoEngineeringCompany (input) {
    const factory = new Map();


    for (const info of input) {
        let [carBrand, carModel, producedCars] = info.split(' | ');
        producedCars = Number(producedCars);

        if (!factory.get(carBrand)) {
            factory.set(carBrand, new Map());
        }

        if (!factory.get(carBrand).get(carModel)) {
            factory.get(carBrand).set(carModel, 0)
        }
        
        factory.get(carBrand).set(carModel, factory.get(carBrand).get(carModel) + producedCars)

    }

    const result = [];

    for (const [brand, models] of factory) {
        result.push(brand);
        for (const [model, quantity] of models) {
            result.push(`###${model} -> ${quantity}`)   
        }
    }
    
    return result.join('\n')
}

console.log(autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
