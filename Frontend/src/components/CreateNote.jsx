import { useState } from "react";
import { createNoteWithUserId } from "../api/noteService";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./CreateNote.css";

function CreateNote({ userId, setIsModalOpen }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  const handleCreateNote = async () => {
    if (!noteTitle.trim()) return;
    setCreating(true);

    try {
      const createdNote = await createNoteWithUserId(userId, {
        title: noteTitle,
        content: "",
      });

      setNoteTitle("");
      setIsModalOpen(false); // Opcional, ya que vas a redirigir

      // Redirige a la vista de edición
      navigate(`/note/${createdNote.id}`);
    } catch (err) {
      console.error("Error creando la nota:", err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create New Note</h3>
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Note title..."
        />
        <div className="modal-buttons">
          <button onClick={handleCreateNote} disabled={creating}>
            {creating ? "Creating..." : "Create"}
          </button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
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
