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

    document.write(`The clothingDetails manufacturer is: ${clothingDetails.manufacturer} <br>`);
    document.write(`The clothingDetails size is: ${clothingDetails.size} <br>`);
    document.write(`The clothingDetails color is: ${clothingDetails.color} <br>`);
    document.write(`The clothingDetails price is: ${clothingDetails.price} <br>`);
