function getPreviousDay (year, month, day) {
    const date = new Date(year, month + 1, day);

    date.setDate(date.getDate() - 1);

    const prevYear = date.getFullYear();
    const prevMonth = date.getMonth() - 1;
    const prevDate = date.getDate();

    return `${prevYear}-${prevMonth}-${prevDate}`
}

console.log(getPreviousDay(2015, 5, 1));
