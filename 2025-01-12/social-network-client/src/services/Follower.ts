import axios from "axios";
import User from "../models/user/User";

class Follower {
    async getProfile(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`)
        return response.data
    }

}

// singleton
const follower = new Follower()
export default follower