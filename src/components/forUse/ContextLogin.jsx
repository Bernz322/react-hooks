import React, { useContext } from 'react'

import { myContext } from "../useContextSample"

function ContextLogin() {

    // Call the state or functions we are interested in that was passed down in the provider inside the value prop.
    const { userName, setUserName } = useContext(myContext)

    return (
        <div>
            <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter anything here" />
        </div>
    )
}

export default ContextLogin
