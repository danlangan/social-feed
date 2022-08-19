import React, { useState } from 'react';
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreateSocialPost from "./Components/CreatePost/CreatePost";
import SocialFeedNavBar from './Components/NavBar/NavBar';
import './App.css'


function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: "I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!"}, 
  {name: 'JJ Vega', post: 'Its April fools Day, Give this a dislike if you actually like it. :)'}])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <body style={{margin: '-0.5rem'}}>
          <SocialFeedNavBar style={{paddingTop: '2rem', paddingLeft:'2rem'}}/>
        <br></br>
          <div style={{backgroundColor: "#e6f4f2"}}>
          <CreateSocialPost addNewSocialPost={addNewPost}/>
        <br></br>
          <DisplayPosts parentEntries={entries}/>
          </div>
      </body>
    </div>
  );
}

export default App;
