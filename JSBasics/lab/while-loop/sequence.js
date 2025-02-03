function sequence(number){
    let num = 1;

    while(true){
        console.log(num);
        num = (num * 2) + 1
        if (num > number){
            break;
        }
    }
}

sequence(31)