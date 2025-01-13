function fishTank(length, width, height, percentFilledSpace){
    let volume = length * width * height;
    let volumeInLitres = volume * 0.001;

    let filledSpaceDecimal = percentFilledSpace / 100;
    let neededLitres = volumeInLitres * (1 - filledSpaceDecimal);

    console.log(neededLitres);
    
}

fishTank(85, 75, 47, 17);