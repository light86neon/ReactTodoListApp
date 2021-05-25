import React from 'react';

const TodoListItem = (props) => {
console.log(props);
    const style = {
        // if true == 'tomato' else 'black'
        color: props.important ? 'tomato' : 'black'
    }
    return (
        <>
        <span style={style}> { props.label } </span>
        </>
    )
}

export default TodoListItem;
