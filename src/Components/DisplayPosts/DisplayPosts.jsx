import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import CustomButtonThumbsUp from "../CustomButton/CustomButtonThumbsUp";
import CustomButtonThumbsDown from "../CustomButton/CustomButtonThumbsDown";



const DisplayPosts = (props) => {
    const [entries, setEntries] = useState([{name: '', post: ''}])

    return(
        <table>
            <thead>
                <th>Name</th>
                <th>Post</th>
            </thead>
                {props.parentEntries.map((entry) => {
                return (
                    <tr>{entry.name}</tr>
                    <tr>{entry.post}</tr>
                
          )})};
          <tr>{CustomButtonThumbsUp} {CustomButtonThumbsDown}</tr>
        </table>
    );
}