import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";

export default function AdminHeader() {
    const navigate = useNavigate();

  async function sair() {

    await supabase.auth.signOut();

    navigate("/admin");

  }

  return (

    <div className="admin-header">

      <h1>Portal Ondids</h1>

      <div className="admin-header-actions">

        <div className="admin-notification">

          <img
            src="/img/icons/alert.svg"
            alt="Notificações"
          />

          <span>3</span>

        </div>

        <img
          src="/img/blog/didifotocircular.webp"
          alt="Administrador"
          className="admin-avatar"
        />
        <img
          src="/img/icons/deslogar.svg"
          alt="Sair"
          title="Sair"
          className="logout-icon"
          onClick={sair}
        />

      </div>

    </div>

  );

}