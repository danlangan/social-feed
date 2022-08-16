import React, { useState } from 'react';
import "./Custom-Button.css"

const CustomButtonThumbsDown = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(){
        if(buttonClass === "inactive") {
            setButtonClass("active-thumbs-down")
        }
        else {setButtonClass("inactive");}
    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}></button>
        </div>
    )
}

export default CustomButtonThumbsDown;