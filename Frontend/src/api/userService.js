import apiClient from "./apiClient";

export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuario", error);
    throw error;
  }
};
