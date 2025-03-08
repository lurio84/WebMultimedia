import { useState } from "react";
import "./AuthPage.css";

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form>
          <input type="username" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          {isRegister && (
            <input type="password" placeholder="Repeat password" required />
          )}
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>
        <p onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
