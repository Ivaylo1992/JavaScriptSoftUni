function passwordGuess(password){
    let correctPassword = "s3cr3t!P@ssw0rd";
    let message = 'Wrong password!'

    if (password === correctPassword){
        message = 'Welcome'
    }

    console.log(message);
    
}

passwordGuess("s3cr3t!p@ss");