// const grade1 = 97;
// const grade2 = 66;
// const grade3 = 73;
// const grade4 = 88;

const grades = [97, 66, 73, 88, 100]

// for (let i=0; i<=grades.length-1; i++) {
// document.write(`${grades[i]}<br>`)
// }

for(let item of grades) {
    document.write(`${item}<br>`)
    item += 6
}

document.write(grades)
document.write(`<br>`)

// document.write(grades)

// document.write('<br>')

// document.write(`${grades[1]}<br>`)

// grades.push(100)

// document.write(`${grades[4]}<br>`)