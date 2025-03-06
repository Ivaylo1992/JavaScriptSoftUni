function ages(age) {
    let result = '';

    if (0 <= age && age < 3) {
        result = 'baby';
    } else if (3 <= age && age < 14) {
        result = 'child';
    } else if (14 <= age && age < 20) {
        result = 'teenager';
    }  else if (20 <= age && age < 66) {
        result = 'adult';
    } else if (age >= 66) {
        result = 'elder';
    } else {
        result = 'out of bounds';
    }

    console.log(result);
    
}