// This component is used by the useReducer Sample
import React from 'react';

import { ACTION_TYPE } from "../useReducerSample"

const Todo = ({ todo, dispatch }) => {

    const handleToggle = () => {
        dispatch({ type: ACTION_TYPE.TOGGLE_TODO, payload: { id: todo.id } })
    }
    const handleDelete = () => {
        dispatch({ type: ACTION_TYPE.DELETE_TODO, payload: { id: todo.id } })
    }

    return (
        <div>
            <ul>
                <li>
                    <span style={{ textDecoration: todo.isComplete ? "line-through" : "none", }}>{todo.name}</span>
                    <button style={{ marginLeft: "15px" }} onClick={handleToggle}>{todo.isComplete ? "Mark as Incomplete" : "Mark as Complete"}</button>
                    <button style={{ marginLeft: "15px" }} onClick={handleDelete}>Delete</button>
                </li>
            </ul>
        </div>
    );
}

export default Todo;
