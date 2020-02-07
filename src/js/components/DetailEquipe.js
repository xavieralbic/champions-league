import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./../../css/DetailEquipe.scss";

export default function DetailEquipe(props){
     const headers={"X-Auth-Token":"4c03fc555bf3421c9c638b7c4afd225d"};
     const [equipe, setEquipe]=useState([]);
     const [pays, setPays]=useState([]);
     const[joueur,setJoueur]=useState([]);
     const equipeFromUrl=props.match.params.id;
        
     useEffect(() => { axios.get("https://api.football-data.org/v2/teams/"+equipeFromUrl,{headers}).then(response => {
             setEquipe(response.data);
             setPays(response.data.area);
             setJoueur(response.data.squad);
             console.log(response.data)
          });
      }, []);

      return <main className="mainDetailEquipe">
         <h1>{equipe.name} <img src={equipe.crestUrl} height="90px"/></h1>
         <p>Founded in: {equipe.founded}</p>
         <p>Shortname: {equipe.shortName}</p>
         <p>Country: {pays.name}</p>
         <p>Stadium: {equipe.venue}</p>
         <p>Official website: <a href={equipe.website} target="blank">{equipe.website}</a></p>
         <table>
            <thead>
               <tr>
                  <th>
                     Position
                  </th>
                  <th>
                     Name
                  </th>
               </tr>
            </thead>
               <tbody>
               {joueur.map(function(joueur){
                  if(joueur.position!=null){
                    return (
                         <tr key={joueur.id}>
                              <td>{joueur.position}</td>
                              <td>{joueur.name}</td>
                         </tr>
                    )
               }
               else{
                  return (
                     <tr key={joueur.id}>
                          <td>{joueur.role}</td>
                          <td>{joueur.name}</td>
                     </tr>
                )
               }}
               )}
            
            </tbody>
         </table>
      </main>
   }