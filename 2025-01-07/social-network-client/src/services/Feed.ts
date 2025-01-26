import axios from "axios";
import Post from "../models/post/Post";

class Feed {
    async getProfile(): Promise<Post[]> {
        const response = await axios.get<Post[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/feed`)
        return response.data
    }
}

// singleton
const feed = new Feed()
export default feed