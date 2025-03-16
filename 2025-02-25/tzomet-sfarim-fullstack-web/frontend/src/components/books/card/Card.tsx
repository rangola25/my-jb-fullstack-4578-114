import { useEffect, useState } from 'react'
import Book from '../../../models/books/Book'
import booksService from '../../../services/auth-aware/Books'
import './Card.css'
import categoriesService from '../../../services/auth-aware/Author'

interface PresentProps {
    book: Book
    removeBook(code: string): void
}

export default function Card(props: PresentProps): JSX.Element {

    const {
        id,
        name,
        amountOfPages,
        price,
        authorId
    } = props.book

    const [author, setAuthor] = useState<{ firstName: string; lastName: string } | null>(null)

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const authorData = await categoriesService.getAuthorById(authorId)
                setAuthor(authorData)
            } catch (e) {
                alert(e)
            }
        }

        fetchAuthor()
    }, [authorId])

    async function deleteMe() {
        try {
            await booksService.remove(id)
            props.removeBook(id)
        } catch (e) {
            alert(e)
        }
    }

       const fullName = author ? `${author.firstName} ${author.lastName}` : 'Unknown Author'

    return (
        <div className="book">
            <h3>{name}</h3>
            <p>Author: {fullName}</p>
            <p>Amount of pages: {amountOfPages}</p>
            <p>Price: ${price}</p>
            <div className='delete'>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>
    );
}