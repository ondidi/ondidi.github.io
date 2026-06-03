import AdminSidebar from "../components/AdminSidebar";
import MetricCard from "../components/MetricCard";
import "../styles/Dashboard.css";
import AdminHeader from "../components/AdminHeader";
import "../components/AdminHeader.css";


export default function Dashboard() {

const metrics = [

  {
    icon: "/img/icons/pedaladas1.svg",
    title: "Pedaladas",
    value: 27,
    growth: "+2 este mês"
  },

  {
    icon: "/img/icons/textos.svg",
    title: "Textos publicados",
    value: 7,
    growth: "+2 este mês"
  },

  {
    icon: "/img/icons/visualizacoes.svg",
    title: "Visualizações",
    value: 160,
    growth: "+8 este mês"
  },

  {
    icon: "/img/icons/inscrito.svg",
    title: "Inscritos",
    value: 270,
    growth: "+22 este mês"
  },

  {
    icon: "/img/icons/calendario.svg",
    title: "Semana",
    value: 160,
    growth: "+8 este mês"
  },

  {
    icon: "/img/icons/visitante.svg",
    title: "Visitantes",
    value: 160,
    growth: "+8 este mês"
  }

  ];

  return (

    <div style={{ display: "flex" }}>

      <AdminSidebar />

      <div
        style={{
          padding: "40px",
          width: "100%"
        }}
      >

        <AdminHeader />

        <div className="dashboard-grid">

          {metrics.map((item) => (

            <MetricCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              growth={item.growth}
            />

          ))}

        </div>

      </div>

    </div>

  );
}