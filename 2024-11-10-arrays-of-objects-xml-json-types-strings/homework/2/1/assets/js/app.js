const books = [
    {
    bookId: 0,
    bookName: 'Harry Potter',
    bookAuthor: 'J.K. Rowlling',
    bookPrice: 200
    },
    {
    bookId: 1,
    bookName: 'Poo the bear',
    bookAuthor: 'John Do',
    bookPrice: 150
    },
    {
    bookId: 2,
    bookName: '5 balloons',
    bookAuthor: 'Meni',
    bookPrice: 100
    }
    ]
 
    const jsonString = JSON.stringify(books)
    alert(jsonString)

    console.log(books)
    console.log(jsonString)

    const items = JSON.parse(jsonString)
    console.log(books)
    console.log(items)

    for (const item of items) {
        // הצגת המידע בצורה מסודרת על הדף
        document.write(`Book ID: ${item.bookId}<br>`);
        document.write(`Book Name: ${item.bookName}<br>`);
        document.write(`Author: ${item.bookAuthor}<br>`);
        document.write(`Price: ${item.bookPrice}<br><br>`);
      }
