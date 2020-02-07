import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function DetailEquipe(props){
    const [lA,setLA]=useState("");
    const[st, setSt]=useState("");
    const[rA,setRA]=useState("");
    const[mF1,setMF1]=useState("");
    const[mF2,setMF2]=useState("");
    const[mF3,setMF3]=useState("");
    const[lD,setLD]=useState("");
    const[d1,setD1]=useState("");
    const[d2,setD2]=useState("");
    const[rD,setRD]=useState("");
    const[gK,setGK]=useState("");
   

    useEffect(() => { axios.get("https://test.corentindesfarges.fr/players/79").then(response => {
             setLA(response.data.leftAttacker);
             setSt(response.data.striker);
             setRA(response.data.rightAttacker);
             setMF1(response.data.midFielder1);
             setMF2(response.data.midFielder2);
             setMF3(response.data.midFielder3);
             setLD(response.data.leftDefander);
             setD1(response.data.defander1);
             setD2(response.data.defander2);
             setRD(response.data.rightDefander);
             setGK(response.data.goalKeeper);
          });
      }, []);

    

      return <div>
          <p>{props.text}</p>
          <h2>My team :</h2>
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Player</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Left attacker</td>
                    <td>
                        {lA}
                    </td>
                </tr>
                <tr>
                    <td>Striker</td>
                    <td>
                        {st}
                    </td>
                </tr>
                <tr>
                    <td>Right attacker</td>
                    <td>
                        {rA}
                    </td>
                </tr>
                <tr>
                    <td>MidFielder</td>
                    <td>
                        {mF1}
                    </td>
                </tr>
                <tr>
                    <td>MidFielder</td>
                    <td>
                        {mF2}
                    </td>
                </tr>
                <tr>
                    <td>MidFielder</td>
                    <td>
                        {mF3}
                    </td>
                </tr>
                <tr>
                    <td>Left defander</td>
                    <td>
                        {lD}
                    </td>
                </tr>
                <tr>
                    <td>Defander</td>
                    <td>
                        {d1}
                    </td>
                </tr>
                <tr>
                    <td>Defander</td>
                    <td>
                        {d2}
                    </td>
                </tr>
                <tr>
                    <td>Right defander</td>
                    <td>
                        {rD}
                    </td>
                </tr>
                <tr>
                    <td>GoalKeeper</td>
                    <td>
                        {gK}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>


}