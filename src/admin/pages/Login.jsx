import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../services/supabase";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {

    const { error } =
      await supabase.auth
        .signInWithPassword({

          email,
          password

        });

    if (error) {

      alert(
        "Usuário ou senha inválidos"
      );

      return;

    }

    navigate(
      "/admin/dashboard"
    );

  }

  return (

    <div className="login-container">

      <div className="login-card">

        <h2>
          Bem-vindo ao Ondids
        </h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <p>

          Acesse o painel para
          gerenciar pedaladas,
          textos e publicações.

        </p>

        <button
          onClick={handleLogin}
        >

          Logar

        </button>

      </div>

      <footer
        className="login-footer"
      >

        © Diógenes Pasqualini

      </footer>

    </div>

  );

}