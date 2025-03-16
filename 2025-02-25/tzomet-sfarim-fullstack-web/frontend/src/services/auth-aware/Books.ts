import axios from "axios";
import Draft from "../../models/books/Draft";
import Book from "../../models/books/Book";

class Books {
    async getAllBooks(): Promise<Book[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/books`)
        return response.data
    }

    // async getGifts(author: string): Promise<Book[]> {
    //     const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/books/${author}`)
    //     return response.data
    // }

    async new(draft: Draft): Promise<Book> {
        const response = await axios.post<Book>(`${import.meta.env.VITE_REST_SERVER_URL}/books/new`, draft)
        return response.data
    }

    async remove(id: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/books/${id}`)
        const isDeleted = response.data
        return isDeleted
    }

    async searchBooks(search: string): Promise<Book[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/books/${search}`)
        return response.data
    }
}

const booksService = new Books()
export default booksService