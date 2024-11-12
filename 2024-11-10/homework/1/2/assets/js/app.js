const clothing = [
    {
    type: 'shirt',
    size: 'L',
    price: 100,
    color: 'gray'
},

  {
    type: 'pants',
    size: 'L',
    price: 120,
    color: 'blue'
},

 {
    type: 'shoes',
    size: '46',
    price: 300,
    color: 'black'
}, 

 {
    type: 'hat',
    size: 'L',
    price: 50,
    color: 'brown'
},

 { 
    type: 'flip-flop',
    size: '43',
    price: 70,
    color: 'red'
}
]

for (const property in clothing) {
    console.log(JSON.stringify(clothing[property]));
    };

