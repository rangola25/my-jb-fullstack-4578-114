import axios from "axios";
import Furniture from "../../models/furniture/Furniture";
import FurnitureDraft from "../../models/furniture/FurnitureDraft";

class Furnitures {
    async getFurniture(): Promise<Furniture[]> {
        const response = await axios.get<Furniture[]>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture`)
        return response.data
    }

    async create(draft: FurnitureDraft): Promise<Furniture> {
        const response = await axios.post<Furniture>(`${import.meta.env.VITE_REST_SERVER_URL}/furniture/new`, draft)
        return response.data
    }
}

const furnituresService = new Furnitures()
export default furnituresService