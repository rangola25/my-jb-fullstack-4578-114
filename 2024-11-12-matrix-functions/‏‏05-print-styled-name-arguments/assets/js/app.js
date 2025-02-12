function printStyledName(name) {
    document.write(`${name[0].toUpperCase()}${name.substring(1)}`)
}

function printStyledFullName() {
    printStyledName(firstName)
    document.write('&nbsp')
    printStyledName(lastName)
}

const firstName = prompt('enter first name')
const lastName = prompt('enter last name')

// printStyledFirstName
// printStyledLastName
printStyledFullName()