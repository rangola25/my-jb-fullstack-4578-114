import Draft from "../../models/vacation/Draft";
import Vacation from "../../models/vacation/Vacation";
import AuthAware from "./AuthAware";

export default class Admin extends AuthAware {
    async getVacation(id: string): Promise<Vacation> {
        const response = await this.axiosInstance.get<Vacation>(`${import.meta.env.VITE_REST_SERVER_URL}/admin/edit/${id}`)
        return response.data
    }

    async removeVacation(id: string): Promise<boolean> {
        const response = await this.axiosInstance.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/admin/${id}`)
        return response.data
    }

    async createVacation(draft: Draft): Promise<Vacation> {
        const response = await this.axiosInstance.post<Vacation>(`${import.meta.env.VITE_REST_SERVER_URL}/admin/new`, draft)
        return response.data
    }

    async updateVacation(id: string, draft: Draft): Promise<Vacation> {
        const { description, destination, startDate, endDate, price, file } = draft
        const response = await this.axiosInstance.patch<Vacation>(`${import.meta.env.VITE_REST_SERVER_URL}/admin/edit/${id}`, { description, destination, startDate, endDate, price, file })
        return response.data
    }
}