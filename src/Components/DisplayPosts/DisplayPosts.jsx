import CustomButtonThumbsUp from "../CustomButton/CustomButtonThumbsUp";
import CustomButtonThumbsDown from "../CustomButton/CustomButtonThumbsDown";
import "../CustomButton/Custom-Button.css"


const DisplayPosts = (props) => {

    return(
        <div style={{paddingLeft:'25%', paddingRight: '25%', width:'50%', display: 'flex', borderTop: '2px solid grey'}}>
            <body>
                {props.parentEntries.map((entry) => {
                return (
                    <div style={{borderBottom: "2px solid grey", paddingBottom: "0.5rem"}}>
                    <h3>{entry.name}</h3>
                    <p>{entry.post}</p>
                        <div className="row">
                        <div className="column"><CustomButtonThumbsUp/></div>
                        <div className="column"><CustomButtonThumbsDown/></div>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                );
                })}
          </body>
        </div>
    );
}

export default DisplayPosts;