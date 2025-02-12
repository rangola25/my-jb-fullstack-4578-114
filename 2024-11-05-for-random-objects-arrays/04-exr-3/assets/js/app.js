const num1 = +prompt('please enter a number');
const num2 = +prompt('please enter another number');
if (num2 > num1) {
for(let i=num1; i<=num2; i++) {
  document.write(`${i}&nbsp`);
}} else {
  for(let i=num2; i<=num1; i++) {
    document.write(`${i}&nbsp`);
}}