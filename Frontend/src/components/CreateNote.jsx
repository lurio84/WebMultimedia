import { useState } from "react";
import { createNoteWithUserId } from "../api/noteService";
import PropTypes from "prop-types";
import "./CreateNote.css";

function CreateNote({ userId, setIsModalOpen }) {
  const [newNote, setNewNote] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateNote = async () => {
    if (!newNote.trim()) return;
    setCreating(true);
    setError(null);

    try {
      await createNoteWithUserId(userId, { title: newNote, content: "" });
      setNewNote("");
      setIsModalOpen(false); // Cierra el modal después de crear la nota
    } catch (err) {
      console.error("Error creando la nota:", err);
      setError(`Error creando la nota: ${err.message}`);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Crear Nueva Nota</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Título de la nota..."
        />
        <div className="modal-buttons">
          <button onClick={handleCreateNote} disabled={creating}>
            {creating ? "Creando..." : "Crear"}
          </button>
          <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

CreateNote.propTypes = {
  userId: PropTypes.string.isRequired,
  setIsModalOpen: PropTypes.func.isRequired, // Recibe la función para cerrar el modal
};

export default CreateNote;
