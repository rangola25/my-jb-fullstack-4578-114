document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    const myInput = document.getElementById('myInput') as HTMLInputElement
    const result = myInput.value
})

function test () {
    type Human = {
        name: string | undefined,
        middleName?: string,
        familyName: string,
        age: number,
        birthdate: Date
    }

    type Animal = {
        type: string,
        eat: Function
    }

    const toy: Animal = {
        type: 'yorkshare'
        eat: () => {console.log('eating Bonzo')}
    }

    const yossi: Human = toy as unknown as Human
}