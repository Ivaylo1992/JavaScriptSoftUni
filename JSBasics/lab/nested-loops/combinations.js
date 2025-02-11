function combinations(number) {
    let result = 0;
    let counter = 0;
    for (let i = 0; i <= number; i++){
        for (let j = 0; j <= number; j++) {
            for (let k = 0; k <= number; k++) {
                result = i + j + k; 
                if (result === number){
                    counter += 1;
                }
            }
        }
    }

    console.log(counter);
    
}

combinations(25);