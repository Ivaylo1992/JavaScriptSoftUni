function vacation(peopleCount, groupType, day) {
    let totalPrice = 0;
    
    switch (day) {
      case 'Friday':
        if (groupType === 'Students') {
          totalPrice = peopleCount * 8.45;
          if (peopleCount >= 30) {
            totalPrice *= 0.85;
          }
          
        } else if (groupType === 'Business') {
          totalPrice = peopleCount * 10.90;
          if (peopleCount >= 100) {
            totalPrice -= 10.90 * 10;
          }
        } else if (groupType === 'Regular') {
          totalPrice = peopleCount * 15;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
          }
        } 
        break;
      
      case 'Saturday':
        if (groupType === 'Students') {
          totalPrice = peopleCount * 9.80;
          if (peopleCount >= 30) {
            totalPrice *= 0.85;
          }
          
        } else if (groupType === 'Business') {
          totalPrice = peopleCount * 15.60;
          if (peopleCount >= 100) {
            totalPrice -= 15.60 * 10;
          }
        } else if (groupType === 'Regular') {
          totalPrice = peopleCount * 20;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
          }
        } 
        break;
      
      case 'Sunday':
        if (groupType === 'Students') {
          totalPrice = peopleCount * 10.46;
          if (peopleCount >= 30) {
            totalPrice *= 0.85;
          }
          
        } else if (groupType === 'Business') {
          totalPrice = peopleCount * 16;
          if (peopleCount >= 100) {
            totalPrice -= 16 * 10;
          }
        } else if (groupType === 'Regular') {
          totalPrice = peopleCount * 22.50;
          if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
          }
        } 
        break;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
  }