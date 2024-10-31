import react from "react";
import reactDOM from "react-dom/client";

import App from "./App";

// Adding global styles
//import "./styles/App.css";
//import fpont awesome

import "./styles/bootstrap.min.css";
import "./styles/style.css";
import "./styles/MeanMenu.css";

const el = document.getElementById("root");

const root = reactDOM.createRoot(el);

root.render(<App />);
