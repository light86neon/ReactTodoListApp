import React from 'react';
import ReactDom from 'react-dom'

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
//ми можешм в якості властивостей передати сам масив
    const todoData = [
        { label: 'Learn React', important: false},
        { label: 'Build Awesome App', important: true},
        { label: 'Learn Redux', important: false},
    ];

    return (
        <>
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
