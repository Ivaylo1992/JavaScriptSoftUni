function personalTitles(age, gender){
    if (age >= 16) {
        switch (gender) {
            case 'm': console.log('Mr.');
                break;
            case 'f': console.log('Ms.');
                break;
        }
    } else {
        switch (gender) {
            case 'm': console.log('Master');
                break;
            case 'f': console.log('Miss');
                break;
        }
    }
}

personalTitles(17,
    "f"    
    );