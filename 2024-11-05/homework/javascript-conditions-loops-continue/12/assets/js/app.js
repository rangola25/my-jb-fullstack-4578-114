let num = +prompt('please enter your number');
for(let i=1; i<=num; i+=2) {
  for(let z=1; z<=i; z++){
    document.write(`${z}&nbsp`);};
    document.write(`<br>`);
};
for(let i=num-2; i>=1; i-=2) {
  for(let z=1; z<=i; z++){
    document.write(`${z}&nbsp`);};
    document.write(`<br>`);
};