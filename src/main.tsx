import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Erropage/index.tsx";
import { Provider } from "react-redux";
import "./styles/global.css";
import { lazy } from "react";
import { Suspense } from "react";
import { OrbitProgress } from "react-loading-indicators";

/// <reference types="vite/client" />

const ReleasesPage = lazy(() => import("./pages/Releases/index.tsx"));
const SeriesPage = lazy(() => import("./pages/Series/index.tsx"));
const AnimePage = lazy(() => import("./pages/animes/index.tsx"));
const DetailsPage = lazy(() => import("./pages/Details/index.tsx"));
const MoviesPage = lazy(() => import("./pages/Movies/index.tsx"));

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Suspense
          fallback={
            <OrbitProgress
              variant="track-disc"
              color="#198de0"
              size="medium"
              textColor=""
            />
          }
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Releases" element={<ReleasesPage />} />
            <Route path="/Series" element={<SeriesPage />} />
            <Route path="/Animes" element={<AnimePage />} />
            <Route path="/details/:name" element={<DetailsPage />} />
            <Route path="/Movies" element={<MoviesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </React.StrictMode>
  </Provider>,
);
