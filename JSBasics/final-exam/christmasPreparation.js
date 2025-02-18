function christmasPreparation(paper, cloth, glue, discountPercent){
    let totalPrice = paper * 5.80 + cloth * 7.20 + glue * 1.20;
    let discountDecimal = discountPercent / 100;

    let finalPrice = totalPrice - (totalPrice * discountDecimal);

    console.log(finalPrice.toFixed(3));
    
}

christmasPreparation(4, 2, 5, 13);