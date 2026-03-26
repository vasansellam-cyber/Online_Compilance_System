import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// API base URL for frontend-backend communication
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Global fetch wrap so hardcoded localhost URLs also resolve in production
const originalFetch = window.fetch.bind(window);
window.fetch = (resource, init) => {
  if (typeof resource === "string" && resource.startsWith("http://localhost:5000")) {
    resource = resource.replace("http://localhost:5000", API_BASE);
  }
  return originalFetch(resource, init);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
