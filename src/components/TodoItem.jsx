import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import '../styles/TodoItem.scss'

TodoItem.propTypes = {
    idx: PropTypes.number,
    text: PropTypes.string,
    check: PropTypes.bool,
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    counter: PropTypes.number,
    setCounter: PropTypes.func
}

export default function TodoItem({ idx, text, check, todos, setTodos, counter, setCounter }) {

    const todo_item_ref = createRef();

    const checkItem = (e) => {
        e.preventDefault();
        const selected_dom_index = parseInt(todo_item_ref.current.attributes.index.value);
        const item_index = todos.findIndex(todo => todo.index === selected_dom_index);
        const selected = todos[item_index];
        const newTodos = [...todos];
        newTodos[item_index] = { ...selected, check: !selected.check };
        setTodos(newTodos);
    }

    const deleteItem = (e) => {
        e.stopPropagation();
        const selected_dom_index = parseInt(todo_item_ref.current.attributes.index.value);
        const newTodos = todos.filter(todo => todo.index !== selected_dom_index).map((todo, idx) => ({ index: idx, text: todo.text, check: todo.check }));
        setTodos(newTodos);
        setCounter(counter - 1);
        if (counter === 1) localStorage.clear();
    }

    return (
        <div ref={todo_item_ref} className={`todo-item ${check ? 'selected' : 'unselected'}`} key={idx} onClick={checkItem} index={idx}>
            <div className='check'>&#x2714;</div>
            <div className='todo-item-text'>{text}</div>
            <div className='delete' onClick={deleteItem}>&#x2718;</div>
        </div>
    )
}