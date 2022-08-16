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
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
     );
}
 
export default CreateSocialPost;