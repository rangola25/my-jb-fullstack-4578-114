import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookModel from '../../../models/books/Book'
import booksService from '../../../services/auth-aware/Books'
import Card from '../card/Card'

export default function SearchResults(): JSX.Element {
    const { search } = useParams()  
    const [filteredBooks, setFilteredBooks] = useState<BookModel[]>([])

    useEffect(() => {
        const fetchFilteredBooks = async () => {
            try {
                const result = await booksService.searchBooks(search || '')
                setFilteredBooks(result)  
            } catch (e) {
                alert(e)
            }
        }

        if (search) {
            fetchFilteredBooks() 
        }
    }, [search])

    return (
        <div className='SearchResults'>
            <h2>Search results for: {search}</h2>
            <div className='cards'>
                {Array.isArray(filteredBooks) && filteredBooks.length > 0 ? (
                    filteredBooks.map(b => (
                        <Card key={b.id} book={b} removeBook={() => {}} />
                    ))
                ) : (
                    <p>No books found.</p>  // אם לא נמצאו ספרים
                )}
            </div>
        </div>
    )
}
