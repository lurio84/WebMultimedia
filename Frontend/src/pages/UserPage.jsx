import CreateNote from "../components/CreateNote";
import UserDetail from "../components/UserDetail";
import UserNotes from "../components/UserNotes";
import { useState } from "react";
import PropTypes from "prop-types";

function UserPage({ userId }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  return (
    <div>
      <UserDetail userId={userId} />

      {/* Botón para abrir el modal */}
      <button onClick={() => setIsModalOpen(true)}>Nueva Nota</button>

      {/* Renderiza el modal solo si isModalOpen es true */}
      {isModalOpen && (
        <CreateNote userId={userId} setIsModalOpen={setIsModalOpen} />
      )}

      <UserNotes userId={userId} />
    </div>
  );
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
