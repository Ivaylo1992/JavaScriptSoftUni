function circleAreaAndPerimeter(radius){
    let circleArea = Math.PI * Math.pow(radius, 2);

    let circlePerimeter = 2 * Math.PI * radius;

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));
}

circleAreaAndPerimeter(3);