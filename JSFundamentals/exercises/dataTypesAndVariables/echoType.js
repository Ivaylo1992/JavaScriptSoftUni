function echoType(input) {
    console.log(typeof(input))

    let message = typeof(input) === 'number' || typeof(input) === 'string' ? input : 'Parameter is not suitable for printing'; 

    console.log(message);
    
}

echoType('Hello, JavaScript!');