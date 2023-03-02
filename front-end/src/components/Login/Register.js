import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "./Login.css";

const Register = () => {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !telephone || !password) {
      setShow(true);
      return;
    }
    const res = await axios.post("http://localhost:8800/register", {
      firstName,
      lastName,
      email,
      telephone,
      password,
    });
    console.log(res.data);
    if (res.data === "User registered successfully!") {
      localStorage.setItem("registrationMessage", res.data);
    }
    window.location.replace("/");
  };

  return (
    <div className="login-page">
      <h2>S'inscrire</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          {show && (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              Tous les champs sont obligatoires
            </Alert>
          )}
          <label>
            Prénom :
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </label>
          <label>
            Nom :
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>
          <label>
            {" "}
            Telephone :
            <input
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Telephone"
            />
          </label>
          <label>
            Mot de passe :
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

export default Register;
