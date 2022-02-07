import React, { useState, useCallback } from 'react'

import ComponentForUseCallback from './forUse/ComponentForUseCallback'

export default function useCallbackSample() {
    // Works and solves similar problems to the useMemo
    // Diff is that useMemo memorize the returned value to a variable, 
    // for useCallback it memorizes the returned value on the function itself
    // Imagine a function called returnComponent is put inside a useEffect as a dependency array,
    // then that function will run everytime there is a state that changes (everytime toggle button is clicked)
    // As it is a function, it works just like a function where we can pass parameters unto it.
    // const returnComment = () => {    ==== sample this one ebfore the useCallback is executed
    //      return comment;
    // }

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const [comment, setComment] = useState("I am the comment");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback((name) => {
        return comment + name;
    }, [comment])

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div style={style}>
            <h1>useCallback Sample</h1>
            <ComponentForUseCallback returnComment={returnComment} />
            <button onClick={handleToggle}>Toggle</button>
            {toggle && <h3>Toggle</h3>}
        </div>
    )
}
