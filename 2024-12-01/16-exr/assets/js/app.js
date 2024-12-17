const students = [
    {
        name: 'Yoav',
        grade: 95,
        age: 22
    },
    {
        name: 'Beery',
        grade: 96,
        age: 18
    },
    {
        name: 'Itay',
        grade: 65,
        age: 25
    }
]

// for(const student of students) {
//     if(student.grade === 95) {
//         console.log(student)
//         break
//     }
// }

// const student = students.find(student => student.grade === 65)
// console.log(student)

// const studentsWith90Plus = []
// for(const student of students) {
//     if(student.grade > 90) {
//         studentsWith90Plus.push(student)
//     }
// }
// console.log(studentsWith90Plus)

// const filterStudents = students.filter(student => student.grade > 90)
// console.log(filterStudents)

// for(let i=0; i < students.length; i++) {
//     if(students[i].age === 25) {
//         console.log(i)
//         break
//     }
// }

// const index = students.findIndex(student => student.age === 25) 
// console.log(index)

// students.forEach(console.log)

// let sum = 0;
// let avg = 0;
// for(const student of students) {
//     sum+=student.grade
// }
// avg = sum / students.length
// console.log(avg)

const max = students.reduce((currentMax, student) => currentMax > student.grade ? currentMax : student.grade, 0)

console.log(max)