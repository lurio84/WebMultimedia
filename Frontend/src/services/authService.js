const API_URL = "http://localhost:8080/users";

export const registerUser = async (username, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(await response.text()); // Captura errores del backend
  }
  return await response.json(); // Devuelve el usuario registrado
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(await response.text()); // Captura errores del backend
  }
  return await response.json(); // Devuelve el usuario autenticado
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
