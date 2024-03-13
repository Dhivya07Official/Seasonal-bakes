import axios from "axios";


export const createAxios = () => {
    // const token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    return axios.create({
        baseURL:
            process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001"
            // process.env.NEXT_PUBLIC_API_URL ?? "https://seasonal-bakes-api.onrender.com"
    });
};
export const getActivePromotion = async () => {
    try {
        const response = await createAxios().get(`/api/promotions/active`);
        return response.data;
    } catch (error) {
        console.error('Error getting Item:', error);
        throw error;
    }
};