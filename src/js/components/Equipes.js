import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import "./../../css/Equipes.scss"

export default function Equipes(){
     const headers={"X-Auth-Token":"4c03fc555bf3421c9c638b7c4afd225d"};
     const [equipe, setEquipe]=useState([]);
     
     useEffect(() => { axios.get("https://api.football-data.org/v2/competitions/CL/teams",{headers}).then(response => {
             setEquipe(response.data.teams);
             console.log(response.data)
          });
      }, []);
     
     return <main className=' mainEquipes'><h1>List of clubs which are playing the Champions League:</h1>
          <table>
               <tbody>
               {equipe.map(function(equipe){
                    const id=equipe.id;
                    return (
                         
                         <tr key={equipe.id}>
                              <td>
                              <NavLink to={"/DetailEquipe/"+id}>{equipe.name}</NavLink>
                              </td>
                         </tr>
                    )
               })}
               </tbody>
          </table>
     </main>
}