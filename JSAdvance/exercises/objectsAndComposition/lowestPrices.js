function getPrices(input) {
    let productPrices = {}
    
    for (let row of input) {
        let [town, product, price] = row.split(' | ')
        price = Number(price);

        if (!productPrices[product]) {
            productPrices[product] = {};
        }

        productPrices[product][town] = price;
    }
     
    for (let [product, productInfo] of Object.entries(productPrices)) {
        let sortedPrices = Object.entries(productInfo).sort((a, b) => a[1] - b[1]);
        
        console.log(`${product} -> ${sortedPrices[0][1]} (${sortedPrices[0][0]})`);
        
        
    }
}


console.log(
  getPrices([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
