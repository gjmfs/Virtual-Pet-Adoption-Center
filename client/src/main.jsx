import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/* importing style sheets */
import "bootstrap/dist/css/bootstrap.css";
import "./styles/NavBar.css";
import "./styles/Home.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
