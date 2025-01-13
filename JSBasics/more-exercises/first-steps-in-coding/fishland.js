function fishland(scomberPrice, sprattusPrice, sardaKg, rachurusKg, clamKg){
    let sardaPrice = sardaKg * (scomberPrice * 1.6);
    let rachurusPrice = rachurusKg * (sprattusPrice * 1.8);
    let calmPrice = clamKg * 7.5;

    let totalPrice = sardaPrice + calmPrice + rachurusPrice;

    console.log(totalPrice.toFixed(2));
    

}

fishland(5.55, 3.57, 4.3, 3.6, 7);