const numbers = [];

// 4.1
// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// document.write(`${numbers.join(' | ')}`);

// 4.2
// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// 4.3
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let sum = 0

// for(i=0; i<numbers.length; i++){
//   sum = sum + numbers[i]
// }
// document.write(`${sum}`);

// 4.4
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let sum = 0

// for(i=0; i<numbers.length; i++){
//   sum = sum + numbers[i]
// }
// document.write(`${sum/numbers.length}`);

// 4.5
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let sum = 0;
// const double = [];

// for(i=0; i<numbers.length; i++){
//   if (numbers[i]%2===0) {
//     double.push(`${numbers[i]}`);
//   } else {};
// };

// document.write(`${double}`);

// 4.6
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let sum = 0;
// const odd = [];

// for(i=0; i<numbers.length; i++){
//   if (numbers[i]%2===1) {
//     odd.push(`${numbers[i]}`);
//   } else {};
// };

// document.write(`${odd.length}`);

// 4.7
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let max = numbers[0];

// for(i=0; i<numbers.length; i++){
//   if (max<numbers[i]){
//     max = numbers[i]
//   } else{};
// };

// document.write(`${max}`);

// 4.8
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let min = numbers[0];

// for(i=0; i<numbers.length; i++){
//   if (min>numbers[i]){
//     min = numbers[i]
//   } else{};
// };

// document.write(`${min}`);

// 4.9
// document.write(`${numbers.reverse().join(' | ')}`);

// for (let i = 1; i <= 100; i++) {
//   const randomNumber = Math.random();
//   const randomNumber100 = randomNumber * 101;
//   const randomNumberParsed = parseInt(randomNumber100);
//   const randomNumberHigher = randomNumberParsed + 0;
//   numbers.push(randomNumberParsed);
// };

// let sum = 0

// for(i=0; i<numbers.length; i++){
//   sum = sum + numbers[i]
// }

// for(i=0; i<numbers.length; i++){
// if(numbers[i]>sum/numbers.length) {
//   document.write(`${numbers[i]}&nbsp`);
// } else {}
// };

// 4.10
document.write(`${numbers.reverse().join(' | ')}`);

for (let i = 1; i <= 100; i++) {
  const randomNumber = Math.random();
  const randomNumber100 = randomNumber * 101;
  const randomNumberParsed = parseInt(randomNumber100);
  const randomNumberHigher = randomNumberParsed + 0;
  numbers.push(randomNumberParsed);
};

let sum = 0
const min = [];

for(i=0; i<numbers.length; i++){
  sum = sum + numbers[i]
}

for(i=0; i<numbers.length; i++){
if(numbers[i]<sum/numbers.length) {
  min.push(numbers[i]);
} else {};
};

document.write(`${min.length}`);




