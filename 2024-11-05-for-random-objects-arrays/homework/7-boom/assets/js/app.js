// let num = +prompt('please enter a number');

// for(i=1; i<=num; i++){
//     dup=i;
//     if (i%7===0){ 
//         alert('Boom');
//      } else {
//         while(dup>0){
//             if(dup%10===7){
//                 alert('Boom');
//                 dup=0;
//             } else {
//                 dup = dup / 10;
//                 dup = parseInt(dup);
//                 if(dup===0) {
//                 alert(`${i}`);
//                 };
//             };
//         };
//      };
// };


let num = +prompt('Please enter a number');
let boom = false;

for (let i = 1; i <= num; i++) {
  
  if (i % 7 === 0) {
    alert('Boom');
  } else {
    
    let numericString = i.toString();
    for (let z = 0; z < numericString.length; z++) {
     
      if (numericString[z] === 7) {
        alert('Boom');
        boom = true;
        break;
      } else {};
    }

    
    if (!boom) {
      alert(i);
    } else {};
    boom = false; 
  }
}

