function pieceOfPie (input, targetOne, targetTwo) {
    return input.slice(input.indexOf(targetOne),  input.indexOf(targetTwo) + 1)
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
