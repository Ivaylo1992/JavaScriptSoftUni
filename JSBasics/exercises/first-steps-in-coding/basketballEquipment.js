function basketballEquipment(annualFee){
    let sneakersPrice = annualFee * 0.6;
    let kitPrice = sneakersPrice * 0.8;
    let ballPrice = (1 / 4) * kitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let finalPrice = sneakersPrice + kitPrice + ballPrice + accessoriesPrice + annualFee

    console.log(finalPrice);
    
}

basketballEquipment(550)