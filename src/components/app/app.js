import React,{Component} from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import './style.css'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Learn Redux')
        ]
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newIten = {...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newIten,
            ...arr.slice(idx + 1)
        ];
    }

    createTodoItem (label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // todoData.splice(idx,1);  bad practice - не можна змінювати state
            //slice не змінює поточний масив
            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);
            // const newArray = [
            //     ...before,
            //     ...after
            // ];
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        // generate id
        const newItem = this.createTodoItem(text);
        //add element in array
        this.setState(({ todoData }) => {
            //push - cancel - не можна змінювати state на пряму

            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData})=> {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    render() {

        const { todoData } = this.state;

        // filter create new array
        const doneCount = todoData
            //покаже кількість елементів done
            .filter((el)=> el.done).length;
        // весь масив мінус кількість виконаних елементів це
        // кількість елементів яких потрібно виконати
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant = {this.onToggleImportant}
                          onToggleDone = { this.onToggleDone }
                />
                <ItemAddForm
                            onItemAdded = { this.addItem }
                />
            </div>
        );
    };
}
