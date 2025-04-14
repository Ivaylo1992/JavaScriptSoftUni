function printInfo (fruit, grams, price) {
    const fruitKg = grams / 1000;
    const totalPrice = fruitKg * price;

    return `I need $${totalPrice.toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`
}

console.log(printInfo('orange', 2500, 1.80));
