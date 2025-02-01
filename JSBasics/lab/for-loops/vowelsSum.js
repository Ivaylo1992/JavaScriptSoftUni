function vowelsSum(text){
    let result = 0;

    for (let i = 0; i < text.length; i++){
        if (text[i] === 'a'){
            result += 1
        } else if (text[i] === 'e'){
            result += 2
        } else if (text[i] === 'i'){
            result += 3
        } else if (text[i] === 'o'){
            result += 4
        } else if (text[i] === 'u'){
            result += 5
        }
    }

    console.log(result);
    
}

vowelsSum('bamboo');