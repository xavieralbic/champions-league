import React, {useState, useEffect } from 'react';
import axios from 'axios';
import "./../../css/EquipeType.scss";
import InputPlayer from "./InputPlayer";
import TableEquipeType from "./TableEquipeType"


export default function EquipeType (props){
     const [val, setVal]=useState('')
     const [valueLA, setValueLA] = useState(""); 
     const lAChange=(event)=>{
        setValueLA(event.target.typeText);
     }
     const [valueSt, setValueSt] = useState(""); 
     const sTChange=(event)=>{
          setValueSt(event.target.value);
     }
     const [valueRA, setValueRA] = useState(""); 
     const rAChange=(event)=>{
          setValueRA(event.target.value);
     }
     const [valueMF1, setValueMF1] = useState(""); 
     const mF1Change=(event)=>{
          setValueMF1(event.target.value);
     }
     const [valueMF2, setValueMF2] = useState(""); 
     const mF2Change=(event)=>{
          setValueMF2(event.target.value);
     }
     const [valueMF3, setValueMF3] = useState(""); 
     const mF3Change=(event)=>{
          setValueMF3(event.target.value);
     }
     const [valueLD, setValueLD] = useState(""); 
     const lDChange=(event)=>{
          setValueLD(event.target.value);
     }
     const [valueD1, setValueD1] = useState(""); 
     const d1Change=(event)=>{
          setValueD1(event.target.value);
     }
     const [valueD2, setValueD2] = useState(""); 
     const d2Change=(event)=>{
          setValueD2(event.target.value);
     }
     const [valueRD, setValueRD] = useState(""); 
     const rDChange=(event)=>{
          setValueRD(event.target.value);
     }
     const [valueGK, setValueGK] = useState(""); 
     const gKChange=(event)=>{
          setValueGK(event.target.value);
     }
     const[postOuPut,setPostOuPut]=useState("post");
    

    useEffect(() => { axios.get("https://test.corentindesfarges.fr/players/79").then(response => {
          if(response.data!=null){
               setPostOuPut("put")
          }
          else{
               setPostOuPut("post")
          }
     });
     }, [props.text]);

    const ajouterTeam=(event)=>{
        event.preventDefault();
        const equipeFavorite={"leftAttacker": valueLA, "striker":valueSt,"rightAttacker":valueRA, "midFielder1":valueMF1, "midFielder2":valueMF2, "midFielder3":valueMF3, "leftDefander":valueLD, "defander1":valueD1, "defander2":valueD2, "rightDefander":valueRD, "goalKeeper":valueGK}
       if(postOuPut=="post"){
           axios.post("https://test.corentindesfarges.fr/players",equipeFavorite);
           window.location.reload();//nul 
       }
       else{
            if(postOuPut=="put"){
                 axios.put("https://test.corentindesfarges.fr/players/79",equipeFavorite); 
                 window.location.reload();//nul     
               }
          }     
     }    

    return <main className="mainEquipeType">
         <div>
        <h1>Favorite team</h1>
        <p>Add your favorite players to create your ultimate champions league team !</p>
        <form>
            <InputPlayer id="IP1" className="blackText" textLabel="Left attacker" name="Left attacker" onChange={event=>lAChange(event)}/>
            <InputPlayer id="IP2" className="blackText" textLabel="Striker" name="Striker" onChange={event=>sTChange(event)}/>
            <InputPlayer id="IP3" className="blackText" textLabel="Right attacker" name="Right attacker" onChange={event=>rAChange(event)}/>
            <InputPlayer id="IP4" className="blackText" textLabel="MidFielder" name="MidFielder1" onChange={event=>mF1Change(event)}/>
            <InputPlayer id="IP5" className="blackText" textLabel="MidFielder" name="MidFielder2" onChange={event=>mF2Change(event)}/>
            <InputPlayer id="IP6" className="blackText" textLabel="MidFielder" name="MidFielder3"onChange={event=>mF3Change(event)}/>
            <InputPlayer id="IP7" className="whiteText" textLabel="Left defender" name="Left defender" onChange={event=>lDChange(event)}/>
            <InputPlayer id="IP8" className="whiteText" textLabel="Defender" name="Defender1"onChange={event=>d1Change(event)}/>
            <InputPlayer id="IP9" className="whiteText" textLabel="Defender" name="Defender2" onChange={event=>d2Change(event)}/>
            <InputPlayer id="IP10" className="whiteText" textLabel="Right defender" name="Right defender" onChange={event=>rDChange(event)}/>
            <InputPlayer id="IP11" className="whiteText" textLabel="Goalkeeper" name="Goalkeeper" onChange={event=>gKChange(event)}/>
            <button className="boutonBlanc" onClick={ajouterTeam}>Validate the team</button>
        </form> 
        </div>
        <TableEquipeType className="tableEquipeType" text={val}/>
        <div></div>
    </main>
}