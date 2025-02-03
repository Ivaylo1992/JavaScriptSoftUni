function readText(input){
    let i = 0;
    let text = input[i];

    while (text !== 'Stop'){
        console.log(text);
        i++;
        text = input[i];
    }
}

readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])
    
    ;