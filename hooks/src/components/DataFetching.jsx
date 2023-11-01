import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 1000, // Limit the number of photos to 100
                },
            })
            .then(result => {
                console.log(result)
                setPosts(result.data)

            })

            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className=' card p-4 text-center  text-info bg-dark d-grid gap-4 mx-auto d-flex'>
            <h1 className='fs-1 text-white '> DataFetching (1000 images)</h1>

            <div className='d-flex mx-auto flex-wrap'>
                {posts.map(post => (

                    <img src={post.url} alt='no loaded' height='20px' key={post.id}></img>

                ))}</div>

        </div>
    )
}

export default DataFetching