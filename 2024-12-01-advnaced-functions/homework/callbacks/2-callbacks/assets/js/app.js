//1
function secondFunction(callback) {
    callback();
    
}

secondFunction(function fullName() {
    document.write('Ran Golani')
});

//2
function cool(callback) {
	callback();
}

cool(function randomNum() {
    document.write(parseInt(Math.random() * (100 - 0 + 1)) + 0)
});

//3
function nice(callback) {
	callback(42);
}

nice(function num(num) {
    document.write(num) 
})

//4
function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write('Num: ' + num);
}

amazing(function randomNumber(num1, num2, num3, num4, num5) {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = [num1, num2, num3, num4, num5][randomIndex];
    return randomNum;
})

//5
function cool2(paintCallback) {
	paintCallback();
}

cool2(function screen() {
    const randomIndex = Math.floor(Math.random() * 5);  
    const randomNum = ['green', 'yellow', 'blue', 'pink', 'gray'][randomIndex];
    return document.body.style.backgroundColor = randomNum;
});

//6
function nice2(paintCallback) {
	paintCallback('Green');
}

nice2(function back(color) {
    return document.body.style.backgroundColor = color;
})

//7
function amazing2(paintCallback) {
	const paintedColor = paintCallback('Red', 'Green', 'Blue');
	document.write('Painted Color: ' + paintedColor);
}

amazing2(function backColor(a, b, c) {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomNum = [a, b, c][randomIndex];
    return document.body.style.backgroundColor = randomNum; 
})

//8
setInterval(function numRand() {
    document.write(parseInt(Math.random() * (101 - 0 + 1)) + 0)
}, 1000)

//9
setInterval(function colorRand() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    const bgColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = bgColor;
}, 1000)

//10
setInterval(function numRand100() {
    for(i=0; i<100; i++){
    document.write(parseInt(Math.random() * (101 - 0 + 1)) + 0 +`<br>`)
}}, 3000)