const students = [
    {
    firstName: 'Ido',
    lastName: 'Atia',
    grades: [100, 87, 94]
    },
    {
    firstName: 'Golan',
    lastName: 'Levi',
    grades: [82, 100, 91]
    },
    {
    firstName: 'Moshe',
    lastName: 'Abarjil',
    grades:[64, 78, 96]
    }
    ]
 
    console.log(students)

    for(const student of students) {
        
        let sum = 0;
        for(const grade of student.grades) {
                sum += grade
    }

    console.log(`Name of student is ${student.firstName} and their average is ${sum / student.grades.length}`)
    console.log(`grades of student is ${student.grades}`)
    }