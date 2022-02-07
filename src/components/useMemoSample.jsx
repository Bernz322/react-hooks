import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function useMemoSample() {
    // Improves performance and gives us the ability to increase latency on many huge computations
    // inside our app

    const style = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const [data, setData] = useState()
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                setData(res.data)
            })
    }, [])

    const longestName = (comments) => {
        // This function will execute everytime there is soemthing that changes which requires this function,
        // which is not efficient. To prove that this happens, click the toggle button and see the console where
        // the "Computation complete!" message is printed everytime the button is clicked.
        // To make this more efficient, useMemo hook is used
        // This function will be passed unto the useMemo hooked and will only execute depending on the dependency array,
        // similar to useEffect.
        if (!comments) return null;

        let longestName = ""
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].name.length > longestName.length) {
                longestName = comments[i].name
            }
        }
        console.log("Computation complete!")
        return longestName
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const longestNameMemo = useMemo(() => longestName(data), [data])    // Remove this one if you want to check the effect
    // without memo where the function is executed everytime the button toggle is clicked.
    // Change also the parag in the return block to longestName(data)


    return (
        <div style={style}>
            <h1>useMemo Hook Sample</h1>
            <h3>Longest name: </h3>
            <p>{longestNameMemo}</p>    

            <>
                <button onClick={handleToggle}>Toggle</button>
                {toggle && <h3>Toggled</h3>}
            </>
        </div>
    )
}
