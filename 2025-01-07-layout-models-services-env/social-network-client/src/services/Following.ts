import axios from "axios";
import User from "../models/user/User";

class Following {
    async getProfile(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/allow/follows/following`)
        return response.data
    }
}

// singleton
const following = new Following()
export default following