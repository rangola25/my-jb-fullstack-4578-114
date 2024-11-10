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
 
    const jsonSring = JSON.stringify(students)
    document.write(jsonSring)
    document.write(`<br>`)

    console.log(students)
    console.log(jsonSring)

    const friends = JSON.parse(jsonSring)
    console.log(friends)
    console.log(`I have ${friends.length} friends`)

