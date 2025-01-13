function foodDelivery(chickenMenusCount, fishMenusCount, veggieMenusCount){
    let orderPrice = (chickenMenusCount * 10.35) + (fishMenusCount * 12.4) + (veggieMenusCount * 8.15);
    let dessert = orderPrice * 0.2;
    let totalOrderPrice = dessert + orderPrice + 2.5;

    console.log(totalOrderPrice);
    
}

foodDelivery(9, 2, 6);