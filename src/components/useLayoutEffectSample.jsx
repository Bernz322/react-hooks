import React, { useLayoutEffect, useRef, useEffect } from 'react'

function useLayoutEffectSample() {
    // useLayoutEffect works similar to useEffect but it will always execute BEFORE the useEffect
    // as it is synchronous and renders before everything else.

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const input = useRef()

    useLayoutEffect(() => {
        // this one is actually rendered first before the useEffect.
        // check console and it will print the value "First" before "Second" from the useEffect
        // useful when you want to render a ui first
        console.log(input.current.value)
    }, [])

    useEffect(() => {
        input.current.value = "Second"
    }, [])

    return (
        <div style={style}>
            <h1>useLayoutEffect Sample</h1>
            <input type="text" value="First" ref={input}/>
        </div>
    )
}

export default useLayoutEffectSample
