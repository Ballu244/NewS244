import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import Footer from "./Pages/Footer.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Navbar from "./Pages/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <App />
    
  </StrictMode>
);
