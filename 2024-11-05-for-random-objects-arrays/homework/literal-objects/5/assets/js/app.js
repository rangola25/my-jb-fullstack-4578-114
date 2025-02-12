const customer = {
    firstName: 'Vitali',
    lastName: 'Abu-Saleh',
    email: 'VitaliAS@gmail.com',
    tel: '050-2222222',
   };

const creditCard = {
 manufacturer: 'Visa',
 cardNumber: '2222222222222222',
 validity: '10/29',
 securityNumber: '222',
};

// 5.1
    // document.write(`The customer firstName is: ${customer.firstName} <br>`);
    // document.write(`The customer lastName is: ${customer.lastName} <br>`);
    // document.write(`The customer email is: ${customer.email} <br>`);
    // document.write(`The customer tel is: ${customer.tel} <br>`);
    // document.write(`The creditCard manufacturer is: ${creditCard.manufacturer} <br>`);
    // document.write(`The creditCard cardNumber is: ${creditCard.cardNumber} <br>`);
    // document.write(`The creditCard validity is: ${creditCard.validity} <br>`);
    // document.write(`The creditCard securityNumber is: ${creditCard.securityNumber} <br>`);


// 5.2
    for(const property in customer){
        document.write(`The customer ${property} is: ${customer[property]} <br>`)};
    for(const property2 in creditCard){
        document.write(`The creditCard ${property2} is: ${creditCard[property2]} <br>`)};
