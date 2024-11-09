const employee = {
 firstName: 'Ran',
 lastName: 'Golani',
 salary: 100000,
 email: 'rango2001@gmail.com',
 tel: '054-7697900',
};
for (const property in employee) {
    document.write(`The employee ${property} is: ${employee[property]} <br>`);
};