import React, { useState } from "react";


export default function InputPlayer (props) {

  const [typedText, setTypedText] = useState(""); 

  const handleTextChange = (event) => {
     setTypedText(event.target.value);
     props.onChange(event);
   }
  
  const handleClicSupr=(event)=>{
    event.preventDefault();
    setTypedText('');
  }
  return (
      <div className="form" id={props.id} >
        <label className={props.className}>{props.textLabel} </label>
        <input
            className="inputForm"
          value={typedText}
          onChange={event => handleTextChange(event)}
          type="text"
        />
        <button className="boutonRouge" onClick={handleClicSupr}>Supprimer</button>
      </div>
    );
}

