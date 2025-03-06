function theatrePromotions(dayType, personAge) {
    let ticketPrice = null;
    let isValid = true;
    
    if (personAge >= 0 && personAge <= 18) {
      switch (dayType) {
        case 'Weekday':
          ticketPrice = 12;
          break;
        
        case 'Weekend':
          ticketPrice = 15;
          break;
        
        case 'Holiday':
          ticketPrice = 5;
          break;
      } 
    } else if (personAge > 18 && personAge <= 64) {
      switch (dayType) {
        case 'Weekday':
          ticketPrice = 18;
          break;
        
        case 'Weekend':
          ticketPrice = 20;
          break;
        
        case 'Holiday':
          ticketPrice = 12;
          break;
      } 
    } else if (personAge > 64 && personAge <= 122) {
      switch (dayType) {
        case 'Weekday':
          ticketPrice = 12;
          break;
        
        case 'Weekend':
          ticketPrice = 15;
          break;
        
        case 'Holiday':
          ticketPrice = 10;
          break;
      } 
    } else {
      isValid = false;
    }
    
    if (!isValid) {
      console.log('Error!');
    } else {
      console.log(`${ticketPrice}$`)
    }
  }