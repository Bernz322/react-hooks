import React, { useRef } from 'react'
import ButtonforImperativeHandleHook from './forUse/ButtonforImperativeHandleHook'

function useImperativeHandleSample() {
    // Lets us pass a state from a child to a parent component as ref.
    // Imagine u have a button that when pressed wil do something
    // but you want that action to be done using a parent component, we can do that using useImperativeHande hook

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const buttonRef = useRef(null)  // Create a ref and pass it unto th child component

    return (
        <div style={style}>
            <h1>useImperativeHandle Sample</h1>
            <button onClick={()=> buttonRef.current.alterToggle()}>Parent Button</button>  
            {/* I want this button to do the toggle, which can be achieved by calling the buttonRef
             and getting the created function in the child component wrapped
            inside a useImperativeHandle hook which does the toggling action.
            */}
            <ButtonforImperativeHandleHook ref={buttonRef} />
        </div>
    )
}

export default useImperativeHandleSample
