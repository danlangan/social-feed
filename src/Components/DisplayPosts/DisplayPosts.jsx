import CustomButtonThumbsUp from "../CustomButton/CustomButtonThumbsUp";
import CustomButtonThumbsDown from "../CustomButton/CustomButtonThumbsDown";



const DisplayPosts = (props) => {

    return(
        <table>
            <thead>
                <th>Name</th>
                <th>Post</th>
            </thead>
            <tbody>
                {props.parentEntries.map((entry) => {
                return (
                    <div>
                    <tr>{entry.name}</tr>
                    <tr>{entry.post}</tr>
                    </div>
                );
                })}
          <tr><CustomButtonThumbsUp/>, <CustomButtonThumbsDown/></tr>
          </tbody>
        </table>
    );
}

export default DisplayPosts;