const clothingDetails = {
 manufacturer: 'GU',
 size: 'L',
 color: 'white',
 price: '100$',
};
for(const property in clothingDetails){
    document.write(`The clothing details ${property} is: ${clothingDetails[property]} <br>`);
};
