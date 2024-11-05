let randomNumber = Math.random();
let randomNumberHighRange = randomNumber * 50;
let randomNumberParsed = parseInt(randomNumberHighRange);
let randomNumberFinal = randomNumberParsed + 0;
document.write(`0-50: ${randomNumberFinal}<br>`);

 randomNumber = Math.random();
 randomNumberHighRange = randomNumber * (30 - 10);
 randomNumberParsed = parseInt(randomNumberHighRange);
 randomNumberFinal = randomNumberParsed + 10;
document.write(`10-30: ${randomNumberFinal}<br>`);

 randomNumber = Math.random();
 randomNumberHighRange = randomNumber * (50 - 20);
 randomNumberParsed = parseInt(randomNumberHighRange);
 randomNumberFinal = randomNumberParsed + 20;
document.write(`20-50: ${randomNumberFinal}<br>`);

 randomNumber = Math.random();
 randomNumberHighRange = randomNumber * (51 - 20);
 randomNumberParsed = parseInt(randomNumberHighRange);
 randomNumberFinal = randomNumberParsed + 20;
document.write(`20-51: ${randomNumberFinal}<br>`);