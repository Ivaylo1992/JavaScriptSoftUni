function calculateArea (arg) {
    if (!(typeof arg === 'number')) {
        return `We can not calculate the circle area, because we receive a ${typeof arg}.`
    }

    return (Math.PI * Math.pow(arg, 2)).toFixed(2)
    
}

console.log(calculateArea(5));
console.log(calculateArea('gosho'));
