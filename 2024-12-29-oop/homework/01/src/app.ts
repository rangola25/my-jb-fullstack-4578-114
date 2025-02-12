import book from './book.js'

const harryPotter = new book(
    'harryPotter',
    'J.K.Rowling',
    'Bloomsbury',
    150
)

harryPotter.display()

harryPotter.endPrice()

const poohTheBear = new book(
    'poohTheBear',
    'A.A.Milne',
    'bye',
    75
)

poohTheBear.display()

poohTheBear.endPrice()

const Jealousy = new book(
    'Jealousy',
    'Fancy',
    'money',
    200
)

Jealousy.display()

Jealousy.endPrice()
