import CreateNote from "../components/CreateNote";
import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getUserById } from "../api/userService";
import { getNotesByUserId } from "../api/noteService";
import { useNavigate } from "react-router-dom";
import "./UserPage.css";

function UserPage({ userId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotesByUserId(userId);
        setNotes(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNotes();
  }, [userId]);

  return (
    <div className="user-page">
      {/* Nombre del usuario arriba a la izquierda */}
      <header className="user-header">
        {user ? <h3>{user.username}</h3> : <h3>Loading username...</h3>}
      </header>

      {/* Notas al centro */}
      <main className="user-main">
        {notes.map((note) => (
          <div
            className="note-card"
            key={note.id}
            onClick={() => navigate(`/note/${note.id}`)}
            style={{ cursor: "pointer" }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </main>

      {/* Botón flotante abajo a la derecha */}
      <button
        className="create-note-fab"
        onClick={() => setIsModalOpen(true)}
        title="Nueva Nota"
      >
        +
      </button>

      {/* Modal */}
      {isModalOpen && (
        <CreateNote userId={userId} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
