function printArray(num) {
    for(i=num; i>=1; i--){
        document.write(`${i}&nbsp`);
    }
}

printArray(5)
document.write(`<br><br>`);

function printTriangular(num2) {
    for(z=num2; z>=1; z--) {
    for(t=z; t>=1; t--){
        document.write(`${t}&nbsp`);
        }
        
        document.write(`<br>`);
    }
}

printTriangular(5)