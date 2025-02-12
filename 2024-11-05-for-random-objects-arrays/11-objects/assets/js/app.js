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

const ran = {
 name: 'Ran',
 gender: 'male',
 age: 22,
 hairColor: 'brown',
 hairStyle: 'curly',
 weight: 90,
 height: 186,
 isFromPetachTikwa: true,
}

// alert(ran.name)

for (const property in ran) {
    document.write(`ran ${property} is ${ran[property]}<br>`)
}