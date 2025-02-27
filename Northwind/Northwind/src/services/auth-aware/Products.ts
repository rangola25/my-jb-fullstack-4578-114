import axios from "axios";
import Product from "../../models/product/product";

class Products {
    async getProducts(): Promise<Product[]> {
        const response = await axios.get<Product[]>(`${import.meta.env.VITE_REST_SERVER_URL}/products`)
        return response.data
    }
}

const products = new Products()
export default products