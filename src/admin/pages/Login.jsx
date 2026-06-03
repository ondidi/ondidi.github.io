import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className="login-container">



      <div className="login-card">

        <h2>Bem-vindo ao Ondids</h2>

        <input
          type="email"
          placeholder="E-mail"
        />

        <input
          type="password"
          placeholder="Senha"
        />

        <p>
          Acesse o painel para gerenciar
          pedaladas, textos e publicações.
        </p>

        <button onClick={handleLogin}>
        Logar
        </button>

      </div>

      <footer className="login-footer">

        © Diógenes Pasqualini

      </footer>

    </div>
  );
}