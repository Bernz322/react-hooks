import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useEffectSample() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(response => {
            setData(response.data[0])
        })
    }, [])

    return (
        <div style={style}>
            <h1>UseEffectSample</h1>
            <p>ID: {data.id}</p>
            <p>Post ID: {data.postId}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Body: {data.body}</p>
        </div>
    )
}

export default useEffectSample
