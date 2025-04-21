import React, { useState } from "react";
import "../App.css"; // Caminho corrigido

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "eduardo.lino@pucpr.br" && password === "123456") {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Acessar
        </button>

        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
