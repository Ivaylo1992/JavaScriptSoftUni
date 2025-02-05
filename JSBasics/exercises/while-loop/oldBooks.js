function oldBooks(input){
    let searchedBook = input[0];

    let isFound = false;
    let counter = 0;
    let i = 1;
    let book = input[i]
    i++;

    while (book !== 'No More Books'){
        if (book === searchedBook){
            isFound = true
            break;
        }
        counter += 1
        book = input[i]
        i++
    }

    if (isFound){
        console.log(`You checked ${counter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
    
    
    ;