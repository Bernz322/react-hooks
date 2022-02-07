import React, {useEffect} from 'react'

export default function ComponentForUseCallback({ returnComment }) {

    useEffect(() => {
        console.log("Function was called")
    }, [returnComment]);
    return (
        <div>
            <h1>{returnComment("Jeff")}</h1>
        </div>
    )
}
