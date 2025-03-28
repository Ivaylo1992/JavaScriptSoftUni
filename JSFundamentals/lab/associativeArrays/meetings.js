function meetingsSchedule (input) {
    let meetings = {};

    for (let data of input) {
        let [day, name] = data.split(' '); 
        if (!meetings[day]) {
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
        
    }
}


meetingsSchedule(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])