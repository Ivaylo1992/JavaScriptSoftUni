function timeForReading(pagesCount, pagesPerHour, days){
    let hoursToComplete = pagesCount / pagesPerHour
    let neededHoursPerDay = hoursToComplete / days

    console.log(neededHoursPerDay)
}

timeForReading(432, 15, 4)