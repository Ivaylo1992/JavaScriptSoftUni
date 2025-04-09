function race (input) {
    let racersList = input.shift().split(', ');
    let racersRecords = {};

    for (let racer of racersList) {
        racersRecords[racer] = 0;
    }

    let namePattern = /[A-Za-z]{1}/;
    let kilometersPattern = /[0-9]{1}/

    let command = input.shift();

    while (command != 'end of race') {
        let name = '';
        let kilometers = 0;

        for (char of command) {
            if (namePattern.test(char)) {
                name += char;
            } else if (kilometersPattern.test(char)) {
                kilometers += Number(char);
            }
        }

        if (racersList.includes(name)) {
            if (racersRecords[name]) {
                racersRecords[name] += kilometers;
            } else {
                racersRecords[name] = kilometers;
            }
        }

        command = input.shift();
    }

    let sortedRecords = Object.entries(racersRecords).sort((a,b) => b[1] - a[1]).slice(0, 3);

    let result = {
        '1st place:': sortedRecords[0][0],
        '2nd place:': sortedRecords[1][0],
        '3rd place:': sortedRecords[2][0],
    }
    
    for (let [k, v] of Object.entries(result)) {
        console.log(k, v);
    }

}

race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',
    
    'R1@!3a$y4456@',
    
    'B5@i@#123ll',
    
    'G@e54o$r6ge#',
    
    '7P%et^#e5346r',
    
    'T$o553m&6',
    
    'end of race'])