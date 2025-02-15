import React, { useState } from 'react'

function Addposts() {

    const [post, setPost] = useState({title:'',body:'',userId:0});

    const handleChange = (event) => {
        setPost({...post, [event.target.name] : event.target.value })
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

  return (
    <>
    <h1>Addposts</h1>
    <form onSubmit={handlesubmit}>
        <input type='text' name='title' placeholder='Title' value={post.title} onChange={handleChange} />
        <input type='text' name='body' placeholder='Body' value={post.body} onChange={handleChange} />
        <input type='text' name='userId' placeholder='UserId' value={post.userId} onChange={handleChange}/> 
        <input type='submit' value="Save" />
    </form>
    </>
  )
}

export default Addposts