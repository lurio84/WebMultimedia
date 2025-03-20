import { useState, useEffect } from "react";
import { getNotesByUserId } from "../api/noteService";
import PropTypes from "prop-types";

function UserNotes({ userId }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotesByUserId(userId);
        setNotes(data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(`Error obteniendo notas. Detalles: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [userId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Notas del Usuario</h2>
      <p>
        <strong>Notas:</strong>{" "}
        {notes.map((note) => (
          <p key={note.id}>{note.content}</p>
        ))}
      </p>
    </div>
  );
}
UserNotes.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserNotes;
