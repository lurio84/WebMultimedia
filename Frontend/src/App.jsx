import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import { logoutUser } from "./services/authService";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") !== null
  );

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
            <Link to="/">Start</Link> | <Link to="/user/1">See user 1</Link> |
            <button onClick={handleLogout}>Logout</button>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Welcome</h1>} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
