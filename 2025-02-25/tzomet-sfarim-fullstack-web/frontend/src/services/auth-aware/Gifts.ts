import axios from "axios";
import Present from "../../models/present/Present";
import Draft from "../../models/present/Draft";

class Gifts {
    async getAllGifts(): Promise<Present[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/gifts`)
        return response.data
    }

    async getGifts(type: string): Promise<Present[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${type}`)
        return response.data
    }

    async new(draft: Draft): Promise<Present> {
        const response = await axios.post<Present>(`${import.meta.env.VITE_REST_SERVER_URL}/new`, draft)
        return response.data
    }

    async remove(code: string): Promise<boolean> {
        const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${code}`)
        const isDeleted = response.data
        return isDeleted
    }
}

const giftsService = new Gifts()
export default giftsService