function studentRecords (input) {
    let coursesObj = {};

    for (command of input) {
        if (command.includes(': ')) {
            let [courseName, courseCapacity] = command.split(': ');
            courseCapacity = Number(courseCapacity);

            coursesObj = addCourse(courseName, courseCapacity, coursesObj);
        } else {
            let [userNameAndCredits, emailAndCourseName] = command.split(' with email ')
            let [userName, credits] = userNameAndCredits.split('[')
            credits = Number(credits.slice(0, -1));
            let [email, courseName] = emailAndCourseName.split(' joins ');

            coursesObj = addStudent(userName, credits, email, courseName, coursesObj);
        }
    }

    printCourses(coursesObj);

    function addCourse (name, capacity, courses) {
        if (!courses[name]) {
            let courseObj = {
                students: [],
                capacity: capacity,
            }

            courses[name] = courseObj;
        } else {
            courses[name].capacity += capacity;
        }

        return courses;
    }

    function addStudent(username, credits, email, courseName, courses) {
        if (courses.hasOwnProperty(courseName)) {
            if (courses[courseName].capacity > 0) {
                let studentObj = { username, credits, email};

                courses[courseName].students.push(studentObj);

                courses[courseName].capacity -= 1;
            }
        }

        return courses;
    }

    function sortCourses(courses) {
        return Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length);
    }
    
    function sortStudents (studentsArr) {
        return studentsArr.sort((a, b) => b.credits - a.credits);
    }

    function printCourses(courses) {
        let sortedCourses = sortCourses(courses);

        for (let courseInfo of sortedCourses) {
            console.log(`${courseInfo[0]}: ${courseInfo[1].capacity} places left`);
            
            let sortedStudents = sortStudents(courseInfo[1].students);
            
            for (let studentInfo of sortedStudents) {
                console.log(`--- ${studentInfo.credits}: ${studentInfo.username}, ${studentInfo.email}`);
                
            }
        }
    }
    
}

studentRecords(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])