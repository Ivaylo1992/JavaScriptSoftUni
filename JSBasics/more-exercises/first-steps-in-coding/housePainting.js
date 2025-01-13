function housePainting(x, y, h){
    let windowInSq = 1.5 * 1.5
    let doorSqM = 1.2 * 2

    let backWall = (x * x);
    let frontWall = backWall - doorSqM;
    let rearWalls = (x * y - windowInSq) * 2;
    let neededGreenPaint = (backWall + frontWall + rearWalls) / 3.4;

    console.log(neededGreenPaint.toFixed(2));

    let roofTriangleSides = 2 * (x * h / 2);
    let roofRectangleSides = 2 * x * y;
    let neededRedPaint = (roofRectangleSides + roofTriangleSides) / 4.3
    
    console.log(neededRedPaint.toFixed(2))
    
}

housePainting(6, 10, 5.2);