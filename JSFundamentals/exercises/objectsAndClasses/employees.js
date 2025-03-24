function employees(arr) {
    for (let name of arr) {
        let employeeObj = {
            'employeeName': name,
            'personalNumber': name.length
        }

        console.log(`Name: ${employeeObj.employeeName} -- Personal Number: ${employeeObj.personalNumber}`)

    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);