import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Exercices from './pages/Exercices';
import Parametres from './pages/Parametres';
import Profil from './pages/Profil';
import Programme from './pages/Programme';

// Recuperation des données de l'application symfony sans passé par heroku (pour l'instant)!!
// async componentDidMount(){
//   const response = await fetch ("http://127.0.0.1:8000/main");
//   const datas = await response.json();
// }


const App = ()=> {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
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
