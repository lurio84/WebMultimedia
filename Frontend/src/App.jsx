import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {!isAuthenticated ? (
        <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <>
          <nav>
            <Link to="/">Inicio</Link> | <Link to="/user/1">Ver Usuario 1</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Bienvenido</h1>} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
