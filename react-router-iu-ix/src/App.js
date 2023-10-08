import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'; // Asegúrate de tener un componente Navbar
import Home from './components/Home';
import DataList from './components/DataList';
import DataDetails from './components/DataDetails';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Esto es un componente de navegación, asegúrate de crearlo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lista" element={<DataList />} />
          <Route path="/detalles/:id" element={<DataDetails />} />
          <Route path="/acerca" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
