//1
const secondFunction = callback => callback()
secondFunction(() => document.write('Ran Golani'));

//2
const cool = callback => callback()
cool(() => document.write(parseInt(Math.random() * (100 - 0 + 1)) + 0));

//3
const nice = callback => callback(42)
nice(num => document.write(num))

//4
const amazing = callback => {
    const num = callback(42, 128, 37, 81, 66);
	document.write('Num: ' + num);
}

amazing((num1, num2, num3, num4, num5) => {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = [num1, num2, num3, num4, num5][randomIndex];
    return randomNum;
})

//5
const cool2 = paintCallback => paintCallback()

cool2(() => {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = ['green', 'yellow', 'blue', 'pink', 'gray'][randomIndex];
    return document.body.style.backgroundColor = randomNum;
});

//6
const nice2 = paintCallback => paintCallback('Green')

nice2(color => document.body.style.backgroundColor = color)

//7
const amazing2 = paintCallback => {
	const paintedColor = paintCallback('Red', 'Green', 'Blue');
	document.write('Painted Color: ' + paintedColor);
}

amazing2((a, b, c) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomNum = [a, b, c][randomIndex];
    return document.body.style.backgroundColor = randomNum; 
})

//8
setInterval(() => {
    document.write(parseInt(Math.random() * (100 - 0 + 1)) + 0)
}, 1000)

//9
setInterval(() => {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = bgColor;
}, 1000)

//10
setInterval(() => {
    for(i=0; i<100; i++){
    document.write(parseInt(Math.random() * (101 - 0 + 1)) + 0 +`<br>`)
}}, 3000)