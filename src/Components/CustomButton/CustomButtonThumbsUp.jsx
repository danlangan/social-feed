import React, { useState } from 'react';
import "./Custom-Button.css"
import { ReactComponent as ThumbsUp } from "../assets/Thumbs-Up.svg";

const CustomButtonThumbsUp = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(){
        if(buttonClass === "inactive") {
            setButtonClass("active-thumbs-up")
        }
        else {setButtonClass("inactive");}
    }
    return (
        <div>
            <ThumbsUp
            className={buttonClass}
            height="2rem"
            onClick={handleClick}
            style={{ cursor: "pointer"}}
            width='2rem'
            />
        </div>
    )
}

export default CustomButtonThumbsUp;