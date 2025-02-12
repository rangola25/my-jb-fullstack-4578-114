function printTriangular(num) {
    for(i=1; i<=num; i++) {
        for(r=num; r>=i; r--) {
            document.write(`&nbsp&nbsp&nbsp`)
        }
        for(z=1; z<=i; z++) {
            if(z===i) {
                for(t=i; t>=1; t--) {
                    document.write(`${t}&nbsp`)
                }
            } else {
                    document.write(`${z}&nbsp`)
            }
        }
        document.write(`<br>`)
    } 
    
}

printTriangular(10)

