import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase";

export default function ProtectedRoute({ children }) {

  const [loading, setLoading] =
    useState(true);

  const [session, setSession] =
    useState(null);

  useEffect(() => {

    async function verificar() {

      const {
        data: { session }
      } = await supabase.auth.getSession();

      setSession(session);
      setLoading(false);

    }

    verificar();

  }, []);

  if (loading) {

    return <h2>Verificando acesso...</h2>;

  }

  if (!session) {

    return <Navigate to="/admin" />;

  }

  return children;

}