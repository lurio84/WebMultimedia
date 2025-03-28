import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNoteById, updateNoteById } from "../api/noteService";
import { useNavigate } from "react-router-dom";
import "./EditNotePage.css";

function EditNotePage() {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const data = await getNoteById(noteId);
      setNote(data);
    };
    fetchNote();
  }, [noteId]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await updateNoteById(noteId, note);
    alert("Nota actualizada");
  };

  if (!note) return <p>Cargando...</p>;

  return (
    <div className="edit-note-page">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea name="content" value={note.content} onChange={handleChange} />
      <div className="edit-note-buttons">
        <button
          className="action-button"
          onClick={() => navigate(`/user/${note.userId}`)}
        >
          ← Volver
        </button>
        <button className="action-button" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  );
}

export default EditNotePage;
