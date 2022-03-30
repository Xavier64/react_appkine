import React from 'react';
import{ NavLink} from "react-router-dom";
import "../styles/components/navigation.css";

const Navigation = () => {
    return (
        <nav>
            <div className='logo'><NavLink to="/accueil"> <li><img src="img/logo.png" alt="" /></li> </NavLink></div>
        <div className='navbar'>
            <ul>
            <NavLink to="/home"> <li><img src="img/Home.png" alt="" /></li> </NavLink>
            <NavLink to="/programme"> <li><img src="img/programme.png" alt="" /></li> </NavLink>
            <NavLink to="/exercices"> <li><img src="img/exercice.png" alt="" /></li> </NavLink>
            <NavLink to="/profil"> <li><img src="img/profil.png" alt="" /></li> </NavLink>
            <NavLink to="/contact"> <li><img src="img/contact.png" alt="" /></li> </NavLink>
            <NavLink to="/parametres"> <li><img src="img/parametre.png" alt="" /></li> </NavLink>
            <NavLink to="/home"> <li><img src="img/deconnexion.png" alt="" /></li> </NavLink>    
            </ul>
        </div>
        </nav>
    );
};

export default Navigation;