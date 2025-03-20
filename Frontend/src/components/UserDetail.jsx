import { useState, useEffect } from "react";
import { getUserById } from "../api/userService";
import PropTypes from "prop-types";

function UserDetail({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
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
  }, [userId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p>
        <strong>Nombre:</strong> {user.username}
      </p>
    </div>
  );
}

UserDetail.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserDetail;
