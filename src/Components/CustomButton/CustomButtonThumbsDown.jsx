import React, { useState } from 'react';
import "./Custom-Button.css"
import { ReactComponent as ThumbsDown } from "../assets/Thumbs-Down.svg"

const CustomButtonThumbsDown = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive-thumbs-down');
    function handleClick(){
        if(buttonClass === "inactive-thumbs-down") {
            setButtonClass("active-thumbs-down")
            console.log("set to active thumbs down ")
        }
        else {setButtonClass("inactive-thumbs-down");}
    }
    return (
        <div>
            <ThumbsDown
            className={buttonClass}
            height="2rem"
            onClick={handleClick}
            style={{ cursor: "pointer"}}
            width="2rem"
            />
        </div>
    )
}

export default CustomButtonThumbsDown;