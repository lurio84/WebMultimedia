import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userService";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(`Usuario no encontrado. Detalles: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>
        <strong>Nombre:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default UserDetail;
