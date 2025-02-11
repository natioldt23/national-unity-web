import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n.js";
//import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<Snowfall 
        radius={[3.5, 6.0]}
        speed={[1.0, 3.0]}
      />*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
