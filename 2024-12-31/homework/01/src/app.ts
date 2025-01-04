import Drum from "./drum.js";
import grandPiano from "./grandPiano.js";
import Guitar from "./guitar.js";
import Piano from "./piano.js";

const myGuitar = new Guitar(
    'electric',
    'YosiAndSons',
    'brown',
    5
) 

myGuitar.display()
myGuitar.makeSound()

const myDrum = new Drum(
    'basic',
    'musicBand',
    'red',
    18
) 

myDrum.display()
myDrum.makeSound()

const myPiano = new Piano(
    'luzi',
    'theDevil',
    'black',
    4
) 

myPiano.display()
myPiano.makeSound()
myPiano.test()
myPiano.tune()

const myGrandPiano = new grandPiano(
    'lucifer',
    'theDevil',
    'gray',
    4,
    49
) 

myGrandPiano.display()
myGrandPiano.makeSound()
myGrandPiano.test()
myGrandPiano.tune()