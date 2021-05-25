import React from "react";
import './style.css'

import TodoListItem from "../todo-list-item";

const TodoList = (props) => {

    return (
        <ul>
            <li><TodoListItem label = "Learn React"  /></li>
            <li><TodoListItem
                label = "Build Awesome App"
                important
            /></li>
            <li><TodoListItem label = "Learn Redux" /></li>
        </ul>
    )
};
export default TodoList;
