export function createCalculator() { 
    let value = 0; 
    return { 
        add: function(num) { value += Number(num); }, 
        subtract: function(num) { value -= Number(num); }, 
        get: function() { return value; } 
    }
}

let func = createCalculator();
func.add(-2);
console.log(func.get());

console.log(String(NaN) === String(NaN));

