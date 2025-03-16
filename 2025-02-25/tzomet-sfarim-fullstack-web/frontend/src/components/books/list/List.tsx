import './List.css'
import { ChangeEvent, useEffect, useState } from 'react'
import BookModel from '../../../models/books/Book'
import booksService from '../../../services/auth-aware/Books'
import Card from '../card/Card'

export default function List(): JSX.Element {

    const [books, setBooks] = useState<BookModel[]>([])  // כל הספרים
    const [search, setSearch] = useState<string>('')  // מחרוזת החיפוש
    const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([]) 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const allBooks = await booksService.getAllBooks()
                setBooks(allBooks)
                setFilteredBooks(allBooks)
            } catch (e) {
                alert(e)
            }
        }

        fetchCategories()
    }, [])

    function handleSearch() {
        if (search.trim() === '') {
            setFilteredBooks(books)  
        } else {
            booksService.searchBooks(search).then((result) => {
                setFilteredBooks(result)  
            }).catch((e) => {
                alert(e)
            })
        }
    }

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)  
    }

    function removeBook(id: string) {
        setBooks(books.filter(b => b.id !== id))
        setFilteredBooks(filteredBooks.filter(b => b.id !== id))
    }

    return (
        <div className='List'>
            <input
                type='text'
                className='searchInput'
                placeholder='Search for books...'
                value={search}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearch} className='searchButton'>Search</button>

            <div className='cards'>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(b => (
                        <Card key={b.id} book={b} removeBook={removeBook}/>
                    ))
                ) : (
                    <p>No books found.</p>  
                )}
            </div>
        </div>
    )
}
