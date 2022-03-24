import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Exercices from './pages/Exercices';
import Parametres from './pages/Parametres';
import Profil from './pages/Profil';
import Programme from './pages/Programme';


const App = ()=> {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/accueil" element={<Accueil />} />
    <Route path="/programme" element={<Programme />} />
    <Route path="/exercices" element={<Exercices />} />
    <Route path="/profil" element={<Profil />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/parametres" element={<Parametres />} />

  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
