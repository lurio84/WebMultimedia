import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
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
          <nav>
            <Link to="/">Start</Link> |{" "}
            <Link to={`/user/${userId}`}>See my profile</Link> |
            <button onClick={handleLogout}>Logout</button>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Welcome</h1>} />
            <Route path="/user/:id" element={<UserPage userId={userId} />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
