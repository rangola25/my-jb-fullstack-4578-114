let num = +prompt('please enter a number');

for(i=1; i<=num; i++){
    dup=i;
    if (i%7===0){ 
        alert('Boom');
     } else {
        while(dup>0){
            if(dup%10===7){
                alert('Boom');
                dup=0;
            } else {
                dup = dup / 10;
                dup = parseInt(dup);
                if(dup===0) {
                alert(`${i}`);
                };
            };
        };
     };
};
