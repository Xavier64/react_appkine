import React from 'react';
import{ NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
            <NavLink to="/accueil"> <li><img src="../assets/img/logo.png" alt="" /></li> </NavLink>
            <NavLink to="/accueil"> <li><img src="../assets/img/Home.png" alt="" /></li> </NavLink>
            <NavLink to="/programme"> <li><img src="../assets/img/programme.png" alt="" /></li> </NavLink>
            <NavLink to="/exercices"> <li><img src="../assets/img/exercice.png" alt="" /></li> </NavLink>
            <NavLink to="/profil"> <li><img src="../assets/img/profil.png" alt="" /></li> </NavLink>
            <NavLink to="/contact"> <li><img src="../assets/img/contact.png" alt="" /></li> </NavLink>
            <NavLink to="/contact"> <li><img src="../assets/img/parametre.png" alt="" /></li> </NavLink>
            <NavLink to="/accueil"> <li><img src="../assets/img/deconnexion.png" alt="" /></li> </NavLink>
               
            </ul>
        </div>
    );
};

export default Navigation;