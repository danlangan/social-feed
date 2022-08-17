import React, { useState } from 'react';
import CustomButtonThumbsUp from "../CustomButton/CustomButtonThumbsUp";
import CustomButtonThumbsDown from "../CustomButton/CustomButtonThumbsDown";
import "../CustomButton/Custom-Button.css"


const DisplayPosts = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClickLike() {
      if(buttonClass === "inactive") {
        setButtonClass("active-thumbs-up")
    }
    else {setButtonClass("inactive");}
    }
  
    function handleClickDislike(){
      if(buttonClass === "inactive") {
          setButtonClass("active-thumbs-down")
      }
      else {setButtonClass("inactive");}
    }
  

    return(
        <div style={{paddingLeft:'33%', paddingRight: '33%', width:'33%', display: 'flex', flexDirection: 'column'}}>
            <body>
                {props.parentEntries.map((entry) => {
                return (
                    <div>
                    <h3>{entry.name}</h3>
                    <p>{entry.post}</p>
                    <CustomButtonThumbsUp turnIconGreen={handleClickLike}/>
                    <CustomButtonThumbsDown turnIconRed={handleClickDislike}/>
                    </div>
                );
                })}
          </body>
        </div>
    );
}

export default DisplayPosts;