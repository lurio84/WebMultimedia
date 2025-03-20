import { useState } from "react";
import { createNoteWithUserId } from "../api/noteService";
import PropTypes from "prop-types";

function CreateNote({ userId }) {
  const [newNote, setNewNote] = useState("");
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateNote = async () => {
    if (!newNote.trim()) return;
    setCreating(true);
    setError(null);

    try {
      await createNoteWithUserId(userId, {
        title: newNote,
        content: "",
      });
      setNewNote("");
    } catch (err) {
      console.error("Error creando la nota:", err);
      setError(`Error creando la nota: ${err.message}`);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Escribe una nueva nota..."
      />
      <button onClick={handleCreateNote} disabled={creating}>
        {creating ? "Creando..." : "Crear Nota"}
      </button>
    </div>
  );
}

CreateNote.propTypes = {
  userId: PropTypes.string.isRequired,
  onNoteCreated: PropTypes.func.isRequired,
};

export default CreateNote;
