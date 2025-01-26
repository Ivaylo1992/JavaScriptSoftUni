function fruitShop(fruitType, dayOfWeek, fruitQuantity){
    let finalPrice = 0;

    if (dayOfWeek === 'Monday' ||
         dayOfWeek === 'Tuesday' ||
          dayOfWeek === 'Wednesday' ||
           dayOfWeek === 'Thursday' ||
            dayOfWeek === 'Friday'){
                switch (fruitType) {
                    case 'banana': finalPrice = fruitQuantity * 2.50;
                        break;
                    case 'apple': finalPrice = fruitQuantity * 1.20;
                        break;
                    case 'orange': finalPrice = fruitQuantity * 0.85;
                        break;
                    case 'grapefruit': finalPrice = fruitQuantity * 1.45;
                        break;
                    case 'kiwi': finalPrice = fruitQuantity * 2.70;
                        break;
                    case 'pineapple': finalPrice = fruitQuantity * 5.50;
                        break;
                    case 'grapes': finalPrice = fruitQuantity * 3.85;
                        break;

                    default: console.log('error');
                        return;
                }
    }else if (dayOfWeek === 'Saturday' || dayOfWeek ==='Sunday') {
        switch (fruitType){
            case 'banana': finalPrice = fruitQuantity * 2.70;
                break;
            case 'apple': finalPrice = fruitQuantity * 1.25;
                break;
            case 'orange': finalPrice = fruitQuantity * 0.90;
                break;
            case 'grapefruit': finalPrice = fruitQuantity * 1.60;
                break;
            case 'kiwi': finalPrice = fruitQuantity * 3.00;
                break;
            case 'pineapple': finalPrice = fruitQuantity * 5.60;
                break;
            case 'grapes': finalPrice = fruitQuantity * 4.20;
                break;
            
            default: console.log('error');
                return;
        }
    }else {
        console.log('error');
        return
    }

    console.log(finalPrice.toFixed(2));
    
}

fruitShop("tomato",
"Monday",
0.5

);