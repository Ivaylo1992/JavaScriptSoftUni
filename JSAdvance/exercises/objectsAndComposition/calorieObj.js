function food (foodList) {
    let foods = {};

    while (foodList.length) {
        let foodName = foodList.shift();
        let calories = Number(foodList.shift());

        foods[foodName] = calories;
    }

    return foods;
}

console.log(food(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']));
