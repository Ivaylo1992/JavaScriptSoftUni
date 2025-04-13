function daysOfMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(daysOfMonth(2, 2021));
