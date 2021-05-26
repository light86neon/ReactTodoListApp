import React from 'react';
import ReactDom from 'react-dom'

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

import './style.css'
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {
//ми можешм в якості властивостей передати сам масив
    const todoData = [
        { label: 'Learn React', important: false, id:1 },
        { label: 'Build Awesome App', important: true, id:2 },
        { label: 'Learn Redux', important: false, id:3 },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className='top-panel d-flex'>
                <SearchPanel/>
                <ItemStatusFilter />
            </div>
                <TodoList todos={todoData}/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));
