import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFutbol,faUsers,faHeart } from '@fortawesome/free-solid-svg-icons'
import './../../css/Header.scss';
export default function Header(){
    return <header>
      <nav>
          <ul>
            <li><NavLink to="/Accueil"><img src="/images/logoCL.png" height="50px"/></NavLink></li>
            <li><NavLink to="/Accueil"  activeClassName='active'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</NavLink></li>
            <li><NavLink to="/Matches" activeClassName='active'> <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Matches </NavLink></li>
            <li><NavLink to="/Equipes" activeClassName='active'> <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Teams </NavLink></li>
            <li><NavLink to="/EquipeType" activeClassName='active'> <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Favorite team </NavLink></li>
          </ul>
        </nav>
      </header>

    }
