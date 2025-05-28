import React from "react";
import App from "./App.js";
// import {Series} from "./pages/Series/index";
import Search from "./pages/search/index.js";
import { createRoot } from "react-dom/client";
import store from "./redux/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ErrorPage from "./pages/Erropage/errorpage.js";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/search" element={<Search />} /> */}
          {/* <Route path="/series" element={<Series />} /> */}
          {/* <Route
            path="*"
            element={<ErrorPage error={{ message: "Página não encontrada" }} />}
          /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
