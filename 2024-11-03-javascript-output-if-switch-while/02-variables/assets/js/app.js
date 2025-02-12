// historic way of using variables
var companyName = 'KSP';

// starting 2015, usage of var is wrong
// don't use var

//we can use let to declare a variable
let aVariableThatIMayWantToChange;
// and then assign (assign = השמה)
aVariableThatIMayWantToChange = 1;

let anotherVariable = 3;

aVariableThatIMayWantToChange += 3;

//sometimes, i want to protect a variable from modifications.
const aVariableThatIMayWantToChange += 3;


document.write(companyName);
// using \n in document.write won't work for us
// document.write("\n");
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName);
console.log(companyName + "\n" + companyName);

document.write("<br>" + companyName + " is a great company, everybody likes " + companyName + ", " + companyName + " have the best products");
document.write(`i can also use`)
document.write(`${companyName}`)

document.write