function sum() {
const numInput = document.getElementById('number')
const evenInput = document.getElementById('even')
const oddInput = document.getElementById('odd')

const number = parseFloat(numInput.value);
const even = parseFloat(evenInput.value);
const odd = parseFloat(oddInput.value);

alert(number + even + odd)
}

function average() {
    const numInput = document.getElementById('number')
    const evenInput = document.getElementById('even')
    const oddInput = document.getElementById('odd')
    
    const number = parseFloat(numInput.value);
    const even = parseFloat(evenInput.value);
    const odd = parseFloat(oddInput.value);
    
    alert((number + even + odd)/3)
    }


