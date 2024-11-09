const songs = [];

// 2
songs.push(prompt('Please enter the first song'));
songs.push(prompt('please enter the second song'));
songs.push(prompt('please enter the third song'));

document.write(`${songs}<br>`);

delete songs[1]

document.write(`${songs}`);