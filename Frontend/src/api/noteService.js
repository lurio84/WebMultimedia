import apiClient from "./apiClient";

export const getNotesByUserId = async (userId) => {
    try {
        const response = await apiClient.get(`/notes/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo notas", error);
        throw error;
    }
}