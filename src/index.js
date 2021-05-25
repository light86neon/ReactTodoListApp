import React from 'react';
import ReactDom from 'react-dom'

const el = (
    <>
    <h1>My Todo List</h1>
        <input placeholder="search"/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
            <li>Learn Redux</li>
        </ul>
    </>
);


    ReactDom.render(el, document.getElementById('root'));
