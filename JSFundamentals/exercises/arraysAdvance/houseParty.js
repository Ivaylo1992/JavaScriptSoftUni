function houseParty (arr) {
    let guestsList = [];

    for (let command of arr) {
        tokens = command.split(' ');
        let name = tokens[0];

        if (tokens.includes('not')) {
            guestsList = removeFromList(guestsList, name);
        } else {
            guestsList = addToList(guestsList, name);
        }
    }

    function addToList (peopleList, name) {
        if (peopleList.includes(name)) {
            console.log(`${name} is already in the list!`);
        } else {
            peopleList.push(name);
        }

        return peopleList;
    }

    function removeFromList (peopleList, name) {
        if (peopleList.includes(name)) {
            let nameIndex = peopleList.indexOf(name);
            peopleList.splice(nameIndex, 1);
        } else {
            console.log(`${name} is not in the list!`); 
        }

        return peopleList;
    }

    return guestsList.join('\n')
}

console.log(houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']));
