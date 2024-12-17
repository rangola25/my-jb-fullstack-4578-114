const lastName = 'Ran'
const highestGrade = '100'
function showGrade(grade) {
    console.log(`grade is ${grade}`)
}

function showName(name) {
    console.log(`name is ${name}`)
}

function showFunction(someFunction) {
    console.log(`someFunction is ${someFunction}`)
}

showName(lastName)
showGrade(highestGrade)

showFunction(showGrade)