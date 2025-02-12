// const name = 'Ran';
// const gender = 'male';
// const age = 22;
// const hairColor = 'brown';
// const hairStyle = 'curly';
// const weight = 90;
// const height = 186;

// const name = 'Hila';
// const gender = 'female';
// const age = 20;
// const hairColor = 'black';
// const hairStyle = 'straight';
// const weight = 50;
// const height = 168;

const emp = {
 name: 'Ran',
 gender: 'male',
 wage: '1000000 dollar',
}

emp.residence = 'petahTikwa';
delete emp.wage;
alert(emp.wage);

for (const property in emp) {
    document.write(`ran ${property} is ${emp[property]}<br>`);
}