import React ,{useEffect,useState} from 'react';
import axios from "axios";
import './../../css/Matches.scss';


export default function Groupes(){
     const headers={"X-Auth-Token":"4c03fc555bf3421c9c638b7c4afd225d"};
     var [match,setMatch]=useState([]);

     useEffect(() => { axios.get("https://api.football-data.org/v2/competitions/CL/matches/",{headers}).then(response => {
          setMatch(response.data.matches);
       });
     }, []);

     match=match.splice(91,112);//on enlève les tours préliminaires 
     return <main className='mainGroupe'><h1>Matches page</h1>
          <table>
               <thead> 
                    <tr>
                         <th>Date and hour</th>
                         <th>Stage</th>
                         <th>Home team</th>
                         <th>Away team</th>
                         <th>Score</th>
                    </tr>
               </thead>
               <tbody>
               {match.map(function(match){
                    const id=match.id;
                    return (
                        
                         <tr key={match.id}>
                              <td>
                                    {match.utcDate} 
                              </td>
                              <td>
                                   {match.stage}
                              </td>
                              <td>
                                   {match.homeTeam.name}
                              </td>
                              <td>
                                   {match.awayTeam.name}
                              </td>
                              <td>
                                   {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}
                              </td>
                         </tr>
                    )
               })}
               </tbody>
          </table>
     
     
     </main>


}

