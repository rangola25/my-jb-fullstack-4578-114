import Like from "../../models/like/Like";
import Vacation from "../../models/vacation/Vacation";
import AuthAware from "./AuthAware";

export default class User extends AuthAware {
    async getAllVacations(): Promise<Vacation[]> {
        const response = await this.axiosInstance.get<Vacation[]>(`${import.meta.env.VITE_REST_SERVER_URL}/vacations`)
        return response.data
    }

    async getAllLikes(): Promise<Like[]> {
        const response = await this.axiosInstance.get<Like[]>(`${import.meta.env.VITE_REST_SERVER_URL}/likes`)
        return response.data
    }

    async getAllFollows(): Promise<Like[]> {
        const response = await this.axiosInstance.get<Like[]>(`${import.meta.env.VITE_REST_SERVER_URL}/likes/allFollows`)
        return response.data
    }
    
    async addLike(userId: string, vacationId: string): Promise<boolean> {
        const like = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/likes/like/${vacationId}`, { userId })
        return like.data
    }

    async unlike(userId: string, vacationId: string): Promise<boolean> {
        const unlike = await this.axiosInstance.post<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/likes/unlike/${vacationId}`, { userId })
        return unlike.data
    }
}