function schoolGrades (input) {
    let studentsMap = new Map();

    for (let data of input) {
        let tokens = data.split(' ');

        let student = tokens.shift();
        let grades = tokens.map(Number);

        if (!studentsMap.has(student)) {
            studentsMap.set(student, grades);
        } else {
            let currentGrades = studentsMap.get(student);
            let updatedGrades = currentGrades.concat(grades);

            studentsMap.set(student, updatedGrades);
        }
    }

    let sortedStudentsRecords = Array.from(studentsMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [studentName, studentGrades] of sortedStudentsRecords) {
        let gradesSum = studentGrades.reduce((total, number) => total += number);
        let averageGrade = gradesSum / studentGrades.length;

        console.log(`${studentName}: ${averageGrade.toFixed(2)}`);
        
    }
}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])