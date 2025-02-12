import axios from "axios";
import Comment from "../models/comment/Comment";

class Comments {
    async getFeed(): Promise<Comment[]> {
        const response = await axios.get<Comment[]>(`${import.meta.env.VITE_REST_SERVER_URL}/comments`)
        return response.data
    }
}

// singleton
const comments = new Comments()
export default comments