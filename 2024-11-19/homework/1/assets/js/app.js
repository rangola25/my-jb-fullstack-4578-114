function addIngredient() {
    const container = document.getElementById('container')
    let ingredientInput = document.getElementById('ingredient')
    let amountInput = document.getElementById('amount')
    const ingredient = ingredientInput.value
    const amount = amountInput.value
    if(!ingredient) {
    alert(`You have to add an ingredient`)
    ingredientInput.style.background = 'pink'
    } else if(!amount || amount < 0) {
    alert(`You have to add an amount`)
    amountInput.style.background = 'pink'
    }else if(amount > 0) {
    const newHtml = `<li>Ingredient: ${ingredient}, Amount: ${amount}</li>`
    container.innerHTML += newHtml
    }
}

