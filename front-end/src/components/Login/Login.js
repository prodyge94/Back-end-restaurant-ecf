import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShow(true);
      return;
    }
    const res = await axios.post("/login", {
      email,
      password,
    });
    if (res.data === "Email or password is incorrect.") {
      setShow(true);
      return;
    }
    console.log(res.data);
    if (res.data === "Connecté avec succès.") {
      localStorage.setItem("loginMessage", res.data);
    }
    if (res.data === "Connecté en tant qu'administrateur.") {
      localStorage.setItem("adminMessage", res.data);
    }
    window.location.replace("/");
  };

  return (
    <div className="login-page">
      <h2>Se connecter</h2>
      <div className="login-form">
        {show && (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            email or password is incorrect
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>

          <label>
            mot de passe :
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
