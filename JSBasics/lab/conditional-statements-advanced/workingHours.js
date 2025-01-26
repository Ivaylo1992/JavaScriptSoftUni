function workingHours(hour, day){
    if (hour >= 10 && hour <= 18)
        switch (day) {
            case 'Sunday': console.log('closed');    
                break;
        
            default: console.log('open');
                break;
        } else {
            console.log('closed');
        }
}

workingHours(11,
    "Sunday"
    
    );