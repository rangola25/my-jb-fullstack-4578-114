const rectangle = {
 length: 10,
 height: 5,
 color: 'blue',
 X: '0-10',
 Y: '0-5',
};
for (const property in rectangle) {
    document.write(`The rectangle ${property} is: ${rectangle[property]} <br>`);
};