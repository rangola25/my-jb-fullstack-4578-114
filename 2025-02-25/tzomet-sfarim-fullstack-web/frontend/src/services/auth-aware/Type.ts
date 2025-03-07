import axios from "axios";
import Type from "../../models/type/Type";

class Types {
    async getAllTypes(): Promise<Type[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/type`)
        return response.data
    }
}

const categoriesService = new Types()
export default categoriesService