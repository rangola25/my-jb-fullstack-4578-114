const creditCard = {
 manufacturer: 'Visa',
 cardNumber: '2222222222222222',
 validity: '10/29',
 securityNumber: '222',
};
for(const property in creditCard){
    document.write(`The creditCard ${property} is: ${creditCard[property]} <br>`);
};
