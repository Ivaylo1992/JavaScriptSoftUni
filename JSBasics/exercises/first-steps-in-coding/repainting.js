function repainting(nylonSquareMeters, paintLiters, thinnerLiters, hoursForRepainting){
    let nylonPrice = 1.50
    let paintPrice = 14.50;
    let thinnerPrice = 5;

    let extraPaint = paintLiters * 0.10;
    let extraNylon = 2;
    let moneyForBags = 0.40;

    let totalPaintPrice = (extraPaint + paintLiters) * paintPrice;
    let totalNylonPrice = (extraNylon + nylonSquareMeters) * nylonPrice;
    let totalThinnerPrice =  thinnerLiters * thinnerPrice
    let totalMaterialsPrice = totalNylonPrice + totalPaintPrice + totalThinnerPrice + moneyForBags;

    let paintersJobPrice = (totalMaterialsPrice * 0.3) * hoursForRepainting;

    let totalCost = paintersJobPrice + totalMaterialsPrice;

    console.log(totalCost)

}

repainting(5, 10, 10, 1);