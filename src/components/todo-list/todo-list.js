import React from "react";
import './style.css'

import TodoListItem from "../todo-list-item";

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;
        return (
            <li key = { id } className="list-group-item">
                <TodoListItem { ...itemProps } />
            </li>
        )
    })

    return (
        <ul className="list-group-item">
            { elements }
        </ul>
    )
};
export default TodoList;
