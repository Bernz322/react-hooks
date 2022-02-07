import React, { useState, createContext } from 'react'

import ContextLogin from './forUse/ContextLogin';
import ContextUser from './forUse/ContextUser';

// createContxet can be empty
export const myContext = createContext();

// Create a component which returns the provider of the created Context above. 
// This component will have a  children parameter which really means that we can wrap the provider around it
const useContextSample = ({ children }) => {
    // In here we can have functions that changes the state of anything we put on.
    // Any state and function inside here can be used by the every other child component this provider is wrapped on by
    // using the useContext hook.
    // We will use this provider in the index.js and wrap everthing with it

    const [userName, setUserName] = useState("")

    // A Provider has value prop and anything we put on it can now be accessed by every other children component wrapped
    // around by the provider

    const context = {
        userName, 
        setUserName
    }

    return <myContext.Provider value={context}>
        {children}
    </myContext.Provider>
}

export default useContextSample