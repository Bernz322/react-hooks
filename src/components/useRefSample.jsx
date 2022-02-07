import React, { useRef, useState } from 'react'

function useRefSample() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const username = useRef()
    const password = useRef()
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInfo({username: username.current.value, password: password.current.value})
        setLoggedIn(true)
        username.current.value = ""
        password.current.value = ""
    }

    return (
        <div style={style}>
            <h1>useRef</h1>
            <form onSubmit={handleSubmit} style={style}>
                <label>Username:</label>
                <input type="text" ref={username} placeholder="Enter your username" required />
                <label>Password:</label>
                <input type="password" ref={password} placeholder="Enter your password" required />
                <button >Login</button>
            </form>
            {loggedIn &&
                <>
                    <h1>Welcome!</h1>
                    <h3>Username: {userInfo.username}</h3>
                    <h3>Password: {userInfo.password}</h3></>}
        </div>
    )
}

export default useRefSample
