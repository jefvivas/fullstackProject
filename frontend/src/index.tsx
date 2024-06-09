import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClientProvider } from "./Context/Clients";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ClientProvider>
    <App />
  </ClientProvider>
);
