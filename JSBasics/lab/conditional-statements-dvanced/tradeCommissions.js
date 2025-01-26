function tradeCommissions(town, sales){
    let result = 0;
    let error = false;

    switch (town){
        case 'Sofia': 
            if (0 <= sales && sales <=500) {
                result = sales * 0.05
            } else if (500 < sales && sales <= 1000) {
                result = sales * 0.07
            } else if (1000 < sales && sales <= 10000) {
                result = sales * 0.08
            } else if (sales > 10000) {
                result = sales * 0.12
            } else {
                error = true
            }
            break;
        case 'Plovdiv': 
            if (0 <= sales && sales <=500) {
                result = sales * 0.055
            } else if (500 < sales && sales <= 1000) {
                result = sales * 0.08
            } else if (1000 < sales && sales <= 10000) {
                result = sales * 0.12
            } else if (sales > 10000) {
                result = sales * 0.145
            } else {
                error = true
            }
            break;

        case 'Varna': 
            if (0 <= sales && sales <=500) {
                result = sales * 0.045
            } else if (500 < sales && sales <= 1000) {
                result = sales * 0.075
            } else if (1000 < sales && sales <= 10000) {
                result = sales * 0.10
            } else if (sales > 10000) {
                result = sales * 0.13
            } else {
                error = true
            }
            break;

            default: error = true; break;
    }

    if (!error) {
        console.log(result.toFixed(2));
    } else{
        console.log('error');
    }
    
    
    
}

tradeCommissions('Sofia',
    -20
    );