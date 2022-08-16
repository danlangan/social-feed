import CustomButtonThumbsUp from "../CustomButton/CustomButtonThumbsUp";
import CustomButtonThumbsDown from "../CustomButton/CustomButtonThumbsDown";



const DisplayPosts = (props) => {

    return(
        <div style={{paddingLeft:'33%', paddingRight: '33%', width:'33%', display: 'flex', flexDirection: 'column'}}>
            <body>
                {props.parentEntries.map((entry) => {
                return (
                    <div>
                    <h3>{entry.name}</h3>
                    <p>{entry.post}</p>
                    <button><CustomButtonThumbsUp/></button><button><CustomButtonThumbsDown/></button>
                    </div>
                );
                })}
          </body>
        </div>
    );
}

export default DisplayPosts;