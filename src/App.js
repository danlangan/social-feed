import React, { useState } from 'react';
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts"
import CreateSocialPost from "./Components/CreatePost/CreatePost"
import SocialFeedNavBar from './Components/NavBar/NavBar';


function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: "I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!"}, 
{name: 'JJ Vega', post: 'Its April fools Day, Give this a dislike if you actually like it. :)'}])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div class="container-fluid">
      <body>
          <SocialFeedNavBar/>
        <br></br>
          <CreateSocialPost addNewSocialPost={addNewPost}/>
        <br></br>
          <DisplayPosts parentEntries={entries}/>
      </body>
    </div>
  );
}

export default App;
