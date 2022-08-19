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
        <div>
        <form onSubmit={handleSubmit} style={{paddingTop:'1.5rem', paddingLeft:'33%', paddingRight: '33%', width:'33%', display: 'flex', flexDirection: 'column'}}>
            <div className="form-group"><label style={{paddingRight: '1rem'}}>Name</label>
            <input style={{position:'absolute', width: '28.25%'}} 
            className="form-control" type="text" value={name} onChange={(event) => setName(event.target.value)}/></div>
            <br></br>
            <div className="form-group"><label style={{paddingRight: '1rem'}}>Create Post</label>
            <input style={{height:"8rem", position:'absolute', width: '25.5%'}} 
            type="TextBox" value={post} onChange={(event) => setPost(event.target.value)}/></div>
            <br></br>
            <button type="submit" style={{marginTop:'7.5rem', width:'11.5', float: 'right'}}>
                Create Post</button>
        </form>
        </div>
     );
}
 
export default CreateSocialPost;