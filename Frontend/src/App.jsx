import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import UserPage from "./pages/UserPage";
import AuthPage from "./pages/AuthPage";
import { useState, useEffect } from "react";
import { logoutUser } from "./services/authService";
import EditNotePage from "./pages/EditNotePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUserId(storedUser.id);
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <div className="app-container">
      {isAuthenticated && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to={`/user/${userId}`} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Navigate to={`/user/${userId}`} />
            ) : (
              <AuthPage
                onAuthSuccess={() => {
                  const user = JSON.parse(localStorage.getItem("user"));
                  setIsAuthenticated(true);
                  setUserId(user?.id);
                }}
              />
            )
          }
        />
        <Route
          path="/user/:id"
          element={
            isAuthenticated ? (
              <UserPage userId={userId} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/note/:noteId"
          element={isAuthenticated ? <EditNotePage /> : <Navigate to="/home" />}
        />
      </Routes>
    </div>
  );
}

export default App;
