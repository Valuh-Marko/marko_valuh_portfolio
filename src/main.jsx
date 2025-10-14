import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { ScrollProvider } from "./context/ScrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ScrollProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ScrollProvider>
    </HelmetProvider>
  </StrictMode>
);
