import axios from "axios";
import Author from "../../models/author/Author";

class Authors {
    async getAllAuthors(): Promise<Author[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/author`)
        return response.data
    }

    async getAuthorById(authorId: string) {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/author/${authorId}`)
        return response.data
    }
}

const categoriesService = new Authors()
export default categoriesService