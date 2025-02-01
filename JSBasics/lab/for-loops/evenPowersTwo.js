function evenPowersTwo(num){
    for (let i = 0; i <= num; i += 2){
        console.log(Math.pow(2, i));
    }
}

evenPowersTwo(7);