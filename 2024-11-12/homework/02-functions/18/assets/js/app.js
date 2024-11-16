function printTriangular(num2) {
    for(z=num2; z>=1; z--) {
    for(t=z; t>=1; t--){
        document.write(`${t}&nbsp`);
        }
    for(t=z; t>=1; t--){
        document.write(`*&nbsp`);
        } 
        document.write(`<br>`);
    }
}

printTriangular(5)