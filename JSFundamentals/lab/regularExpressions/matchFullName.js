function matchFullName (names) {
    let result = [];
    let path = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    
    for (let name of names.split(', ')) {
        if (path.test(name)) {
            result.push(name)
        }
    }

    console.log(result.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");