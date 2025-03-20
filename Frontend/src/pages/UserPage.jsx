import UserDetail from "../components/UserDetail";
import UserNotes from "../components/UserNotes";
import PropTypes from "prop-types";

function UserPage({ userId }) {
  return (
    <div>
      <h1>Información del Usuario</h1>
      <UserDetail userId={userId} />
      <UserNotes userId={userId} />
    </div>
  );
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;
