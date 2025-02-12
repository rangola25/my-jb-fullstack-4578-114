const showFactor = (event) => {
    event.preventDefault()
    const grade = document.getElementById('grade').value
    try{
        const factor = getVat(grade)
        console.log(`the new grade for ${grade} is ${factor}`)
    } catch(e) {
        alert(e.message)
    }  
}

const getVat = (grade) => {
    if(!grade) throw new Error('grade is required')
    if(grade > 100) throw new Error('grade must be a up to 100')
    if(grade < 0) throw new Error('grade must be a positive number')
    return 10 * Math.sqrt(grade)
}