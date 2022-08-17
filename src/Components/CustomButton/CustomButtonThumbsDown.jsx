import React, { useState } from 'react';
import "./Custom-Button.css"
import { ReactComponent as ThumbsDown } from "../assets/Thumbs-Down.svg"

const CustomButtonThumbsDown = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(event){
        if(buttonClass === "inactive") {
            setButtonClass("active-thumbs-down")
        }
        else {setButtonClass("inactive");}
        props.turnIconRed()
    }
    return (
        <div>
            <ThumbsDown
            buttonClass="inactive"
            height="2rem"
            onClick={handleClick}
            style={{ cursor: "pointer"}}/>
        </div>
    )
}

export default CustomButtonThumbsDown;