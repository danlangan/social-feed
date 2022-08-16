import React, { useState } from 'react';
import CustomButtonThumbsUp from "./Components/CustomButton/CustomButtonThumbsUp"
import CustomButtonThumbsDown from "./Components/CustomButton/CustomButtonThumbsDown"
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts"
import CreatePost from "./Components/CreatePost/CreatePost"

function App() {

  const [entries, setEntries] = useState([{name: '', post: ''}])
  return (
    <div>
      <head><h3 style={{'margin':'1em'}}>Social<small className='text-muted'>Feed</small></h3></head>
      <body>
        <form>
          <CreatePost parentEntries={entries}/>
        </form>
        <br></br>
          <DisplayPosts parentEntries={entries}/>
      </body>
    </div>
  );
}

export default App;
