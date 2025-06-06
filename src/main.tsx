import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Erropage/index.tsx";
import { Provider } from "react-redux";
import "./index.css";
import "./global.css";
import Series from "./pages/Series/index.tsx";
import Releases from "./pages/Releases/index.tsx";
import Anime from "./pages/animes/index.tsx";
import Details from "./pages/Details/index.tsx";
import Movies from "./pages/Movies/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Releases" element={<Releases />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Animes" element={<Anime />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
