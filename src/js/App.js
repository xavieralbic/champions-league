import React from 'react';
import {Route,Switch} from "react-router-dom";
import Accueil from './components/Accueil.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Matches from './components/Matches.js';
import Equipes from './components/Equipes.js';
import DetailEquipe from './components/DetailEquipe.js';
import EquipeType from './components/EquipeType.js';
import './../css/App.scss';
export default function App(){
    return <div>
            <Header/>
              <Switch>
                <Route exact path="/" component={Accueil}/>
                <Route exact path="/Accueil" component={Accueil}/>
                <Route exact path="/Matches" component={Matches}/>
                <Route exact path="/Equipes" component={Equipes}/>
                <Route exact path="/EquipeType" component={EquipeType}/>
                <Route exact path="/DetailEquipe/:id" component={DetailEquipe}/>
              </Switch>
            <Footer/>
          </div>
  
}

