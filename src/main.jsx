import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routes/routes.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
