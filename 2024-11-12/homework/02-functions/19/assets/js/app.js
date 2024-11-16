function printTriangular(num2) {
    for(z=num2; z>=1; z--) {
    for(t=z; t>=1; t--){
        document.write(`*&nbsp`);
        } 
        document.write(`<br>`);
    }
    for(z=1; z<=num2; z++) {
        for(t=1; t<=z; t++){
            document.write(`*&nbsp`);
            } 
            document.write(`<br>`);
        }
}

printTriangular(5)