function townInfo(townName, population, area) {
    let isValid = true;

    if (townName.length < 3) {
        isValid = false;
        console.log("Town name must be at least 3 characters!");
    }

    if (population < 0) {
        isValid = false;
        console.log("Population must be a positive number!");
    }

    if (area < 0) {
        isValid = false;
        console.log("Area must be a positive number!");
    }

    if (isValid) {
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);   
    }
}

townInfo('Ka',
3600,
-50

)