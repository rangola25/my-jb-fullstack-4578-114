//1
function secondFunction(callback) {
    callback();
    
}

secondFunction(function fullName() {
    document.write('Ran Golani')
});

//2
function randomNum() {
    document.write(parseInt(Math.random() * (100 - 0 + 1)) + 0)
}

function cool(callback) {
	callback();
}

cool(randomNum);

//3
function num(num) {
    document.write(num) 
}

function nice(callback) {
	callback(42);
}

nice(num)

//4
function randomNumber(num1, num2, num3, num4, num5) {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = [num1, num2, num3, num4, num5][randomIndex];
    return randomNum;
}

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write('Num: ' + num);
}

amazing(randomNumber)

//5
function screen() {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = ['green', 'yellow', 'blue', 'pink', 'gray'][randomIndex];
    return document.body.style.backgroundColor = randomNum;
}

function cool2(paintCallback) {
	paintCallback();
}

cool2(screen);

//6
function back(color) {
    return document.body.style.backgroundColor = color;
}

function nice2(paintCallback) {
	paintCallback('Green');
}

nice2(back)

//7
function backColor(a, b, c) {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomNum = [a, b, c][randomIndex];
    return document.body.style.backgroundColor = randomNum; 
}

function amazing2(paintCallback) {
	const paintedColor = paintCallback('Red', 'Green', 'Blue');
	document.write('Painted Color: ' + paintedColor);
}

amazing2(backColor)

//8
function numRand() {
    document.write(parseInt(Math.random() * (101 - 0 + 1)) + 0)
}
setInterval(numRand, 1000)

//9
function colorRand() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = bgColor;
}
setInterval(colorRand, 1000)

//10
function numRand100() {
    for(i=0; i<100; i++){
    document.write(parseInt(Math.random() * (101 - 0 + 1)) + 0 +`<br>`)
}
}
setInterval(numRand100, 3000)