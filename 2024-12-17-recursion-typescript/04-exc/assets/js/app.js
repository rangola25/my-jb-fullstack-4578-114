"use strict";

(() => {

    document.getElementById('b1').addEventListener('click', () => {

        printDownNumbers(10)

    })

    document.getElementById('b2').addEventListener('click', () => {

        printEven(10)

    })

    document.getElementById('b3').addEventListener('click', () => {

        printUpNumbers(10)

    })

    const printDownNumbers = (n) => { // 1. function signature identical to non-recursive solution
        if (n <= 0) return      // 2. exit condition, otherwise this is an endless loop
        document.write(n + "<br>")    // 3. do a single portion of the entire recursion work
        printDownNumbers(n-1)         // 4. invoke the recursion with the rest of the work
    }

    const printEven = (n) => { 
        if (n <= 0)  {
            return
        } else if (n % 2 === 1) {
            printEven(n-1) 
        } else {
            document.write(n + "<br>")  
            printEven(n-2) 
        }
    }

    // let i = 1

    // const printUpNumbers = (n) => {
    //     if (i > n) return      
    //     document.write(i + "<br>")
    //     i++    
    //     printUpNumbers(n)        
    // }

    const printUpNumbers = (n) => {
        if (n <= 0) return    
        printUpNumbers(n-1)   
        document.write(n + "<br>")          
    }

    document.getElementById('b4').addEventListener('click', () => {

        const factorial = printMultiple(10)
        console.log(factorial)

    })

    const printMultiple = (n) => {
        if (n <= 1) return 1   
        return n * printMultiple(n-1)    
    }

    document.getElementById('b5').addEventListener('click', () => {

        const fibonacci = printFibonacci(10)
        console.log(fibonacci)

    })


    const printFibonacci = (n) => {
        if (n <= 2) return 1 
        return printFibonacci(n-1) + printFibonacci(n-2)
    }

    document.getElementById('b6').addEventListener('click', () => {

        const user = 
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }


        printUser(user)
        

    })

    
        const printUser = (obj) => {
            for(const prop in obj) {
                if(typeof obj[prop] !== 'object') console.log(prop)
                  else  printUser(obj[prop])
                }
        }
    


})()