function storage (input) {
    let storageMap = new Map();

    for (let data of input) {
        let [product, quantity] = data.split(' ');
        quantity = Number(quantity);

        if (storageMap.has(product)) {
            let oldQuantity = storageMap.get(product);
            storageMap.set(product, oldQuantity + quantity);
        } else {
            storageMap.set(product, quantity)
        }
    }

    for (let [productName, quantity] of storageMap.entries()) {
        console.log(`${productName} -> ${quantity}`);
        
    } 
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])