import React, { useContext } from 'react'

import { myContext } from "../useContextSample"
// import the created Context

function ContextUser() {

    // Call the state or functions we are interested in that was passed down in the provider inside the value prop.
    const { userName } = useContext(myContext)


    return (
        <div>
            <h1>Username: {userName}</h1>
        </div>
    )
}

export default ContextUser
