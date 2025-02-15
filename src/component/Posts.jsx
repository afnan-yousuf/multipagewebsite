import React, { useEffect, useState } from 'react'

function Posts() {

    const [post, setPost] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {return response.json()})
        .then(data => {
            setPost(data)
        })

    },[])

  return (
    <>
    <h1>Posts</h1>
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>body</th>
                <th>Userid</th>
            </tr>
        </thead>
        <tbody>
        {
            post.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>{item.userId}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
   
    </>
  )
}

export default Posts