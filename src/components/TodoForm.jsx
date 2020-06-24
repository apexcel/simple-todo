import React from 'react'

export default function TodoForm({addTodo, onKeyPressHandler, onChangeHandler, removeAll}) {

    return(
        <div className='todo-form'>
            <input className='input' type='text' onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
            <button onClick={addTodo}>
                add
            </button>
            <button onClick={removeAll}>
                del all
            </button>
        </div>
    )

}