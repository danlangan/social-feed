import React, { useState } from 'react';
import "./Custom-Button.css"
import { ReactComponent as ThumbsUp } from "../assets/Thumbs-Up.svg";

const CustomButtonThumbsUp = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(event){
        if(buttonClass === "inactive") {
            setButtonClass("active-thumbs-up")
        }
        else {setButtonClass("inactive");}
        props.turnIconGreen()
    }
    return (
        <div>
            <ThumbsUp
            buttonClass="inactive"
            height="2rem"
            onClick={handleClick}
            style={{ cursor: "pointer"}}
            />
        </div>
    )
}

export default CustomButtonThumbsUp;