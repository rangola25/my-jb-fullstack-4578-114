let num = +prompt('please enter your number');
for(let i=1; i<=num; i+=2) {
  for(let z=1; z<=i; z++){
    document.write(`${z}&nbsp`);};
    document.write(`<br>`);
};
if (num%2===1){
for(let i=num-2; i>=1; i-=2) {
  for(let z=1; z<=i; z++){
    document.write(`${z}&nbsp`);};
    document.write(`<br>`);
};}
else {
  for(let i=num-3; i>=1; i-=2) {
    for(let z=1; z<=i; z++){
      document.write(`${z}&nbsp`);};
      document.write(`<br>`);
};};