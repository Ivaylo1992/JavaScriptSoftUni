function stockProvision (currentStock, stockToAdd) {
    let firstStockEntry = addCurrentStock(currentStock);
    let secondStockEntry = updateStock(stockToAdd, firstStockEntry);

    for (let obj of secondStockEntry) {
        console.log(`${obj.productName} -> ${obj.quantity}`);
    }


    function addCurrentStock (initialStock) {
        let products = [];
        for (let i = 0; i < initialStock.length - 1; i += 2) {
            let productName = initialStock[i];
            let quantity = Number(initialStock[i + 1]);

            let productObj = {productName, quantity};

            products.push(productObj);
        }

        return products;
    }


    function updateStock (additionalStock, initialStock) {
        while (additionalStock.length > 0) {
            let productName = additionalStock.shift();
            let quantity = Number(additionalStock.shift());
            let isNew = true;

            for (product of initialStock) {
                if (product.productName === productName) {
                    product.quantity += quantity;
                    isNew = false;
                    break;
                }
            }

            if (isNew) {
                newProductObj = {productName, quantity};
                initialStock.push(newProductObj);
            }
        }
        
        return initialStock;
    }
}

stockProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);