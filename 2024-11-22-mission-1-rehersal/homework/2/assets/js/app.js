let grades = []

function collectData() {
    const firstNameStudent = document.getElementById('firstNameStudent').value
    const lastNameStudent = document.getElementById('lastNameStudent').value
    const grade = parseInt(document.getElementById('grade').value)
    const averageElement  = document.getElementById('average')
    grades.push(grade)
    let sum = 0;
    for(let garde2 of grades) {
        sum += garde2
    }
    const average = sum/grades.length
    averageElement.textContent = `Average Grade: ${average}`; 
    return {
        firstNameStudent: firstNameStudent,
        lastNameStudent: lastNameStudent,
        grade: grade
    }
}

function generateHTML(data) {
    const newHTML = `
    <tr class="table-primary"> 
        <td scope="row">${data.firstNameStudent}</td>
        <td>${data.lastNameStudent}</td>
        <td>${data.grade}</td>
    </tr>`
    return newHTML
}

function renderHTML(newHTML) {
    const gradesContainer = document.getElementById('gradesContainer')
    gradesContainer.innerHTML += newHTML
}

function clearForm() {
    const gradesForm = document.getElementById('gradesForm')
    gradesForm.reset()

    const firstNameStudent = document.getElementById('firstNameStudent')
    firstNameStudent.focus()
}

function saveToStoarge(student) {
    const currentGradesInStoargeJSON = localStorage.getItem('firstNameStudent')

    let studentGrades;
    if(!currentGradesInStoargeJSON) {
        studentGrades = []
    } else {
        studentGrades = JSON.parse(currentGradesInStoargeJSON)
    }

    studentGrades.push(student)
    localStorage.setItem('firstNameStudent', JSON.stringify(studentGrades))
}

function addGradeToTable(event) {
    const firstNameStudentInput = document.getElementById('firstNameStudent')
    const lastNameStudentInput = document.getElementById('lastNameStudent')
    const gradeInput = document.getElementById('grade')
    const firstNameStudent = firstNameStudentInput.value
    const lastNameStudent = lastNameStudentInput.value
    const grade  = gradeInput.value
    if(grade >= 0 && grade <= 100 && firstNameStudent && lastNameStudent) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    saveToStoarge(data)
    renderHTML(newHTML)
    clearForm()
} 
if (grade < 0 || grade > 100 || !grade) {
    alert(`Invalid garde`)
    gradeInput.style.background = 'pink'
}
if (!firstNameStudent) {
    alert(`Invalid first name`)
    firstNameStudentInput.style.background = 'pink'
}
if (!lastNameStudent) {
    alert(`Invalid last name`)
    lastNameStudentInput.style.background = 'pink'
    }
}

function loadCarsFromaLocalStoarge() {
    const gradesJSON = localStorage.getItem('studentGrades')
    if(gradesJSON) {
        const grades = JSON.parse(gradesJSON)
        for (const grade of grades) {
            const newHTML = generateHTML(grade)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromaLocalStoarge()