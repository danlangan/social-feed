import React, { useState } from 'react';


const CreateSocialPost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewSocialPost(newPost);
    }

    return (
        <div style={{paddingLeft:'33%', paddingRight: '33%', width:'33%', display: 'flex', flexDirection: 'column', background: ''}}>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <br></br>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <br></br>
            <label> Create Post</label>
            <br></br>
            <input height="50px" type="TextBox" value={post} onChange={(event) => setPost(event.target.value)}/>
            <br></br>
            <button type="submit">Post</button>
        </form>
        </div>
     );
}
 
export default CreateSocialPost;