import React, { useState } from 'react';
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts"
import CreateSocialPost from "./Components/CreatePost/CreatePost"

function App() {

  const [entries, setEntries] = useState([{name: '', post: ''}])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <head><h3 style={{'margin':'1em'}}>Social<small className='text-muted'>Feed</small></h3></head>
      <body>
          <CreateSocialPost addNewSocialPost={addNewPost}/>
        <br></br>
          <DisplayPosts parentEntries={entries}/>
      </body>
    </div>
  );
}

export default App;
