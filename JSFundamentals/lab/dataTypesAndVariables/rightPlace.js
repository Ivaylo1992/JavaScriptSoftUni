function rightPlace(strng, char, result) {
    let newStr = strng.replace('_', char);
    
    let message = result === newStr ? 'Matched' : 'Not Matched';
    
    console.log(message);
  }

  console.log('Hello');
  
