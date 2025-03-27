import apiClient from "./apiClient";

export const getNotesByUserId = async (userId) => {
  try {
    const response = await apiClient.get(`/notes/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo notas", error);
    throw error;
  }
};

export const createNoteWithUserId = async (userId, note) => {
  try {
    const response = await apiClient.post(`/notes/user/${userId}`, note);
    return response.data;
  } catch (error) {
    console.error("Error creando nota", error);
    throw error;
  }
};

export const getNoteById = async (noteId) => {
  try {
    const response = await apiClient.get(`/notes/${noteId}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo nota", error);
    throw error;
  }
};

export const updateNoteById = async (noteId, updatedNote) => {
  try {
    const response = await apiClient.put(`/notes/${noteId}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error actualizando nota", error);
    throw error;
  }
};
