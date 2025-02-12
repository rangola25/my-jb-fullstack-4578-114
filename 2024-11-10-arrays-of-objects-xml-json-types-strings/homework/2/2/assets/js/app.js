const myCat = [
    {
    name: 'Maverick',
    age: 4,
    color: 'white',
    isSterile: 'yes'
    },
    ]
 
    const jsonString = JSON.stringify(myCat)
    alert(jsonString)

    console.log(myCat)
    console.log(jsonString)

    const yourCat = JSON.parse(jsonString)
    console.log(myCat)
    console.log(yourCat)

    for (const his of yourCat) {
        document.write(`Name: ${his.name}<br>`);
        document.write(`Age: ${his.age}<br>`);
        document.write(`Color: ${his.color}<br>`);
        document.write(`Is Sterile: ${his.isSterile}<br><br>`);
      }
