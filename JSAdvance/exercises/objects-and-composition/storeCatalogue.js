function createCatalogue(input) {
    let catalogueObj = {};

    for (let el of input) {
        let [productName, productPrice] = el.split(' : ');
        let firstLetter = productName[0];
        productPrice = Number(productPrice);

        if (!catalogueObj[firstLetter]) {
            catalogueObj[firstLetter] = {}
        }
        
        catalogueObj[firstLetter][productName] = productPrice;
    }

    let result = []
    let sortedList = Object.entries(catalogueObj).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [letter, products] of sortedList) {
        result.push(letter);

        sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]))

        for (let [product, price] of sortedProducts) {
            result.push(`  ${product}: ${price}`)   
        }
    }

    return result.join('\n')
}

console.log(
  createCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
