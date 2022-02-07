import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ButtonforImperativeHandleHook = forwardRef((props, ref) => {
    /* ref is the ref that we passed from the parent component 
    forwardRef is a must in here */


    const [toggle, setToggle] = useState(false);    // The main reason why we use this hook
    // We only wan't to do the toggling INSIDE this component and not in the parent component
    // We can do it if we put this state in the parent comp and put as props the setToggle
    // but what if we don't want that to do, then we use this hook.

    useImperativeHandle(ref, () => ({
        /* We then call this hook and pass in the req parameters, the ref from the parent
        and a function where we create another function that does the action that we want
        which in this case is setting the toggle state to true or false */
        alterToggle() {
            setToggle(!toggle);
        },
    }))

    return (
        <div>
            <button>Child Button</button>
            {toggle && <h2>Show me if toggle is true</h2>}
        </div>
    )
})

export default ButtonforImperativeHandleHook
