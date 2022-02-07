import React, { useState, useReducer } from 'react'

import Todo from './forUse/Todo'

export const ACTION_TYPE = {
    // To avoid typo errors when calling an action, we can use a constant var to it
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    TOGGLE_TODO: "toggle-todo",
}

const reducer = (todos, action) => {
    // This reducer will have the current state (todos) and the action to be performed with a payload if there are any
    // If-else can also be used but switch is better
    switch (action.type) {
        case ACTION_TYPE.ADD_TODO:
            // In this case, we are adding a new todo to the todos list
            /* Since the list is an array, return it as it is and use spread operator to copy all the
            prev values in the array and then add a new one from the function newTodo where we pass
            in the new todo name as a parameter which will return an object containing id and completion status.
            In short, [allPrevValues, {id: num, name: newTodoName, isComplete: false}]*/
            return [...todos, newTodo(action.payload.name)]
        case ACTION_TYPE.DELETE_TODO:
            /* In order to delete a todo, we have to us the filter function and pass in the id of what we want to delete
            as a payload */
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTION_TYPE.TOGGLE_TODO:
            /* In order to toggle the completion status of a todo, we map it first and check the id of the todo, 
            they should be SIMILAR. Then we return that todo item as an object but change its isComplete value
            to the opposite. In this case, use spread operator then select the isCompelete key and modify it*/
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo
            })
        default:
            // If the action type is not found, return the current state
            return todos
    }
}

const newTodo = (name) => {
    // To make the todo item unique and ahve id for deletion and other operations, we make it as an object
    return { id: Date.now(), name, isComplete: false }
}

export default function useReducerSample() {
    // useReducer is a hook that takes in a reducer and the initial state
    /* we can imagine it as a useState where the dispatch sends actions and payloads to the reducer
    and the reducer returns the new state (todo)*/
    const [todos, dispatch] = useReducer(reducer, [])   
    const [name, setName] = useState("");   // this will hold the name of the todo item temporarily


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTION_TYPE.ADD_TODO, payload: { name } })
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter new Todo" value={name} onChange={(e) => setName(e.target.value)} />
                <button>Add new Todo</button>
            </form>
            <hr />
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}
