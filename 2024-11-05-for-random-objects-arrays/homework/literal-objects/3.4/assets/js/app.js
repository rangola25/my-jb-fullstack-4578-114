const clothingDetails = {
 manufacturer: 'GU',
 size: 'L',
 color: 'white',
 price: '100$',
};

clothingDetails.manufacturer = prompt('please enter a manufacturer');
clothingDetails.size = prompt('please enter a size');
clothingDetails.color = prompt('please enter a color');
clothingDetails.price = prompt('please enter a price');

for(const property in clothingDetails){
    document.write(`The clothing details ${property} is: ${clothingDetails[property]} <br>`);
};

