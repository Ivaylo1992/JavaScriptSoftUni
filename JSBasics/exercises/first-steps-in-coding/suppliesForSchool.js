function calculateMoneyForSupplies(pencils, markers, detergent, givenDiscount){
    let pencilPrice = 5.8
    let markerPrice = 7.2
    let detergentPrice = 1.2
    let discountInNumber = givenDiscount / 100

    let finalPencilPrice = pencilPrice * pencils
    let finalMarkerPrice = markerPrice * markers
    let finalDetergentPrice = detergentPrice * detergent

    let priceWithoutDiscount = finalDetergentPrice + finalMarkerPrice + finalPencilPrice
    let discountMoney = priceWithoutDiscount * discountInNumber

    let finalPrice = priceWithoutDiscount - discountMoney

    console.log(finalPrice)

}

calculateMoneyForSupplies(4, 2, 5, 13)