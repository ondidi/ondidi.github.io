export default function AdminHeader() {

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

      </div>

    </div>

  );

}