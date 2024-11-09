let num = +prompt('please enter a number:');
for(singularity=num; singularity>=1;){
for (help = 0; singularity >= 1;) {
     singularity = singularity / 10;
     singularity = parseInt(singularity);
     help++;
};alert("The amount of the digits: " + help);
num = +prompt('please enter a number:');
singularity=num;};
