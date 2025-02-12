let start = +prompt('please enter the start')
let last = +prompt('please enter the last')

for (i=1; i<=100; i++) {
let randomNumber = Math.random();
let randomNumberHighRange = randomNumber * (last - start);
let randomNumberParsed = parseInt(randomNumberHighRange);
let randomNumberFinal = randomNumberParsed + start;
document.write(`${start}-${last}: ${randomNumberFinal}<br>`);
}

