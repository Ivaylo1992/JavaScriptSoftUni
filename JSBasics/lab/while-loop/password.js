function password(input){
    let username = input[0];
    let password = input[1]
    let i = 2;

    while (true){
        let attemptPassword = input[i];
        i++;
        if (attemptPassword === password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}

password(["Gosho",
    "secret",
    "secret"])
    
    ;