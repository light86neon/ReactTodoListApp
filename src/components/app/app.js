import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import './style.css'

const App = () => {
//ми можешм в якості властивостей передати сам масив
    const todoData = [
        { label: 'Learn React', important: false, id:1 },
        { label: 'Build Awesome App', important: true, id:2 },
        { label: 'Learn Redux', important: false, id:3 },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={ 1 } done={ 3 }/>
            <div className='top-panel d-flex'>
                <SearchPanel/>
                <ItemStatusFilter />
            </div>

            <TodoList todos={ todoData }/>
        </div>
    );
};

export default App;
