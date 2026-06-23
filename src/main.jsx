import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/styles/Index.css";
import { HelmetProvider } from "react-helmet-async";

/* GITHUB PAGES REDIRECT */

const redirect =
  sessionStorage.redirect;

if (redirect) {

  delete sessionStorage.redirect;

  window.history.replaceState(
    null,
    null,
    redirect
  );

}

/* ===================== */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);