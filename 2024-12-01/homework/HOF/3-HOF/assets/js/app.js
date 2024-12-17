let random20 = []

for(i=0; i<20; i++){    
    const price = parseInt(Math.random() * (100 - 20 + 1)) + 20
    let pizza = {
        Diameter: parseInt(Math.random() * (30 - 10 + 1)) + 10,
        Slices: parseInt(Math.random() * (12 - 2 + 1)) + 2,
        Toppings: parseInt(Math.random() * (5 - 0 + 1)) + 0,
        price: price,
    }
    random20.push(pizza)
}

const updatePizza = random20.map(pizza => ({
    price: pizza.price,
    Vat: pizza.price * 0.1
  }));

//1
random20.forEach(object => console.log(object))
console.log('1')

//2
const noToppings = random20.find(object => object.Toppings === 0)
console.log(noToppings)
console.log('2')

//3
const lessThan30pRICE = random20.find(object => object.price < 30)
console.log(lessThan30pRICE)
console.log('3')

//4
const lessThan20Diameter = random20.filter(num => num.Diameter <= 20)
console.log(lessThan20Diameter)
console.log('4')

//5
const moreThan80 = random20.filter(object => object.price > 80)
console.log(moreThan80)
console.log('5')

//6
const allNoToppings = random20.filter(object => object.Toppings === 0)
console.log(allNoToppings)
console.log('6')

//7
const Index6Slices = random20.findIndex(object => object.Slices === 6)
console.log(Index6Slices)
console.log('7')

//8
const radiusAll = random20.forEach(num => console.log(num.Diameter/2))
console.log('8')

//9
console.log(updatePizza)
console.log('9')

//10
const sumPrices = updatePizza.reduce((currentSum, num) => { return currentSum + num.price}, 0)
console.log(sumPrices)
console.log('10')

//11
const expensive = updatePizza.reduce((currentSum, num) =>  currentSum > num.price ? currentSum : num.price, 0)
console.log(expensive)
console.log('11')

//12
const expensivePizza = updatePizza.reduce((currentMax, pizza) => {
    return pizza.price > currentMax.price ? pizza : currentMax;
  }, { price: 0 });  // Initial value is an object with a price of 0 to ensure valid comparisons
  
  console.log(expensivePizza);
  