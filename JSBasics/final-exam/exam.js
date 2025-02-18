function exam(input) {
    let i = 0;
    
    let studentsCount = Number(input[i]);
    i++;

    let excellentGrades = 0;
    let veryGoodGrades = 0;
    let goodGrades = 0;
    let poorGrades = 0;
    let gradesSum = 0;
 
    for (let student = i; student <= studentsCount; student++) {
        let grade = Number(input[student]);
        gradesSum += grade;

        if (grade >= 5) {
            excellentGrades += 1
        } else if (grade < 5 && grade >= 4) {
            veryGoodGrades += 1
        } else if (grade < 4 && grade >= 3) {
            goodGrades += 1
        } else if (grade < 3 && grade >= 2) {
            poorGrades += 1
        }

    }

    let avgGrade = gradesSum / studentsCount;

    console.log(`Top students: ${(excellentGrades / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(veryGoodGrades / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(goodGrades / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(poorGrades / studentsCount * 100).toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);

}   

exam([6,
    2,
    3,
    4,
    5,
    6,
    2.2
    ]);