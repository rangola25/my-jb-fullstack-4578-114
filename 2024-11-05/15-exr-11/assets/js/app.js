const grades = []
let sum = 0;

for(let i=1; i<=12; i++) {
grades.push(parseInt(Math.random() * 101));
}

document.write(`${grades}<br>`)
document.write(`${grades[0]}<br>`)
document.write(`${grades[4]}<br>`)

for(const grade of grades) {
    document.write(`${grade}<br>`)
    sum += grade
}

grades[1] += 6;

document.write(`${grades[1]}<br>`)

document.write(`${sum}<br>`)
document.write(`${sum/grades.length}<br>`)

let max = 0
for(const grade of grades){
max = grade > max ? grade : max;
}
document.write(`${max}<br>`)

// document.write(`${grades}<br>`)

// for(let item of grades) {
//     document.write(`${item[1]}<br>`);
// }

// document.write(grades)
// document.write(`<br>`)

