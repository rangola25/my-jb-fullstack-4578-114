let height = +prompt('please enter your height for the cube');
let length = +prompt('please enter your length for the cube');
for(i=height; i>0; i--) {
  if(i>=2 && i<=height-1){
    for(z=1; z<=length; z++) {
      if(z>=2 && z<=length-1) {document.write(`&nbsp&nbsp&nbsp`)}
      else {document.write(`*&nbsp`)}; }; }
  else {
  for(z=1; z<=length; z++){
     document.write(`*&nbsp`);};};
    document.write(`<br>`);
};