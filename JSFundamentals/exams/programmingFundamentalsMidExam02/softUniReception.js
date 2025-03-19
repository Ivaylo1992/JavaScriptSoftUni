function softUniReception(arr) {
    let  employeeOne = Number(arr.shift());
    let  employeeTwo = Number(arr.shift());
    let  employeeThree = Number(arr.shift());

    let totalHourCapacity = employeeOne + employeeTwo + employeeThree;
    let studentCount = Number(arr.shift())
    let hours = 0;

    while (studentCount > 0) {
        hours += 1;
        if (hours % 4 === 0) {
            hours += 1;
        }

        studentCount -= totalHourCapacity;
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5','6','4','20'])

softUniReception(['1','2','3','45'])

softUniReception(['3','2','5','40'])