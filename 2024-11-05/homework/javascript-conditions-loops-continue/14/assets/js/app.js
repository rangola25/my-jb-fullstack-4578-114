let num = +prompt('please enter a number:');
for(singularity=num; singularity>=1;){
for (sum = 0; singularity >= 1;) {
     sum = sum + singularity % 10;
     singularity = singularity / 10;
     singularity = parseInt(singularity);
};alert("The sum of the digits: " + sum);
num = +prompt('please enter a number:');
singularity=num;};
