// let num = +prompt('please enter your number');
// for(let i=1; i<=num; i++){
//   let y=i;
//   for(let z=1; z<=i; z++){
//     if(y<num){
//     while(y<num){
//     document.write(`&nbsp&nbsp`);
//     y++;};} else{ if (z!==i){
//     document.write(`${z}`)} else{
//       let r=z;
//       while(r>=1){
//        document.write(`${r}`);
//        r--;};
//       };};};
//     document.write(`<br>`);};

let num = +prompt('Please enter your number');
for (let i = 1; i <= num; i++) {
  let y = i;
  
  // Print spaces before the numbers
  for (let z = 1; z <= num - i; z++) {
    document.write("&nbsp;&nbsp;");
  }

  // Print increasing numbers
  for (let z = 1; z <= i; z++) {
    document.write(`${z}`);
  }
  
  // Print decreasing numbers
  for (let r = i - 1; r >= 1; r--) {
    document.write(`${r}`);
  }

  // Move to the next row
  document.write("<br>");
}
