function areaOfFigures(arg1, arg2, arg3){
    let area = 0;

    if (arg1 === 'square') {
        let a = arg2;

        area = a * a

    } else if (arg1 === 'rectangle') {
        let a = arg2;
        let b = arg3;

        area = a * b

    } else if (arg1 === 'circle') {
        let r = arg2;

        area = Math.PI * Math.pow(r, 2)
    } else if (arg1 === 'triangle') {
        let l = arg2;
        let h = arg3;

        area = (1 / 2) * l * h
    }


    console.log(area.toFixed(3));
}

areaOfFigures("triangle",
4.5,
20
);