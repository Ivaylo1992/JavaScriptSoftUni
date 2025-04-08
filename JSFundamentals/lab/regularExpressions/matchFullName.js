function matchFullName (names) {
    let result = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    
    let validName = pattern.exec(names)

    while (validName != null) {
        result.push(validName[0]);
        validName = pattern.exec(names)
    }

    console.log(result.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");