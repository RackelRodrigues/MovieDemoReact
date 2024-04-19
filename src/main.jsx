import React from 'react'
import App from './App.jsx'
import Series from './pages/Series/Series.jsx'
import Search from './pages/search/search.jsx';
import { createRoot } from 'react-dom/client';
import store from './redux/store.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/Erropage.jsx/errorpage.jsx';
import { Provider } from 'react-redux';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<ErrorPage error={{ message: 'Página não encontrada' }} />} />
       
         
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
