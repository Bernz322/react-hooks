import React, { useState } from 'react'

function useStateSample() {
    // useState stores states and has a fuction which you can use to change that state, 
    // and will rerender the component that has that state if changed
    const [state, setState] = useState(0);

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const increment = () => {
        setState((prevState) => {
            return prevState + 1;
        })
    }

    const decrement = () => {
        setState(state - 1)
    }

    return (
        <div style={style}>
            <h1>useState Sample</h1>
            <button onClick={increment}>Increment</button>
            <h2>State: {state}</h2>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default useStateSample
