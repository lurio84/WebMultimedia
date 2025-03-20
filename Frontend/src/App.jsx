import "./App.css";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import { logoutUser } from "./services/authService";

function App() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [isAuthenticated, setIsAuthenticated] = useState(storedUser !== null);
  const userId = storedUser?.id;

  const handleLogout = () => {
    logoutUser();
    setIsAuthenticated(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <div className="app-container">
          <button onClick={handleLogout}>Logout</button>
          <UserPage userId={userId} />
        </div>
      )}
    </div>
  );
}

export default App;
